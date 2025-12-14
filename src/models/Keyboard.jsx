
import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Keyboard(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/keyboard-transformed.glb')
  const { actions } = useAnimations(animations, group)

  function playAnimation() {
    Object.keys(actions).forEach((key) => {
      actions[key].paused = false;
      actions[key].timeScale = 2;
      actions[key].play()
    })
  }

  function pauseAnimation() {
    Object.keys(actions).forEach((key) => {
      actions[key].paused = true
    })
  }

  useEffect(() => {
    if (props.isTyping) {
      playAnimation()
    } else {
      pauseAnimation()
    }
  }, [props.isTyping])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="GLTF_SceneRootNode">
          <group name="������������������002_1" position={[0.027, 1.068, 0.951]} rotation={[Math.PI, 0, Math.PI]}>
            <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.PaletteMaterial001} />
            <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.PaletteMaterial002} />
          </group>
          <group name="����������������_20" position={[0, 1.26, 0.983]}>
            <group name="������003_19" position={[0, -0.08, 0.122]} scale={[0.435, 0.08, 0.035]}>
              <mesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials.PaletteMaterial004} />
            </group>
          </group>
          <group name="����������������001_23" position={[0, 1.26, -0.873]}>
            <group name="������������������001_21" position={[0.026, -0.192, -0.009]} rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh name="Object_57" geometry={nodes.Object_57.geometry} material={materials.PaletteMaterial001} />
              <mesh name="Object_58" geometry={nodes.Object_58.geometry} material={materials.PaletteMaterial002} />
            </group>
            <group name="����������001_22" position={[0.026, -0.075, -0.001]} scale={0.664}>
              <mesh name="Object_60" geometry={nodes.Object_60.geometry} material={materials.PaletteMaterial004} />
            </group>
          </group>
        </group>
        <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001} position={[0, 0.559, 0.009]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.PaletteMaterial002} position={[0, 0.559, 0.009]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.PaletteMaterial003} position={[-3.265, 0.093, -1.889]} rotation={[Math.PI, -Math.PI / 3, Math.PI]} />
        <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.PaletteMaterial004} position={[-0.888, 1.185, -0.857]} scale={0.664} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/keyboard-transformed.glb')
