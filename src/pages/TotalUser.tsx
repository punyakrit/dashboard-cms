import dataUs from '../userData.json';

function TotalUser() {
  const {data} = dataUs;

  // Filter verified users
  const verifiedUsers = data.filter(user => user.verified);

  return (
    <div className="mx-10">
      <h2 className="text-2xl font-semibold my-4">Verified Users</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Emp Id</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Work Team</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {verifiedUsers.map((user, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-6 py-4 whitespace-nowrap">{user.empId}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.firstName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.lastName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.city}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.department}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.workTeam}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TotalUser;
