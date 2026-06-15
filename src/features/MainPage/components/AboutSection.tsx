export function AboutSection() {
  return (
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
            veritatis fugiat praesentium, placeat architecto, quibusdam ducimus
            ex doloremque?
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
  );
}
