import footerContact from "../../api/footerApi.json";
import { TbMailPlus } from "react-icons/tb";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
const Footers = () => {
  const footerIcons = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="footer-section">
      <div className="conatiner grid grid-three-cols">
        {footerContact.map((currentData, index) => {
          const { icon, title, details } = currentData;

          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcons[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footers;
