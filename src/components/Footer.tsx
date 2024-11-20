import GitHubIcon from "@mui/icons-material/GitHub";
import "../assets/styles/Footer.scss";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Tooltip } from "@mui/material";

function Footer() {
  return (
    <footer>
      <div>
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
