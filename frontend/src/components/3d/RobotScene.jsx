import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useSensor } from "../../context/SensorContext";

function RobotArm() {
  const armRef = useRef();
  const boxRef = useRef();

  const { sensorData } = useSensor();

  const phase = useRef("move");
  const armColor =
    sensorData.temperature > 85
      ? "#ef4444"
      : sensorData.temperature > 75
      ? "#f59e0b"
      : "#22c55e";

  const ledColor =
    sensorData.health > 80
      ? "#22c55e"
      : sensorData.health > 50
      ? "#f59e0b"
      : "#ef4444";

  const emissiveIntensity =
    sensorData.temperature > 85
      ? 1.2
      : sensorData.temperature > 75
      ? 0.6
      : 0.2;

      let shoulderAngle = 0;
let elbowAngle = 0;

switch (phase.current) {
  case "move":
    shoulderAngle = Math.sin(Date.now() * 0.002) * 0.25;
    elbowAngle = Math.sin(Date.now() * 0.003) * 0.35;
    break;

  case "pick":
    shoulderAngle = -0.6;
    elbowAngle = 1.0;
    break;

  case "lift":
    shoulderAngle = -0.3;
    elbowAngle = 0.6;
    break;

  case "place":
    shoulderAngle = 0.4;
    elbowAngle = 0.5;
    break;

  case "drop":
    shoulderAngle = 0.6;
    elbowAngle = 0.9;
    break;

  default:
    break;
}

useFrame(() => {
  if (!armRef.current || !boxRef.current) return;

  // Robot base rotation
  armRef.current.rotation.y += sensorData.rpm / 250000;

  const box = boxRef.current;

  switch (phase.current) {

    case "move":
      box.position.x += 0.01;

      if (box.position.x >= -0.8) {
        phase.current = "pick";
      }
      break;

    case "pick":
      box.position.x += (3.35 - box.position.x) * 0.08;
      box.position.y += (0.40 - box.position.y) * 0.08;

      if (
        Math.abs(box.position.x - 3.35) < 0.05 &&
        Math.abs(box.position.y - 0.40) < 0.05
      ) {
        phase.current = "lift";
      }
      break;

    case "lift":
  box.position.x += (3.35 - box.position.x) * 0.08;
  box.position.y += (1.3 - box.position.y) * 0.08;

  if (
    Math.abs(box.position.x - 3.35) < 0.05 &&
    Math.abs(box.position.y - 1.3) < 0.05
  ) {
    phase.current = "place";
  }
  break;

    case "place":
  box.position.x += (5 - box.position.x) * 0.05;
  box.position.y += (1.3 - box.position.y) * 0.05;

  if (Math.abs(box.position.x - 5) < 0.05) {
    phase.current = "drop";
  }
  break;

    case "drop":
      box.position.y += (-1.1 - box.position.y) * 0.05;

      if (Math.abs(box.position.y + 1.1) < 0.05) {
        phase.current = "reset";
      }
      break;

    case "reset":
      box.position.set(-5, -1.1, 0);
      phase.current = "move";
      break;

    default:
      break;
  }
});

  return (
    <group ref={armRef}>
        {/* Conveyor Belt */}
<mesh position={[-3, -1.4, 0]}>
  <boxGeometry args={[4, 0.2, 1]} />
  <meshStandardMaterial color="#475569"
  metalness={0.8}
  roughness={0.3} />
</mesh>

{/* Factory Floor */}
<mesh position={[0, -1.65, 0]} receiveShadow>
  <boxGeometry args={[14, 0.15, 8]} />
  <meshStandardMaterial color="#2b3440"
  metalness={0.8}
roughness={0.3} />
</mesh>

      {/* Base */}
      <mesh
  castShadow
  receiveShadow
  position={[0, -1.2, 0]}
>
        <cylinderGeometry args={[1, 1, 0.4, 32]} />
        <meshStandardMaterial color="#374151"
        metalness={0.8}
roughness={0.3} />
      </mesh>

      {/* Vertical Column */}
      <mesh
  castShadow
  receiveShadow
  position={[0, 0, 0]}
>
        <boxGeometry args={[0.4, 2.2, 0.4]} />
        <meshStandardMaterial
  color={armColor}
  emissive={armColor}
  emissiveIntensity={emissiveIntensity}
  metalness={0.8}
roughness={0.3}
/>
      </mesh>

      {/* Top Joint */}
      <mesh
  castShadow
  receiveShadow
  position={[0, 1.2, 0]}
>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#60a5fa"
        metalness={0.8}
roughness={0.3} />
      </mesh>

      {/* Status LED */}
<mesh position={[0, 1.7, 0]}>
  <sphereGeometry args={[0.12, 32, 32]} />
  <meshStandardMaterial
    color={ledColor}
    emissive={ledColor}
    emissiveIntensity={2}
    metalness={0.8}
roughness={0.3}
  />
</mesh>

      {/* Shoulder Group */}
<group position={[0, 1.2, 0]} rotation={[0, 0, shoulderAngle]}>

  {/* Horizontal Arm */}
  <mesh
  castShadow
  receiveShadow
  position={[1, 0, 0]}
>
    <boxGeometry args={[2, 0.25, 0.25]} />
    <meshStandardMaterial
  color={armColor}
  emissive={armColor}
  emissiveIntensity={emissiveIntensity}
  metalness={0.8}
roughness={0.3}
/>
  </mesh>

  {/* Elbow Joint */}
  <mesh position={[2, 0, 0]}>
    <sphereGeometry args={[0.18, 32, 32]} />
    <meshStandardMaterial color="#f59e0b"
    metalness={0.8}
roughness={0.3} />
  </mesh>

  <group position={[2, 0, 0]} rotation={[0, 0, elbowAngle]}>

  {/* Forearm */}
  <mesh
  castShadow
  receiveShadow
  position={[0.6, -0.4, 0]} rotation={[0, 0, -0.6]}>
  <boxGeometry args={[1.2, 0.2, 0.2]} />
  <meshStandardMaterial color={armColor}
  metalness={0.8}
roughness={0.3} />
</mesh>

{/* Gripper */}
<mesh position={[3.35, -0.8, 0]}>
  <boxGeometry args={[0.25, 0.5, 0.25]} />
  <meshStandardMaterial color="#94a3b8"
  metalness={0.8}
roughness={0.3} />
</mesh>
</group>
</group>
{/* Moving Box */}
<mesh
  ref={boxRef}
  castShadow
  receiveShadow position={[-5, -1.1, 0]}>
  <boxGeometry args={[0.4, 0.4, 0.4]} />
  <meshStandardMaterial color="#e5e7eb"
  metalness={0.8}
roughness={0.3} />
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
      <Canvas
  shadows
  camera={{ position: [4, 3.5, 7], fov: 45 }}
>
      <ambientLight intensity={0.8} />

<directionalLight
  castShadow
  intensity={2}
  position={[5, 8, 5]}
/>

<pointLight
  position={[-4, 5, 3]}
  intensity={0.8}
  color="#60a5fa"
/>

        <RobotArm />

        <OrbitControls />
      </Canvas>
    </div>
  );
}