import { BtnGroup } from "../../../shared/components/BtnGroup/BtnGroup";
import { Canvas } from "../../../shared/components/Canvas";
import { Header } from "../../../shared/components/Header/Header";

export function HeroSection() {
  return (
    <section id="hero" className="flex flex-col p-5 bg-primary">
      <div className="flex flex-col" id="hero-content">
        <div className="text-group text-start">
          <p className="text-primary">Hi, I am</p>
          <h1 className="text-primary"> Pavel</h1>
          <p className="text-secondary">Front-end Developer</p>
        </div>
        <BtnGroup />
      </div>
      <div className="container">
        <div className="slide-left skewX" id="slideInLeft">
          <Header />
          <div className="image">
            <Canvas />
          </div>
        </div>
      </div>
    </section>
  );
}
