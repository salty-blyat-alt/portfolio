import GitHubIcon from "@mui/icons-material/GitHub";
import "../assets/styles/Main.scss";
import profile from "../assets/images/profile.jpg";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Tooltip } from "@mui/material";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            style={{
              height: "10rem",
              objectFit: "cover",
              objectPosition: "top",
              filter: "grayscale(40%)",
            }}
            src={profile}
            alt="Avatar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <Tooltip title="salty-blyat-alt (Currently using)">
              <a
                href="https://github.com/salty-blyat-alt"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </Tooltip>

            <Tooltip title="salty-blyat (Suspended)">
              <a
                href="https://github.com/salty-blyat"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </Tooltip>

            <Tooltip title="(+855) 097 746 4977">
              <a
                href="https://t.me/Lor_Hokheng"
                target="_blank"
                rel="noreferrer"
              >
                <TelegramIcon />
              </a>
            </Tooltip>
          </div>
          <h1>Lor Hokheng</h1>
          <p>Website Developer</p>

          <div className="mobile_social_icons">
            <Tooltip title="salty-blyat-alt (Currently using)">
              <a
                href="https://github.com/salty-blyat-alt"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </Tooltip>

            <Tooltip title="salty-blyat (Suspended)">
              <a
                href="https://github.com/salty-blyat"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </Tooltip>

            <Tooltip title="(+855) 097 746 4977">
              <a
                href="https://t.me/Lor_Hokheng"
                target="_blank"
                rel="noreferrer"
              >
                <TelegramIcon />
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
