import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className="h-screen bg-gray-800/95 text-white w-96 left-0 absolute">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
        <ul>
        <li className="mb-3">
            <Link to="/" className="block hover:bg-gray-700 py-2 px-4 rounded">Home</Link>
          </li>
          <li className="mb-3">
            <Link to="/Total-User" className="block hover:bg-gray-700 py-2 px-4 rounded">Total Users Created</Link>
          </li>
          <li className="mb-3">
            <Link to="/create-user" className="block hover:bg-gray-700 py-2 px-4 rounded">Create User</Link>
          </li>
          <li className="mb-3">
            <Link to="/User-Approval" className="block hover:bg-gray-700 py-2 px-4 rounded">User verification Status</Link>
          </li>
          <li className="mb-3">
            <Link to="/profile" className="block hover:bg-gray-700 py-2 px-4 rounded">Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar;
