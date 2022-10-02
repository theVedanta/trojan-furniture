import Link from "next/link";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";

const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(() => {
        const controls = new OrbitControls(camera, gl.domElement);

        controls.minDistance = 3;
        controls.maxDistance = 20;
        return () => {
            controls.dispose();
        };
    }, [camera, gl]);
    return null;
};

const Hero = () => {
    return (
        <section className="hero cont flex h-screen">
            <div className="hero-info w-1/2 h-full flex flex-col justify-center">
                <h1 className="font-serif text-6xl leading-snug">
                    High quality furtniture made for your <u>office space.</u>
                </h1>
                <p className="text-lg pr-32 py-10">
                    Love the giver more than the gift, we’ll take care of the
                    rest. Providing you with the best quality of services with
                    premium packaging that will leave everyone awestruck.
                </p>
                <Link href="/">
                    <a className="btn btn-primary">Explore</a>
                </Link>
            </div>

            <div className="model w-1/2 h-full cursor-grab">
                <Canvas
                    camera={{
                        fov: 60,
                        near: 0.1,
                        far: 1000,
                        position: [0, 0, 3],
                    }}
                    className="z-20"
                >
                    <CameraController />
                    <ambientLight intensity={1} />
                    <Sofa />
                </Canvas>
            </div>
        </section>
    );
};

const Sofa = (props) => {
    const { nodes, materials } = useGLTF("/sofa/sofa.glb");
    const sofa = useRef();
    useFrame(({ clock }) => {
        sofa.current.rotation.y = clock.getElapsedTime();
    });

    return (
        <group ref={sofa} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial.geometry}
                        material={materials["1004"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_1.geometry}
                        material={materials["1001"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_2.geometry}
                        material={materials["1005"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_4.geometry}
                        material={materials["1006"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_3.geometry}
                        material={materials["1003"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_5.geometry}
                        material={materials["1002"]}
                    />
                </group>
            </group>
        </group>
    );
};
useGLTF.preload("/sofa/sofa.glb");

export default Hero;
