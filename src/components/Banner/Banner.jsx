import { Link } from "react-router-dom";
import { LiaDownloadSolid } from "react-icons/lia";
import bannerInfo1 from "../../assets/Images/banner_info_1.jpg";
const Banner = () => {
  return (
    <>
      <section id="banner">
        <div className="banner_bc"></div>
        <div className="max-w-[1250px] m-auto py-[25px] px-[15px] w-[100%] grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          <div className="banner_info flex flex-col gap-[20px]  items-center justify-start  w-full  ">
            <div className="heading">
              <h1 className="font-Space_Grotesk text-[45px] sm:text-[70px] leading-[74.2px] text-[#fff] ">
                Unleash your creativity with BeterAI
              </h1>
            </div>
            <div className="banner_des">
              <p className="leading-[1.5em] text-white font-Space_Grotesk text-[1.2em]">
                Discover unlimited variations of yourself and create unique
                avatars. Convert yourself into any character or be in any place.
              </p>
            </div>

            <div className="banner_buttons flex flex-row w-full justify-between">
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
          </div>
          <div className="banner_info_image flex justify-center  md:justify-end items-center">
            <img
              src={bannerInfo1}
              alt="Banner_Info_1"
              className="w-full max-w-[300px] max-h-[90vh] rounded-[10px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
