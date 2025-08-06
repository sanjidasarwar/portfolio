import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import CanvasLoader from "../components/CanvasLoader";
import { HackerRoom } from "../components/HackerRoom";

import Cube from "../components/Cube";
import HeroCamera from "../components/HeroCamera";
import ReactLogo from "../components/ReactLogo";
import Rings from "../components/Ring";
import Target from "../components/Target";
import { calculateSizes } from "../data/constants";

function Hero() {
  // const controls = useControls("Hacker Room", {
  //   positionX: { value: 2.5, min: -10, max: 10 },
  //   positionY: { value: 2.5, min: -10, max: 10 },
  //   positionZ: { value: 2.5, min: -10, max: 10 },
  //   rotionX: { value: 0, min: -10, max: 10 },
  //   rotionY: { value: 0, min: -10, max: 10 },
  //   rotionZ: { value: 0, min: -10, max: 10 },
  //   scale: { value: 1, min: 0.1, max: 10 },
  // });

  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Sanjida <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient font-generalsans">
          Building Products & Brands
        </p>
      </div>
      <div className="w-full h-full inset-0 absolute">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}

export default Hero;
