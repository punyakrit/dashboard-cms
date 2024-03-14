import Hamburger from "hamburger-react";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import data from '../userData.json'

function Header() {
  const [nav, setNav] = useState(false);
  const [popUp, setPopup] = useState(false);
  const navigate = useNavigate();



  const handleUserIconClick = () => {
    setPopup(!popUp);
  };

  const {username, email, admin} = data;

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <div className="pl-4">
            <Hamburger toggled={nav} toggle={setNav} />
          </div>
          <div className="text-3xl">User Manageement System</div>
          <div className="pr-4 cursor-pointer" onClick={handleUserIconClick}>
            <FaCircleUser className="text-4xl" />
          </div>
        </div>
      </div>
      {popUp && (
        <div className="absolute top-16 right-4 bg-white shadow-md rounded-md p-10 w-72">
          <div className="text-gray-900 mt-2">Email: {email}</div>
          <div className="text-gray-900 mt-2">Username: {username}</div>
          <div className="text-gray-900 mt-2 flex">Access-Type: {admin ?  <p> Admin</p> : <p> User</p>}</div>


          <div className="mt-5 flex justify-center">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded " onClick={() => navigate("/profile")}>
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
