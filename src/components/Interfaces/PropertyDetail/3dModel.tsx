import { useGLTF } from "@react-three/drei";

const ThreeDModel = ({ props }: any) => {
  const { scene } = useGLTF('http://localhost:3000/melodia_city_hotel.glb');

  return (
    // eslint-disable-next-line react/no-unknown-property
    <primitive object={scene} {...props} />
  );
};

export default ThreeDModel;