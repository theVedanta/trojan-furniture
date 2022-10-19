import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Sofa3 = ({ animate = true }) => {
    const { nodes, materials } = useGLTF("/sofa/sofa3.glb");
    const sofa = useRef();

    useFrame(({ clock }) => {
        if (animate) sofa.current.rotation.y = clock.getElapsedTime();
    });

    return (
        <group dispose={null} ref={sofa}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[0, 0, 0]} scale={1.1}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_6.geometry}
                            material={materials.shafa}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_9.geometry}
                            material={materials.shafa}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_12.geometry}
                            material={materials.chaji}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
};
useGLTF.preload("/sofa/sofa3.glb");

export default Sofa3;
