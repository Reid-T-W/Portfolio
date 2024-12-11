import React, { Suspense, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } 
from '@react-three/drei'
import CanvasLoader from '../Loader'
import { DoubleSide, FrontSide } from 'three';
import { technologies } from '../../constants';

// const Ball = (props) => {
const Ball = ({imgUrl, position}) => {
  const [decal] = useTexture([imgUrl]);
  const [hovered, setHovered] = useState(false);
  // const [rotate, setRotate] = useState(false)` 
  // const ref = useRef();

  // useFrame((_, delta) => {
  //   if (rotate) {
  //     ref.current.rotation.x += delta
  //     ref.current.rotation.y += 0.5 * delta
  //   }
  // })

  return (
    <group position={position}>
      <Float 
        speed={1.75} 
        rotationIntensity={0.5} 
        floatIntensity={2}
      >
        {/* <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} /> */}
        <mesh 
          position={position}
          castShadow 
          receiveShadow 
          scale={hovered ? 2 : 1}
          // onPointerDown={() => setRotate(!rotate)}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <planeGeometry />
          <meshBasicMaterial color="white" side={DoubleSide} map={decal}/>

          {/* <gridHelper />
          <axesHelper args={[5]} /> */}
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
        {technologies.map((technology, index) => {
          return (
              // const x = (index % 5) * 2; // Adjust the spacing between icons
              // const x = ; // Adjust the spacing between icons
              // const y = ; // Move to a new line every 5 icons
              <group key={technology.name} position={[(index % 8 - 3) * 0.5, -Math.floor(index / 8) + 2, 0]}>
                <OrbitControls
                  enableZoom={false}
                />
                <Ball key={technology.name} imgUrl={technology.icon} position={[(index % 8 - 3) * 0.85, -Math.floor(index / 8), 0]} />
              </group>
          )
        })}
        {/* <Ball imgUrl={memoizedIcon}/> */}
      </Suspense>

      <Preload all />
    </Canvas>
  )
};
export default BallCanvas