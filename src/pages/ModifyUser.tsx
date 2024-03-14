import  { useState } from 'react';
import dataUs from '../userData.json';

function ModifyUser() {
  const {data} = dataUs;

  const [users, setUsers] = useState(data);

  const handleVerificationChange = (index:any, value:any) => {
    const updatedUsers = [...users];
    updatedUsers[index].verified = value;
    setUsers(updatedUsers);

    // Save updated data in local storage
    localStorage.setItem('userData', JSON.stringify(updatedUsers));
  };

  return (
    <div className="mx-10">
      <h2 className="text-2xl font-semibold my-4">Modify User Approval</h2>
      <div style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Approved</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-4 whitespace-nowrap">{user.empId}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.firstName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.lastName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.city}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.department}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.workTeam}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={user.verified.toString()}
                    onChange={e => handleVerificationChange(index, e.target.value === 'true')}
                    className="border rounded px-2 py-1"
                  >
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ModifyUser;
