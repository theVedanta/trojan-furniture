import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Sofa4 = ({ animate = true }) => {
    const { nodes, materials } = useGLTF("/sofa/sofa4.glb");
    const sofa = useRef();

    useFrame(({ clock }) => {
        if (animate) sofa.current.rotation.y = clock.getElapsedTime();
    });

    return (
        <group dispose={null} ref={sofa}>
            <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.3, -1.4]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.almofada01low001__0.geometry}
                            material={materials["Scene_-_Root"]}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
};
useGLTF.preload("/sofa/sofa4.glb");

export default Sofa4;
