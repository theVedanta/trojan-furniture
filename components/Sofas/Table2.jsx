import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Table2 = ({ animate = true }) => {
    const { nodes, materials } = useGLTF("/sofa/table2.glb");
    const sofa = useRef();

    useFrame(({ clock }) => {
        if (animate) sofa.current.rotation.y = clock.getElapsedTime();
    });

    return (
        <group ref={sofa} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[0, 0, 0]} scale={1}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_6.geometry}
                            material={materials.qita}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_9.geometry}
                            material={materials.lvzhi}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_12.geometry}
                            material={materials.zhuoyi}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_15.geometry}
                            material={materials.material}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_18.geometry}
                            material={materials.boli}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_21.geometry}
                            material={materials.niunai}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_24.geometry}
                            material={materials.boli}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_27.geometry}
                            material={materials.niunai}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
};
useGLTF.preload("/sofa/table2.glb");

export default Table2;
