import { Link } from "react-router-dom";
import { navgation } from "../../assets/data";
import { LiaDownloadSolid } from "react-icons/lia";
import logo from "../../assets/Images/Logo.svg";
const Navigation = () => {
  return (
    <>
      <header id="header">
        <div className="max-w-[1250px] m-auto py-[10px] px-[15px] w-[100%] flex flex-row justify-between">
          <div className="logo w-full flexitems-center justify-center max-w-fit">
            <img src={logo} alt="Logo" className="w-[100%] max-w-[150px]" />
          </div>

          <nav className="flex gap-[15px] w-fullitems-center justify-end">
            <ul className="w-[100%] flex flex-row gap-[15px] max-w-fititems-center">
              {navgation?.map((nav) => (
                <>
                  <Link
                    to={nav.path}
                    key={nav.name}
                    className="font-Space_Grotesk text-#ffffffb3-500 flex items-center justify-center text-[#ffffffb3] px-[0.7em] py-[1.4em]"
                  >
                    <li>{nav.name}</li>
                  </Link>
                </>
              ))}
            </ul>
            <div className="navigation_button flex flex-row w-full justify-between max-w-fit items-center ">
              <Link
                to={"#"}
                className="rounded-[30px] bg-[white] font-Space_Grotesk flex gap-[10px] py-[0.7em] px-[0.7em]  shadow-lg "
              >
                <span className="btn_icon flex items-center justify-center">
                  <LiaDownloadSolid />
                </span>
                Get the App
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navigation;
