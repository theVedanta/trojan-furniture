import { useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useEffect } from "react";

const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(() => {
        const controls = new OrbitControls(camera, gl.domElement);

        controls.minDistance = 3;
        controls.maxDistance = 20;
        controls.enableZoom = false;
        return () => {
            controls.dispose();
        };
    }, [camera, gl]);
    return null;
};
export default CameraController;
