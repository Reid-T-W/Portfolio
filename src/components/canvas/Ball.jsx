import React, { Suspense, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } 
from '@react-three/drei'
import CanvasLoader from '../Loader'
import { DoubleSide, FrontSide } from 'three';
import { technologies } from '../../constants';


const Ball = ({imgUrl, position}) => {
  const [decal] = useTexture([imgUrl]);
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position}>
      <Float 
        speed={1.75} 
        rotationIntensity={0.5} 
        floatIntensity={2}
      >
        <mesh 
          position={position}
          castShadow 
          receiveShadow 
          scale={hovered ? 2 : 1}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <planeGeometry />
          <meshBasicMaterial color="white" side={DoubleSide} map={decal}/>
        </mesh>
      </Float>
    </group>
  );
};


const BallCanvas = () => {

  return (
    <Canvas 
      frameloop='demand'
      gl={{ preserveDrawing: true}}
    >
      
      <Suspense fallback={<CanvasLoader />}>
        {technologies.map((technology, index) => {
          const outerGroupX = (index % 8 - 3) * 0.85;
          const outerGroupY = -Math.floor(index / 8) + 3;
          const innerGroupX = (index % 8 - 3) * 0.85;
          const innerGroupY = -Math.floor(index / 8)

          return (
              <group key={technology.name} position={[outerGroupX, outerGroupY, 0]}>
                <OrbitControls
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 1.8}
                  minPolarAngle={Math.PI / 2}
                  minAzimuthAngle={-Math.PI / 40}
                  maxAzimuthAngle={Math.PI / 40}
                />
                <Ball key={technology.name} imgUrl={technology.icon} position={[innerGroupX, innerGroupY, 0]} />
              </group>
          )
        })}

      </Suspense>

      <Preload all />
    </Canvas>
  )
};
export default BallCanvas