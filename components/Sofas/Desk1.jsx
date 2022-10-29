import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Desk1 = ({ animate = true }) => {
    const { nodes, materials } = useGLTF("/sofa/desk1.glb");
    const sofa = useRef();

    useFrame(({ clock }) => {
        if (animate) sofa.current.rotation.y = clock.getElapsedTime();
    });

    return (
        <group ref={sofa} dispose={null}>
            <group
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={0.012}
                position={[0, -0.4, 0]}
            >
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Desk_Material_#7_0"].geometry}
                            material={materials.Material_7}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
};
useGLTF.preload("/sofa/desk1.glb");

export default Desk1;
