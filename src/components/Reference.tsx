import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faServer } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { faBuilding, faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Reference = () => {
  return (
    <div className="container" id="expertise">
      <div
        className="skills-container"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "start",
        }}
      >
        <h1>Reference</h1>
        <div className="skills-grid">
          <div className="skill">
            <h3>Mr. Chhay Samoeun </h3>

            <div>
              <p style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>samoeunchh@gmail.com</span>
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <FontAwesomeIcon icon={faPhone} />
                <span>089317776</span>
              </p>

              <p style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <FontAwesomeIcon icon={faBuilding} />

                <span>Setec Institute, Teacher</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reference;
