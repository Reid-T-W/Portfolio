import React, { Suspense, useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } 
from '@react-three/drei'
import CanvasLoader from '../Loader'
import { DoubleSide, FrontSide } from 'three';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [hovered, setHovered] = useState(false);

  return (
    <Float speed={1.75} rotationIntensity={0.5} 
    floatIntensity={2}>
      {/* <ambientLight intensity={0.25} /> */}
      {/* <directionalLight position={[0, 0, 0.05]} /> */}
      <mesh 
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
  );
};

const BallCanvas = ({ icon }) => {

  const memoizedIcon = useMemo(() => icon, [icon]);

  return (
    <Canvas 
      frameloop='demand'
      gl={{ preserveDrawing: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Ball imgUrl={memoizedIcon}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
};
export default BallCanvas