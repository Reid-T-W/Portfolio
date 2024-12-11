import React, { Suspense, useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } 
from '@react-three/drei'
import CanvasLoader from '../Loader'
import { DoubleSide, FrontSide } from 'three';
import { technologies } from '../../constants';

// const Ball = (props) => {
const Ball = ({imgUrl, position}) => {
  const [decal] = useTexture([imgUrl]);
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position}>
      <Float speed={1.75} rotationIntensity={0.5} 
      floatIntensity={2}>
        {/* <ambientLight intensity={0.25} /> */}
        {/* <directionalLight position={[0, 0, 0.05]} /> */}
        <mesh 
          position={position}
          castShadow 
          receiveShadow 
          scale={hovered ? 7 : 3.75}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <planeGeometry />
          <meshBasicMaterial color="white" side={FrontSide} map={decal}/>
        </mesh>
      </Float>
    </group>
  );
};

// const BallCanvas = ({ icon }) => {
const BallCanvas = () => {

  // const memoizedIcon = useMemo(() => icon, [icon]);

  return (
    <Canvas 
      frameloop='demand'
      gl={{ preserveDrawing: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        {technologies.map((technology, index) => (
            <group key={technology.name} position={[index * 2, 0, 0]}>
              <OrbitControls
                enableZoom={false}
              />
              <Ball key={technology.name} imgUrl={technology.icon} position={[index * 2, 0, 0]} />
          </group>
        ))}
        {/* <Ball imgUrl={memoizedIcon}/> */}
      </Suspense>

      <Preload all />
    </Canvas>
  )
};
export default BallCanvas