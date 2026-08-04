import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useSensor } from "../../context/SensorContext";
import { OrbitControls } from "@react-three/drei";

function RobotArm() {
    const armRef = useRef();
    const { sensorData } = useSensor();
    const armColor =
  sensorData.temperature > 85
    ? "#ef4444"
    : sensorData.temperature > 75
    ? "#f59e0b"
    : "#22c55e";

useFrame(() => {
  if (!armRef.current) return;

  armRef.current.rotation.y += sensorData.rpm / 300000;
});
  return (
    <group ref={armRef}>

      {/* Base */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[1, 1, 0.4, 32]} />
        <meshStandardMaterial color="#374151" />
      </mesh>

      {/* Vertical Column */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.4, 2.2, 0.4]} />
        <meshStandardMaterial color={armColor} />
      </mesh>

      {/* Top Joint */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#60a5fa" />
      </mesh>

      {/* Horizontal Arm */}
<mesh position={[1.2, 1.2, 0]}>
  <boxGeometry args={[2, 0.25, 0.25]} />
  <meshStandardMaterial color={armColor} />
</mesh>

{/* Elbow Joint */}
<mesh position={[2.2, 1.2, 0]}>
  <sphereGeometry args={[0.18, 32, 32]} />
  <meshStandardMaterial color="#f59e0b" />
</mesh>

    </group>
  );
}

export default function RobotScene() {
  return (
    <div
      style={{
        height: "450px",
        background: "#1e293b",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <Canvas camera={{ position: [3, 3, 5], fov: 50 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} />

        <RobotArm />

        <OrbitControls />
      </Canvas>
    </div>
  );
}