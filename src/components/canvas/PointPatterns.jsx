import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { Suspense } from 'react'
import circleImg from '../../../public/circle.png'
import { useMemo } from 'react'
import { useCallback } from 'react'
import { useRef } from 'react'
import { OrbitControls } from '@react-three/drei';

function Points(){

  const imgTex = useLoader(THREE.TextureLoader, circleImg);
  const bufferRef = useRef();

  let t = 0;
  let f = 0.001;
  let a = 3;
  const graph = useCallback((x, z) => {
    return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
  }, [t, f, a])

  const count = 100
  const sep = 3

  let positions = useMemo(() => {
    let positions = []

    for(let xi = 0; xi < count; xi++){
      for(let zi = 0; zi < count; zi++){
        let x = sep * (xi - count / 2 );
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positions.push(x, y, z);
      }
    }
    return new Float32Array(positions);
  }, [count, sep, graph])

  useFrame(() => {
    t += 15
    const positions = bufferRef.current.array

    let i = 0
    for(let xi = 0; xi < count; xi++){
      for(let zi = 0; zi < count; zi++){
        let x = sep * (xi - count / 2 );
        let z = sep * (zi - count / 2);
        
        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  })
  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref = {bufferRef}
          attach='attributes-position'
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        attach="material"
        map={imgTex}
        color={0x808080}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  )
}

function AnimationCanvas() {
  return (
    <Canvas camera={{ position: [100, 10, 0], fov: 75 }}>
      <Suspense fallback={false}>
        <OrbitControls
            enableZoom={true}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
            minAzimuthAngle={-Infinity}
            maxAzimuthAngle={Infinity}
            // maxPolarAngle={Math.PI / 2}
            // minPolarAngle={Math.PI / 2}
            // minAzimuthAngle={Math.PI / 2}
            // maxAzimuthAngle={Math.PI / 2}
          />
        <Points />
      </Suspense>
    </Canvas>
  );
}

const  PointPatterns = () => {
  return (
    // <div className="anim absolute w-full h-full bg-white absolute inset-0 top-[0px]">
    <div className="anim absolute w-full h-full z-[-1] pointer-events-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  )
}

export default PointPatterns
