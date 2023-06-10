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
      camera={{ position: [0, 0, 0], fov: 52 }}
      //gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.4} />
      <spotLight
        intensity={0.8}
        angle={0.1}
        penumbra={1}
        position={[10, 15, -5]}
        castShadow
      />
      <Environment preset="city" />
      <CameraRig>
        {/* <Backdrop /> */}
        <ContactShadows
          resolution={512}
          position={[0, Math.PI / 2, 0]}
          opacity={1}
          scale={5}
          blur={2}
          far={0.8}
        />
        <Center>
          <Object />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
