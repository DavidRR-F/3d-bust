import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import CameraRig from "./CameraRig";
import Backdrop from "./Backdrop";
import React from "react";
import Object from "./Object";
import { ContactShadows, RandomizedLight } from "@react-three/drei";

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      eventPrefix="screen"
      camera={{ position: [0, 0, 100], fov: 25 }}
      //gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.4} />
      <spotLight
        intensity={0.8}
        angle={0.2}
        penumbra={10}
        position={[0, 25, 0]}
        castShadow
      />
      <Environment preset="city" background blur={2} />
      {/* <Backdrop /> */}
      {/* position={[0, -20, -31]}
        rotation={[-Math.PI / 2, Math.PI / 1, Math.PI / 1]}
        scale={0.5} */}
      {/* <ContactShadows
        resolution={512}
        position={[0, 0, 0]}
        opacity={1}
        scale={1}
        blur={2}
        far={0.4}
      /> */}
      <CameraRig>
        <Center>
          <Object />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
