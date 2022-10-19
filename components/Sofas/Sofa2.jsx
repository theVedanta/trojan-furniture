import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Sofa2 = ({ animate = true }) => {
    const { nodes, materials } = useGLTF("/sofa/sofa2.glb");
    const sofa = useRef();

    useFrame(({ clock }) => {
        if (animate) sofa.current.rotation.y = clock.getElapsedTime();
    });

    return (
        <group dispose={null} ref={sofa}>
            <group
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.8}
                position={[0, -0.4, 0]}
            >
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.03}>
                    <group scale={0.4}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.sofa_geo_Leather_mat_0.geometry}
                            material={materials.Leather_mat}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.sofa_geo_Leather_mat_0_1.geometry}
                            material={materials.Leather_mat}
                        />
                    </group>
                    <group scale={0.4}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.legs_geo4_wood_mat_0.geometry}
                            material={materials.wood_mat}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
};
useGLTF.preload("/sofa/sofa2.glb");

export default Sofa2;
