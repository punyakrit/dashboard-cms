import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const Navigate = useNavigate()
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    city: "",
    department: "",
    workTeam: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(userData);
      
      setStep(step + 1);
    
  };

  const finalSubmit = ()=>{
    setShowPopup(true);

  }

  const closePopup = () => {
    setShowPopup(false);
    // Redirect to home route after closing popup
    // You may use any navigation method based on your routing library
    Navigate("/");
  };


  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                First Name:
              </label>
              <input
                type="text"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                City:
              </label>
              <input
                type="text"
                name="city"
                value={userData.city}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Next
            </button>
          </form>
        );
      case 2:
        return (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Department:
              </label>
              <input
                type="text"
                name="department"
                value={userData.department}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Work Team:
              </label>
              <input
                type="text"
                name="workTeam"
                value={userData.workTeam}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Next
            </button>
          </form>
        );
        case 3:
          return (
            <div className=" mx-auto">
              <div className="mb-6">
                <p className="text-xl font-semibold mb-2">User Data:</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold">First Name:</p>
                    <p>{userData.firstName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Last Name:</p>
                    <p>{userData.lastName}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Email:</p>
                    <p>{userData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">City:</p>
                    <p>{userData.city}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Department:</p>
                    <p>{userData.department}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Work Team:</p>
                    <p>{userData.workTeam}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={finalSubmit}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit for Approval
              </button>
            </div>
          );
        
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto mt-8">
    <div className="flex justify-center items-center mb-4">
      {[1, 2, 3].map((index) => (
        <motion.div
          key={index}
          className={`w-12 h-12 rounded-full flex justify-center items-center mr-4 cursor-pointer ${step === index ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
          onClick={() => setStep(index)}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <p className="font-semibold">{index}</p>
        </motion.div>
      ))}
    </div>
    {renderStep()}

    {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg">
            <p>Data Submitted Successfully</p>
            
            <button
              onClick={closePopup}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            >
              OK
            </button>
          </div>
        </div>
      )}
  </div>

  );
}

export default CreateUser;
