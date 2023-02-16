import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import CameraController from "./CameraController";

const ModelBox = ({ camera = true, model }) => {
    const [phone, setPhone] = useState(false);

    useEffect(() => {
        window.innerWidth < 800 ? setPhone(true) : setPhone(false);
    }, []);

    return (
        <div className="model w-1/2 h-full cursor-grab tab:w-full tab:h-96 ph:h-72">
            <Canvas
                phone={phone}
                camera={{
                    fov: 60,
                    near: 0.1,
                    far: 1000,
                    position: [0, 0, phone ? 2 : 3],
                }}
                className="z-20"
            >
                {camera && <CameraController phone={phone} />}
                <ambientLight intensity={1} />
                <directionalLight color="#ccc" position={[0, 0, 10]} />
                {model}
            </Canvas>
        </div>
    );
};

export default ModelBox;
