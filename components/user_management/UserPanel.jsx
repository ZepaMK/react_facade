const UserPanel = ({ users, onEdit, onBan, onDelete }) => {
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm table-auto text-left text-white">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-black dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              id
            </th>
            <th scope="col" className="py-3 px-6">
              First name
            </th>
            <th scope="col" className="py-3 px-6">
              Last name
            </th>
            <th scope="col" className="py-3 px-6">
              Banned
            </th>
            <th scope="col" className="py-3 px-6">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr
                key={user._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-white whitespace-nowrap dark:text-white"
                >
                  {user._id}
                </th>
                <td className="py-4 px-6">{user.firstName}</td>
                <td className="py-4 px-6">{user.lastName}</td>
                <td className="py-4 px-6">{user.banned ? "Yes" : "No"}</td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => onEdit(user)}
                    className="border border-white p-2 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onBan(user._id)}
                    className="border border-white p-2 mx-4"
                  >
                    {user.banned ? "Unban" : "Ban"}
                  </button>
                  <button
                    onClick={() => onDelete(user._id)}
                    className="border border-white p-2 mx-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserPanel;
