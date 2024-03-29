import img from "../assets/profile.png";
import data from "../userData.json";
function Profile() {
  const { username, password, email, roles , admin} = data;

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="p-6">
          <div className="flex items-center justify-center">
            <img src={img} alt="User" className="w-24 h-24 rounded-full" />
          </div>
          <div className="text-center mt-4">
            <h1 className="text-2xl font-bold">{username}</h1>
            <p className="text-gray-600">{email}</p>
            <p className="">{password}</p>
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Roles</h2>
            <ul className=" text-white flex p-2 rounded-md">
            {roles.map((role) => (
              <Roles name={role} />
            ))}
            </ul>
            
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Access Type</h2>
            {admin ?  <p>Admin</p> : <p>User</p>}
           
          </div>
        </div>
      </div>
    </div>
  );
}

function Roles({ name }: any) {
  return (
    <div>
      <li className="mr-2 py-1 px-2 bg-gray-700 rounded">{name}</li>
    </div>
  );
}

export default Profile;
