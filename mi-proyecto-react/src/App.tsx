
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, Text } from '@react-three/drei'
import type { Mesh } from 'three'

function Esfera() {
  const ref = useRef<Mesh>(null)
  const [movimientos, setMovimientos] = useState(0)

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.5
  })

  return (
    <mesh
      ref={ref}
      //position={[movimientos % 2 === 0 ? 0 : -1, 0, 0]}
      //onClick={() => setMovimientos(movimientos + 1)}
    >
      <sphereGeometry args={[0.7, 16, 16]} />
      <meshStandardMaterial color="hotpink" />
      <Text position={[0, 0, 0.8]} fontSize={0.3}>
        {movimientos}
      </Text>
    </mesh>
  )
}

function Pentagono() {
  const ref = useRef<Mesh>(null)
  const [movimientos, setMovimientos] = useState(0)

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.x += delta * 0.6
  })

  return (
    <mesh
      ref={ref}
      position={[-2, movimientos * 0.3, 0]}
      onClick={() => setMovimientos(movimientos + 1)}
    >
      <cylinderGeometry args={[0.7, 0.7, 0.3, 5]} />
      <meshStandardMaterial color="deepskyblue" />
      <Text position={[0, 0, 0.4]} fontSize={0.3}>
        {movimientos}
      </Text>
    </mesh>
  )
}

function Cono() {
  const ref = useRef<Mesh>(null)
  const [movimientos, setMovimientos] = useState(0)

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.4
  })

  return (
    <mesh
      ref={ref}
      position={[2, -movimientos * 0.3, 0]}
      onClick={() => setMovimientos(movimientos + 1)}
    >
      <coneGeometry args={[0.7, 1.3, 4]} />
      <meshStandardMaterial color="mediumseagreen" />
      <Text position={[0, 0, 0.8]} fontSize={0.3}>
        {movimientos}
      </Text>
    </mesh>
  )
}

export default function App() {
  return (
    <main className="escena">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 5]} intensity={2} />

        <Environment files="/Fondo.jpg" background />

        <Esfera />
        <Pentagono />
        <Cono />

        <OrbitControls
          enablePan={false}
          minDistance={3}
          maxDistance={20}
        />
      </Canvas>

      <p className="ayuda">
        Haz clic en las figuras para moverlas y contar sus movimientos.
      </p>
    </main>
  )
}
