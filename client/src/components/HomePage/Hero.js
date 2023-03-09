import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import mug from "../../public/home-cup.png"

const Section = styled.div`
  font-family: monospace;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: right;
  text-align: right;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 100vw;
  display: flex;
  text-align: right;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: right;
  }
`;

const Left = styled.div`
  flex: 3;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: right;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  color: #ebedef;
  @media only screen and (max-width: 768px) {
    text-align: right;
  }
`;


const Sub = styled.h2`
  font-size: 36px;
  text-align: right;
  color: #2DD4BF;
`;

const Desc = styled.p`
  font-size: 24px;
  color: #ebedef;
  text-align: right;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: right;
  }
`;


const Right = styled.div`
  flex: 3;
  position: relative;
  text-align: right;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
  @keyframes animate {
    to {
      transform: translateY(30px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>JsCafe</Title>
          <Sub>The world's #1 online cafe</Sub>
          <Desc>May your coffee kick in before reality does. 
          </Desc>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={3} />
              <directionalLight position={[2]} />
              <Sphere args={[1, 100, 200]} scale={2}>
                <MeshDistortMaterial
                  color="#ebedef"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src={mug} />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;