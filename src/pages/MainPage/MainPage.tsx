import "./MainPage.css";
import { Canvas } from "../../components/Canvas";
import { useMainContext } from "../../context/useMainContext";
import { Header } from "../../components/Header/Header";
import { Modal } from "../../components/Modal/Modal";
export function MainPage() {
  const {
    imageIndex,
    increaseIndex,
    decreaseIndex,
    images,
    openModal,
    isModalOpen,
  } = useMainContext();

  return (
    <main>
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
              <Canvas></Canvas>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about-me"
        className="flex flex-col p-5 bg-secondary items-center"
      >
        <div className="btn btn-primary">About Me</div>
        <div id="about-me-intro" className="flex flex-col items-center">
          <div className="bg-primary">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet
              iusto et harum maiores quod distinctio molestiae laboriosam
              veritatis fugiat praesentium, placeat architecto, quibusdam
              ducimus ex doloremque?
            </p>
          </div>
        </div>
        <img className="separator" src="./images/separator.svg" alt="" />
        <div className="flex-group">
          <div className="card">
            <img src="./src/assets/images/design.png" alt="" />
            <h2>Design</h2>
            <p>
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
          <div className="card">
            <img src="./src/assets/images/development.png" alt="" />
            <h2>Development</h2>
            <p>
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
          <div className="card">
            <img src="./src/assets/images/maintenance.png" alt="" />
            <h2>Maintenance</h2>
            <p>
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
        </div>
        <div className="flex-group"></div>
        <img className="separator" src="./images/separator.svg" alt="" />
        <div className="btn btn-primary" id="skills">
          Skills
        </div>
        <h2 className="s2-heading">Using now:</h2>
        <div className="grid-group">
          <div className="card">
            <img src="./src/assets/images/html.svg" alt="" />
            <h3>HTML6</h3>
          </div>
          <div className="card">
            <img src="./src/assets/images/css.svg" alt="" />
            <h3>CSS3</h3>
          </div>
          <div className="card">
            <img src="./src/assets/images/sass.svg" alt="" />
            <h3>SASS</h3>
          </div>
          <div className="card">
            <img src="./src/assets/images/js.svg" alt="" />
            <h3>JavaScript</h3>
          </div>

          <div className="card">
            <img src="./src/assets/images/react.svg" alt="" />
            <h3>React</h3>
          </div>
          <div className="card">
            <img src="./src/assets/images/bootstrap.svg" alt="" />
            <h3>Bootstrap</h3>
          </div>
          <div className="card">
            <img src="./src/assets/images/git.svg" alt="" />
            <h3>Git</h3>
          </div>
          <div className="card">
            <img src="./src/assets/images/figma.svg" alt="" />
            <h3>Figma</h3>
          </div>
        </div>
        <h2 className="s2-heading">Learning:</h2>
        <div className="grid-group">
          <div className="card">
            <img src="./src/assets/images/node.svg" alt="" />
            <h3>NODEJS</h3>
          </div>
          <div className="card">
            <img src="./src/assets/images/sql.svg" alt="" />
            <h3>MySQL</h3>
          </div>
          <div className="card">
            <img src="./src/assets/images/mongo.svg" alt="" />
            <h3>MONGODB</h3>
          </div>
          <div className="card">
            <img src="./src/assets/images/ts.png" alt="" />
            <h3>TypeScript</h3>
          </div>
        </div>
      </section>
      <section
        id="portfolio"
        className="flex flex-col p-5 bg-primary items-center"
      >
        <div className="btn btn-primary">Portfolio</div>
        <div className="flex relative">
          <div className="carousel flex">
            {images.map((image, index) => {
              return (
                <img
                  src={image}
                  key={image}
                  className={index === imageIndex ? "active" : ""}
                />
              );
            })}
          </div>
          <div className="btn-group absolute">
            <button
              className="btn-secondary"
              id="btn-prev"
              onClick={decreaseIndex}
            >
              &lt;
            </button>
            <button
              className="btn-secondary"
              id="btn-next"
              onClick={increaseIndex}
            >
              &gt;
            </button>
          </div>
        </div>
      </section>
      <section
        id="contact-me"
        className="flex flex-col p-5 bg-secondary items-center"
      >
        <div className="btn btn-primary">Contact Me</div>
        <form className="contact-form">
          <input
            type="text"
            name="formName"
            id="form__name"
            placeholder="Enter your name*"
          />
          <input
            type="text"
            name="formEmail"
            id="form__email"
            placeholder="Enter your email*"
          />
          <input
            type="text"
            name="formPhone"
            id="form__phone"
            placeholder="Phone number"
          />
          <textarea
            name="message"
            id="form__message"
            placeholder="Message"
          ></textarea>
          <button
            className="btn-primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
          >
            Submit
          </button>
        </form>
      </section>
      {isModalOpen && <Modal />}
    </main>
  );
}
