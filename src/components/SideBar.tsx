import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className="h-screen bg-gray-800/95 text-white w-56 left-0 absolute">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
        <ul>
        <li className="mb-2">
            <Link to="/" className="block hover:bg-gray-700 py-2 px-4 rounded">Home</Link>
          </li>
          <li className="mb-2">
            <Link to="/dashboard" className="block hover:bg-gray-700 py-2 px-4 rounded">Dashboard</Link>
          </li>
          <li className="mb-2">
            <Link to="/profile" className="block hover:bg-gray-700 py-2 px-4 rounded">Profile</Link>
          </li>
          {/* Add more list items for additional routes */}
        </ul>
      </div>
    </div>
  )
}

export default SideBar;
