```
const Users = () => {
  const {
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
  } = useUserManagement();

  return (
    <div>
      <UserPanel
        users={users}
        onEdit={openEditUser}
        onBan={banUser}
        onDelete={deleteUser}
      />
      <AddEditUser
        isOpen={isAddUserOpen}
        onClose={closeAddUser}
        addorEditUser={addUser}
        edit={false}
      />
      <AddEditUser
        isOpen={isEditUserOpen}
        onClose={closeEditUser}
        addorEditUser={editUser}
        edit={true}
        openEditUser={openEditUser}
        user={editedUser}
      />

      <button
        className="border mb-8 border-black p-2 mt-2 float-right"
        onClick={openAddUser}
      >
        Add user
      </button>
    </div>
  );
};

export default Users;
```
