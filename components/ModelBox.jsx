import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import CameraController from "./CameraController";

const ModelBox = ({ camera = true, model }) => {
    const [zAxis, setZAxis] = useState(3);

    useEffect(() => {
        window.innerWidth < 1024 && window.innerWidth > 650
            ? setZAxis(2)
            : setZAxis(3);
    }, []);

    return (
        <div className="model w-1/2 h-full cursor-grab tab:w-full tab:h-1/2">
            <Canvas
                camera={{
                    fov: 60,
                    near: 0.1,
                    far: 1000,
                    position: [0, 0, zAxis],
                }}
                className="z-20"
            >
                {camera && <CameraController />}
                <ambientLight intensity={1} />
                <directionalLight color="#ccc" position={[0, 0, 10]} />
                {model}
            </Canvas>
        </div>
    );
};

export default ModelBox;
