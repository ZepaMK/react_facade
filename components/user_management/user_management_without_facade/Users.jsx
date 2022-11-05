import React, { useState } from "react";
import UserPanel from "../UserPanel";
import AddEditUser from "../AddEditUser";
import MarkdownGenerator from "../../MarkdownGenerator";

const Users = () => {
  // Dummy data
  const [users, setUsers] = useState([
    {
      _id: 5022,
      firstName: "Zep",
      lastName: "Swijghuisen",
      banned: false,
    },
    {
      _id: 2193,
      firstName: "Felix",
      lastName: "Cunningham",
      banned: false,
    },
  ]);

  //useState()
  const [isAddUserOpen, setAddUserVisibility] = useState(false);
  const [isEditUserOpen, setEditUserVisibility] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  //Add user logic
  const addUser = (user) => {
    setUsers([...users, user]);
    setAddUserVisibility(false);
  };

  //Open editer
  const openEditUser = (user) => {
    setEditUserVisibility(true);
    setEditedUser(user);
  };

  //Edit user logic
  const editUser = (editedUser) => {
    const editedUsers = [...users];
    const user = editedUsers.find((user) => user._id === editedUser._id);
    user._id = editedUser._id;
    user.firstName = editedUser.firstName;
    user.lastName = editedUser.lastName;
    user.banned = editedUser.banned;
    setUsers(editedUsers);
    setEditUserVisibility(false);
  };

  //Ban user logic
  const banUser = (userId) => {
    const newUsers = [...users];
    const user = newUsers.find((user) => user._id === userId);
    user.banned ? (user.banned = false) : (user.banned = true);
    setUsers(newUsers);
  };

  //Delete user logic
  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  return (
    <div>
      <p className="my-4 font-semibold">Code:</p>
      <MarkdownGenerator markdown={"WithoutFacade.md"} />
      <p className="my-4 font-semibold">Output:</p>
      <UserPanel
        users={users}
        onEdit={openEditUser}
        onBan={banUser}
        onDelete={deleteUser}
      />
      <AddEditUser
        isOpen={isAddUserOpen}
        onClose={() => setAddUserVisibility(false)}
        addorEditUser={addUser}
        edit={false}
      />
      <AddEditUser
        isOpen={isEditUserOpen}
        onClose={() => setEditUserVisibility(false)}
        addorEditUser={editUser}
        edit={true}
        openEditUser={openEditUser}
        user={editedUser}
      />

      <button
        className="border mb-8 border-black p-2 mt-2 float-right"
        onClick={() => setAddUserVisibility(true)}
      >
        Add user
      </button>
    </div>
  );
};

export default Users;
