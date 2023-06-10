import React, { useRef, useEffect } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import state from "../state";

const Object = (props) => {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/woman_bust_2.glb");
  const rotation = [-Math.PI / 2, Math.PI / 1, Math.PI / 1];
  const potition = [0, 0, 0];

  return (
    <group key={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.veiledVirgin_tris.geometry}
        material={materials.mia_material_x1SG}
        rotation={rotation}
        position={potition}
        {...props}
      ></mesh>
    </group>
  );
};

export default Object;
