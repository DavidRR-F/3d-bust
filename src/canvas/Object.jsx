import React, { useRef, useEffect } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import state from "../state";

const Object = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/woman_bust_2.glb");
  const rotation = [-Math.PI / 2, Math.PI / 1, Math.PI / 1];
  const potition = [0, 0, 0];
  const scale = 0.9;
  console.log("Nodes", nodes);
  console.log("Material", materials);

  useFrame((state, delta) => {
    easing.dampC(
      materials.mia_material_x1SG.color,
      snap.darkMode ? snap.colorDark : snap.colorLight,
      delta
    ); // Modify the color based on the state or variables
  });

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.veiledVirgin_tris.geometry}
        material={materials.mia_material_x1SG}
        material-metalness={0.2}
        rotation={rotation}
        position={potition}
        scale={scale}
      >
        {/* <meshStandardMaterial
          attach="material"
          map={nodes.veiledVirgin_tris.material.map} // Use the texture image
        /> */}
      </mesh>
    </group>
  );
};

export default Object;
