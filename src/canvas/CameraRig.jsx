import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";

import state from "../state";

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);
  useFrame((state, delta) => {
    // breakpoints
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;
    let zoom = 55;
    // set initial position of model
    let targetPosition = [0, 0, 0];
    // if (snap.intro) {
    //   if (isBreakpoint) targetPosition = [0, 0, zoom];
    //   if (isMobile) targetPosition = [0, 0.2, zoom];
    // } else {
    //   if (isMobile) targetPosition = [0, 0, 2, zoom];
    //   else targetPosition = [0, 0, zoom];
    //}

    // set model camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    const rotationY = -state.pointer.x / 24 + Math.PI / 2.3; // Modify this line for the desired rotation
    const rotationZ = -state.pointer.y / 10; // Modify this line for the desired rotation
    const rotationX = 6; // Modify this line for the desired rotation

    easing.dampE(
      group.current.rotation,
      [rotationY, rotationZ, rotationX],
      0.25,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
};

export default CameraRig;
