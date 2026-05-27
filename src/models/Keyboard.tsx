"use client";

import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import type { Group } from "three";
import type { ComponentProps } from "react";

type KeyboardProps = ComponentProps<"group"> & {
  isTyping?: boolean;
};

export function Keyboard({ isTyping, ...props }: KeyboardProps) {
  const group = useRef<Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/models/keyboard-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);

  function playAnimation() {
    Object.keys(actions).forEach((key) => {
      const action = actions[key];
      if (!action) return;
      action.paused = false;
      action.timeScale = 2;
      action.play();
    });
  }

  function pauseAnimation() {
    Object.keys(actions).forEach((key) => {
      const action = actions[key];
      if (!action) return;
      action.paused = true;
    });
  }

  useEffect(() => {
    if (isTyping) {
      playAnimation();
    } else {
      pauseAnimation();
    }
  }, [isTyping]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const meshNodes = nodes as any;

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="GLTF_SceneRootNode">
          <group
            name="keyboard_part_1"
            position={[0.027, 1.068, 0.951]}
            rotation={[Math.PI, 0, Math.PI]}
          >
            <mesh
              name="Object_7"
              geometry={meshNodes.Object_7.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Object_8"
              geometry={meshNodes.Object_8.geometry}
              material={materials.PaletteMaterial002}
            />
          </group>
          <group name="keyboard_part_2" position={[0, 1.26, 0.983]}>
            <group
              name="keyboard_part_3"
              position={[0, -0.08, 0.122]}
              scale={[0.435, 0.08, 0.035]}
            >
              <mesh
                name="Object_54"
                geometry={meshNodes.Object_54.geometry}
                material={materials.PaletteMaterial004}
              />
            </group>
          </group>
          <group name="keyboard_part_4" position={[0, 1.26, -0.873]}>
            <group
              name="keyboard_part_5"
              position={[0.026, -0.192, -0.009]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <mesh
                name="Object_57"
                geometry={meshNodes.Object_57.geometry}
                material={materials.PaletteMaterial001}
              />
              <mesh
                name="Object_58"
                geometry={meshNodes.Object_58.geometry}
                material={materials.PaletteMaterial002}
              />
            </group>
            <group
              name="keyboard_part_6"
              position={[0.026, -0.075, -0.001]}
              scale={0.664}
            >
              <mesh
                name="Object_60"
                geometry={meshNodes.Object_60.geometry}
                material={materials.PaletteMaterial004}
              />
            </group>
          </group>
        </group>
        <mesh
          name="Object_4"
          geometry={meshNodes.Object_4.geometry}
          material={materials.PaletteMaterial001}
          position={[0, 0.559, 0.009]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          name="Object_5"
          geometry={meshNodes.Object_5.geometry}
          material={materials.PaletteMaterial002}
          position={[0, 0.559, 0.009]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          name="Object_22"
          geometry={meshNodes.Object_22.geometry}
          material={materials.PaletteMaterial003}
          position={[-3.265, 0.093, -1.889]}
          rotation={[Math.PI, -Math.PI / 3, Math.PI]}
        />
        <mesh
          name="Object_28"
          geometry={meshNodes.Object_28.geometry}
          material={materials.PaletteMaterial004}
          position={[-0.888, 1.185, -0.857]}
          scale={0.664}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/keyboard-transformed.glb");
