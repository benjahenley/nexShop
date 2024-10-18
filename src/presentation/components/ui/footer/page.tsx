import styles from "styles/footer.module.css";
import {
  BodyTitle,
  LargeBold,
  LargeText,
} from "@/presentation/components/ui/texts/page";
import { InstagramImg, TwitterImg } from "public/svg";

export default function Footer(props: any) {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__container-group-one flex">
            <ul className="footerUl">
              <li>
                <a>
                  <BodyTitle>Ingresar</BodyTitle>
                </a>
              </li>
              <li>
                <a>
                  <BodyTitle>Mi perfil</BodyTitle>
                </a>
              </li>
              <li>
                <a>
                  <BodyTitle>Buscar</BodyTitle>
                </a>
              </li>
              <li>
                <a>
                  <BodyTitle>Logout</BodyTitle>
                </a>
              </li>
            </ul>

            <div className="footer__redes-group flex-column">
              <LargeText>Redes</LargeText>

              <div className="flex-row">
                <TwitterImg></TwitterImg>
                <BodyTitle>My E-commerce</BodyTitle>
              </div>

              <div className="flex-row">
                <InstagramImg></InstagramImg>
                <BodyTitle>My E-commerce</BodyTitle>
              </div>
            </div>
          </div>

          <div>
            <img></img>
            <BodyTitle>©2022 apx</BodyTitle>
          </div>
        </div>
      </div>
    </>
  );
}
