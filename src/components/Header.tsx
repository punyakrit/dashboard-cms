import Hamburger from "hamburger-react";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";

function Header() {
  const [nav, setNav] = useState(false);
  const [popUp, setPopup] = useState(false);
  const navigate = useNavigate();

  const hamburgerOnClick = () => {
    setNav(!nav);
  };

  const handleUserIconClick = () => {
    setPopup(!popUp);
  };

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <div className="pl-4">
            <Hamburger toggled={nav} toggle={setNav} />
          </div>
          <div className="text-3xl">CMS</div>
          <div className="pr-4 cursor-pointer" onClick={handleUserIconClick}>
            <FaCircleUser className="text-4xl" />
          </div>
        </div>
      </div>
      {popUp && (
        <div className="absolute top-16 right-4 bg-white shadow-md rounded-md p-4">
          <div className="text-gray-900">Email: Admin@gmail.com</div>
          <div className="text-gray-900">Username: Admin</div>
          <div className="mt-2">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("/profile")}>
              View Profile
            </button>
          </div>
        </div>
      )}
      {nav && <SideBar />}
    </div>
  );
}

export default Header;
