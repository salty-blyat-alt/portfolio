import "@fortawesome/free-regular-svg-icons";
import "../assets/styles/Expertise.scss";
import setec from "../assets/images/setec.png";

function Education() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Education</h1>
        <div className="skills-grid">
          <div className="skill">
            <img
              src={setec}
              alt="setec"
              style={{ height: "8rem", filter: "grayscale(100%)" }}
            />
            <h3>SETEC INSTITUTE</h3>
            <p>Management Information Systems</p>
            <p>2022 - Present</p>
          </div>

          <div className="skill">
            <img
              src="http://rupp.edu.kh/images/rupp-logo.png"
              alt="setec"
              style={{ height: "8rem", filter: "grayscale(100%)" }}
            />

            <h3>Institute of Foreign Languages</h3>
            <p>Department of English </p>
            <p> 2021 - Present</p>
          </div>

          <div className="skill">
            <img
              style={{ height: "8rem", filter: "grayscale(100%)" }}
              src="https://seeklogo.com/images/L/Lim_Kok_Wing_University-logo-A8C278E48F-seeklogo.com.png"
              alt="Limkokwing"
            />
            <h3>LIMKOKWING UNIVERSITY</h3>
            <p>Software Engineering </p>
            <p>2021 - 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
