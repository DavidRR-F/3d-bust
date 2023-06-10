import { Canvas } from "@react-three/fiber";
import { Environment, Center, OrbitControls } from "@react-three/drei";
import CameraRig from "./CameraRig";
import React from "react";
import Object from "./Object";
import { ContactShadows } from "@react-three/drei";

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      eventPrefix="screen"
      camera={{ position: [0, 0, 100], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <hemisphereLight color="white" groundColor="blue" intensity={0.75} />
      <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
      <CameraRig>
        <Center>
          <Object />
          <ContactShadows scale={40} blur={10} far={20} />
        </Center>
        <OrbitControls />
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
