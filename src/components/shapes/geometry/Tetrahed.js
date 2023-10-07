// trunk-ignore(eslint/prettier/prettier)
import { Canvas } from '@react-three/fiber';
import {
  Tetrahedron,
  PresentationControls,
} from "@react-three/drei";
// import shadows from '@mui/material/styles/shadows';

const Tetra = () => {
  return (
    <Canvas
      shadows camera={{ position: [0, 0, 10], fov: 25 }}>
      <pointLight position={[10, 10, 10]} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />
      <ambientLight intensity={1} />
      <PresentationControls
        enabled={true}
        global={false}
        cursor={true}
        snap={false}
        speed={1}
        zoom={1}
        rotation={[0, 0, 0]}
        polar={[0, Math.PI / 2]}
        azimuth={[-Infinity, Infinity]}
        enableRotate={true}
        enableZoom={true}
        config={{ mass: 1, tension: 170, friction: 26 }}>


        <Tetrahedron
          args={[1, 0]}
          position={[0, 0, 0]}>
          <meshStandardMaterial
            color="red" />
        </Tetrahedron>

      </PresentationControls>
    </Canvas>
  );


};





export { Tetra };