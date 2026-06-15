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
        <div className="btn-group flex">
          <div className="btn-secondary">
            <img src="./src/assets/images/mail.svg" alt="mail" />
          </div>
          <div className="btn-secondary">
            <img src="./src/assets/images/github.svg" alt="github" />
          </div>
          <div className="btn-secondary">
            <img src="./src/assets/images/linkedin.svg" alt="linkedIn" />
          </div>
        </div>
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
