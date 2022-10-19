import { Canvas } from "@react-three/fiber";
import CameraController from "./CameraController";

const ModelBox = ({ camera = true, model }) => {
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
                <directionalLight color="#ccc" position={[0, 0, 10]} />
                {model}
            </Canvas>
        </div>
    );
};

export default ModelBox;
