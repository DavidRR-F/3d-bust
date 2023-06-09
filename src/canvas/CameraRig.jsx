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
    let targetPosition = [-0.4, 0, zoom];
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, zoom];
      if (isMobile) targetPosition = [0, 0.2, zoom];
    } else {
      if (isMobile) targetPosition = [0, 0, 2, zoom];
      else targetPosition = [0, 0, zoom];
    }

    // set model camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    easing.dampE(
      group.current.rotation,
      [-state.pointer.y / 25 + Math.PI / 2.1, -state.pointer.x / 10, 7],
      0.25,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
};

export default CameraRig;
