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
    const rotationY = 0;
    const rotationZ = state.pointer.x / 10;
    const rotationX = 0;

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
