import { useRef, memo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

interface Scene3DProps {
  mousePosition: { x: number; y: number }
}

const Scene3D = memo(({ mousePosition }: Scene3DProps) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (!meshRef.current) return
    
    // Smooth rotation
    meshRef.current.rotation.x += 0.003
    meshRef.current.rotation.y += 0.005
    
    // Follow mouse with smooth interpolation
    const targetX = mousePosition.x * 0.3
    const targetY = -mousePosition.y * 0.3
    
    meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.05
    meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05
  })

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
      <MeshDistortMaterial
        color="#06b6d4"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        wireframe
      />
    </Sphere>
  )
})

Scene3D.displayName = 'Scene3D'

export default Scene3D

