import Hamburger from "hamburger-react";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import SideBar from "./SideBar";

function Header() {
  const [nav, setNav] = useState(false);
  const [popUp, setPopup] = useState(false);

  const hamburgerOnClick = () => {
    setNav(!nav);
  };

  const handleUserIconClick = () => {
    setPopup(!popUp);
  };

  return (
    <div>
      <div className="bg-gray-300 shadow-lg  w-screen h-16">
        <div className="flex justify-between items-center pt-2">
          <div className="pl-10" onClick={hamburgerOnClick}>
            <Hamburger />
          </div>
          <div className="text-3xl">CMS</div>
          <div>
            <div className="pr-10 cursor-pointer" onClick={handleUserIconClick}>
              <FaCircleUser className="text-4xl" />
            </div>
            {popUp && (
              <div className="absolute top-15 right-0 bg-white shadow-md rounded-md p-4">
                <div>Email : Admin@gmail.com</div>
                <div>Username : Admin</div>
                <div className="bg-blue-500 flex justify-center items-center rounded-xl mt-3">
                  <button className="text-white font-bold py-2 px-4">
                    View Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {nav && <SideBar />}
    </div>
  );
}

export default Header;
