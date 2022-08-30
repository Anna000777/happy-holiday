import Container from "../Container/Container";
import style from './Footer.module.css';
import { ReactComponent as VKIcon } from "../../img/vk.svg";
import { ReactComponent as TgIcon } from "../../img/tg.svg";
import { ReactComponent as PinIcon } from "../../img/pin.svg";
import { ReactComponent as StIcon } from "../../img/st.svg";

const Footer = () => (
  <footer className={style.footer}>
    <Container>
    <div className={style.wrapper}>
      <div className={style.contacts}>
        <p>Design: <a href="https://t.me/Mrshmashmallowww">Anastasiia Illina</a></p>
        <p>Coder: <a href="https://t.me/kharytontseva">Anna Kharytontseva</a></p>
        <p>&copy; HBCard, 2022</p>
      </div>
      <ul className={style.social}>
        <li className={style.item}>
          <a href="https://vk.com/methed" className={style.link}>
            <VKIcon />
          </a>
        </li>
        <li className={style.item}>
          <a href="https://t.me/methed_chat_frontend" className={style.link}>
            <TgIcon />
          </a>
        </li>
        <li className={style.item}>
          <a href="https://pinterest.com" className={style.link}>
            <PinIcon /> 
          </a>
        </li>
        <li className={style.item}>
          <a href="https://stumbleupon.com" className={style.link}>
            <StIcon />
          </a>
        </li>
      </ul>
    </div>
    </Container>
  </footer>
);

export default Footer;