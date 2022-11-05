import { useState } from "react";

const useUsersManagement = () => {
  const [users, setUsers] = useState([
    // Dummy data
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
  const [isAddUserOpen, setAddUserVisibility] = useState(false);
  const [isEditUserOpen, setEditUserVisibility] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  //Add user logic
  const addUser = (user) => {
    setUsers([...users, user]);
    setAddUserVisibility(false);
  };

  const openAddUser = () => {
    setAddUserVisibility(true);
  };

  const closeAddUser = () => {
    setAddUserVisibility(false);
  };

  const openEditUser = (user) => {
    setEditUserVisibility(true);
    setEditedUser(user);
  };

  const closeEditUser = () => {
    setEditUserVisibility(false);
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

  return {
    users,
    isAddUserOpen,
    isEditUserOpen,
    editedUser,
    openAddUser,
    addUser,
    closeAddUser,
    openEditUser,
    editUser,
    closeEditUser,
    banUser,
    deleteUser,
  };
};

export default useUsersManagement;
