import "@/app/app.css";
import { AiOutlineEnvironment, AiOutlineInfoCircle } from "react-icons/ai";
import { FaHandshake, FaInstagram, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="text-2xl part1">
        <div className="icones">
          <FaInstagram />
          <a href="#" className="space-x-3 text-3xl text-yellow-600 ">
            <p className="text"> © Summer Show 2024</p>
          </a>
          <a href="#">
            <img src="misscam/images/Group%20(2).svg" alt="" />
          </a>
          <a href="#">
            <img src="misscam/images/Group%20(1).svg" alt="" />
          </a>
        </div>
      </div>

      <div className="part2">
        <p className="title">Liens utiles</p>
        <a href="#">
          <span>
            <AiOutlineInfoCircle className="inline-block mr-2" />
            Stats
          </span>
        </a>
        <a href="#">
          <span>
            <AiOutlineEnvironment className="inline-block mr-2" />
            Devenir partenaire
          </span>
        </a>
        <a href="#">
          <span>
            <FaHandshake className="inline-block mr-2" />
            Passer sa pub
          </span>
        </a>
      </div>
      <div className="part3">
        <p className="title">Infos</p>
        <div className="item">
          <AiOutlineEnvironment className="inline-block mr-2" />{" "}
          <span>Douala, Cameroun</span>
        </div>
        <div className="item">
          <FaPhone className="inline-block mr-2" />
          <span>+237 65633666</span>
        </div>

        <div className="item">
          <img src="misscam/images/Group%20(5).svg" alt="" />
          <span>
            {">_ "}
            <a href="https://github.com/acelest" className="underline">
              Developpeur du site
            </a>
          </span>
        </div>
      </div>

      <div className="part4">
        <p className="title">Nombre de visiteurs</p>
        <table>
          <tr>
            <th>Aujourd'hui</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>159</td>
            <td>9378</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Footer;
