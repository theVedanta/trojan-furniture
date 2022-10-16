import { Canvas } from "@react-three/fiber";
import Sofa from "./Sofa";
import CameraController from "./CameraController";

const ModelBox = ({ camera = true, animate = true }) => {
    return (
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
                {camera && <CameraController />}
                <ambientLight intensity={1} />
                <Sofa animate={animate} />
            </Canvas>
        </div>
    );
};

export default ModelBox;
