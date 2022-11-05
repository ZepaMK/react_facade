import React from "react";
import UserPanel from "../UserPanel";
import AddEditUser from "../AddEditUser";
import MarkdownGenerator from "../../MarkdownGenerator";
import useUserManagement from "./useUserManagement";

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
      <p className="my-4 font-semibold">Code:</p>
      <MarkdownGenerator markdown={"WithFacade.md"} />
      <p className="my-4 font-semibold">Output:</p>
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
