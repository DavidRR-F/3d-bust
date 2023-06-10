import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import state from "../state";

const Object = (props) => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/woman_bust.glb");
  console.log(nodes);
  console.log(materials);
  useFrame((state, delta) => {
    easing.dampC(materials.mia_material_x1SG.color, snap.color, delta);
  });

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.veiledVirgin_tris.geometry}
        material={materials.mia_material_x1SG}
        material-roughness={1}
        dispose={null}
        {...props}
      ></mesh>
    </group>
  );
};

export default Object;
