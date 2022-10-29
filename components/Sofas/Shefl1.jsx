import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Shelf1 = ({ animate = true }) => {
    const { nodes, materials } = useGLTF("/sofa/shelf1.glb");
    const sofa = useRef();

    useFrame(({ clock }) => {
        if (animate) sofa.current.rotation.y = clock.getElapsedTime();
    });

    return (
        <group ref={sofa} dispose={null}>
            <group
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.01}
                position={[-1, -1, 1]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.Divisore_03}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials.Divisore_02}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.Mensola_01}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.Mensola_03}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.Mensola_02}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials.Mensola_04}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10.geometry}
                    material={materials.Parete_Dx_02}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9.geometry}
                    material={materials.Parete_Dx_01}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials.Mensola_05}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_12.geometry}
                    material={materials.Parete_Sx_02}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_11.geometry}
                    material={materials.Parete_Sx_01}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_13.geometry}
                    material={materials.Divisore_01}
                />
            </group>
        </group>
    );
};
useGLTF.preload("/sofa/shelf1.glb");

export default Shelf1;
