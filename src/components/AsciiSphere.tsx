import { useEffect, useRef, useState } from 'react'
import { ACCENT } from '../theme'

interface AsciiSphereProps {
  cols?: number
  rows?: number
  fontSize?: number
  opacity?: number
  speed?: number
  interactive?: boolean
  style?: React.CSSProperties
  className?: string
}

// Dark -> light density ramp (Clave-style glyphs)
const RAMP = '.,:;-~=+ox*coSX08#@'

// Default light: upper-left, toward viewer
const DEF = (() => {
  const x = -0.5
  const y = 0.6
  const z = 0.62
  const l = Math.hypot(x, y, z)
  return { x: x / l, y: y / l, z: z / l }
})()

/* Rotating cyan ASCII sphere.
   Hover effect: the light direction follows the cursor, so the highlight
   slides around the sphere as you move over it (plus a subtle glow + spin-up).
   Brightness is eased per-cell frame-to-frame so glyphs stay smooth. */
const AsciiSphere = ({
  cols = 52,
  rows = 27,
  fontSize = 12,
  opacity = 0.6,
  speed = 1,
  interactive = true,
  style,
  className,
}: AsciiSphereProps) => {
  const ref = useRef<HTMLPreElement>(null)
  const speedMul = useRef(1)
  const speedTarget = useRef(1)
  const light = useRef({ ...DEF })
  const lightTarget = useRef({ ...DEF })
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const cx = cols / 2
    const cy = rows / 2
    const radiusY = rows * 0.46
    const radiusX = radiusY * 1.7 // compensate for tall character cells

    const cells = cols * rows
    const lumBuf = new Float32Array(cells) // persists across frames for easing
    const target = new Float32Array(cells)
    const zbuf = new Float32Array(cells)

    let raf = 0
    let prev = 0
    let phase = 0

    const render = (t: number) => {
      if (!prev) prev = t
      const dt = Math.min(50, t - prev) // clamp after tab-switch
      prev = t

      // ease hover speed + light direction toward their targets
      speedMul.current += (speedTarget.current - speedMul.current) * Math.min(1, dt * 0.006)
      const lf = Math.min(1, dt * 0.009)
      const L = light.current
      const LT = lightTarget.current
      L.x += (LT.x - L.x) * lf
      L.y += (LT.y - L.y) * lf
      L.z += (LT.z - L.z) * lf
      const ln = Math.hypot(L.x, L.y, L.z) || 1
      const Lx = L.x / ln
      const Ly = L.y / ln
      const Lz = L.z / ln

      phase += dt * 0.001 * speed * speedMul.current
      const A = phase * 0.42
      const B = phase * 0.26
      const cosA = Math.cos(A)
      const sinA = Math.sin(A)
      const cosB = Math.cos(B)
      const sinB = Math.sin(B)

      target.fill(0)
      zbuf.fill(-Infinity)

      for (let u = 0; u < Math.PI * 2; u += 0.035) {
        const cosU = Math.cos(u)
        const sinU = Math.sin(u)
        for (let v = 0; v < Math.PI; v += 0.018) {
          const sinV = Math.sin(v)
          const sx = sinV * cosU
          const sy = sinV * sinU
          const sz = Math.cos(v)

          const y1 = sy * cosA - sz * sinA
          const z1 = sy * sinA + sz * cosA
          const x2 = sx * cosB + z1 * sinB
          const z2 = -sx * sinB + z1 * cosB
          const y2 = y1

          const px = Math.round(cx + x2 * radiusX)
          const py = Math.round(cy - y2 * radiusY)
          if (px < 0 || px >= cols || py < 0 || py >= rows) continue

          const idx = px + py * cols
          if (z2 > zbuf[idx]) {
            const lum = x2 * Lx + y2 * Ly + z2 * Lz
            if (lum > 0) {
              zbuf[idx] = z2
              target[idx] = lum
            }
          }
        }
      }

      const ease = Math.min(1, dt * 0.014)
      const maxRamp = RAMP.length - 1
      let str = ''
      for (let r = 0; r < rows; r++) {
        let line = ''
        const base = r * cols
        for (let c = 0; c < cols; c++) {
          const i = base + c
          const lv = lumBuf[i] + (target[i] - lumBuf[i]) * ease
          lumBuf[i] = lv
          line += lv < 0.05 ? ' ' : RAMP[Math.min(maxRamp, Math.floor(lv * RAMP.length))]
        }
        str += line + '\n'
      }
      // Mutate the existing text node in place rather than replacing it
      // (node.textContent = ... destroys the text node under the cursor each
      // frame, which makes React misfire mouseleave and "drops" the hover).
      if (node.firstChild) node.firstChild.nodeValue = str
      else node.textContent = str
      raf = requestAnimationFrame(render)
    }

    raf = requestAnimationFrame(render)
    return () => cancelAnimationFrame(raf)
  }, [cols, rows, speed])

  const handleMove = (e: React.MouseEvent) => {
    if (!interactive) return
    const rect = e.currentTarget.getBoundingClientRect()
    // cursor offset from center, normalized to [-1, 1]
    const dx = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const dy = ((e.clientY - rect.top) / rect.height) * 2 - 1
    // point the highlight toward the cursor (y inverted: screen down = world down)
    lightTarget.current = { x: dx * 0.95, y: -dy * 0.95, z: 0.62 }
  }

  return (
    <div className={className} style={{ ...style, pointerEvents: 'none' }}>
      <pre
        ref={ref}
        aria-hidden="true"
        style={{
          margin: 0,
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: `${fontSize}px`,
          lineHeight: 1,
          letterSpacing: 0,
          color: ACCENT,
          opacity: hover ? Math.min(1, opacity + 0.28) : opacity,
          textShadow: hover
            ? '0 0 20px rgba(6,182,212,0.7), 0 0 7px rgba(6,182,212,0.55)'
            : '0 0 9px rgba(6,182,212,0.4)',
          transition: 'opacity 0.55s ease, text-shadow 0.55s ease',
          userSelect: 'none',
          whiteSpace: 'pre',
        }}
      />

      {/* Static, non-animating hit-area: capturing the mouse here (rather than on
          the per-frame-updated <pre>) keeps the hover locked while the cursor is
          anywhere inside the sphere's box — it never spuriously disengages. */}
      {interactive && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'auto',
            cursor: 'crosshair',
          }}
          onMouseEnter={() => {
            setHover(true)
            speedTarget.current = 1.5
          }}
          onMouseMove={handleMove}
          onMouseLeave={() => {
            setHover(false)
            speedTarget.current = 1
            lightTarget.current = { ...DEF }
          }}
        />
      )}
    </div>
  )
}

export default AsciiSphere
