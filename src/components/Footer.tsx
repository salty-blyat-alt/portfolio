import GitHubIcon from "@mui/icons-material/GitHub";
import "../assets/styles/Footer.scss";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Tooltip } from "@mui/material";
import GitlabIcon from "../icons/GitlabIcon";

function Footer() {
  return (
    <footer>
      <div>
        <Tooltip title="salty-blyat-alt">
          <a
            href="https://github.com/salty-blyat-alt"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </Tooltip>
        <Tooltip title="Lor Hokheng">
          <a
            href="https://gitlab.com/hokheng12123"
            target="_blank"
            rel="noreferrer"
          >
            <GitlabIcon />
          </a>
        </Tooltip>
        <Tooltip title="(+855) 097 746 4977">
          <a href="https://t.me/Lor_Hokheng" target="_blank" rel="noreferrer">
            <TelegramIcon />
          </a>
        </Tooltip>
      </div>
      <p>
        A portfolio by{" "}
        <a
          href="https://github.com/salty-blyat-alt"
          target="_blank"
          rel="noreferrer"
        >
          Lor Hokheng
        </a>{" "}
        with 💜
      </p>
    </footer>
  );
}

export default Footer;
