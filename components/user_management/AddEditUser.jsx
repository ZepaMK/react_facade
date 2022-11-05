import { useState } from "react";

const AddEditUser = ({ isOpen, onClose, addorEditUser, edit, user }) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const close = () => {
    setValues({ firstName: "", lastName: "" });
    onClose();
  };

  const handleAdd = (event) => {
    event.preventDefault();

    const user = {
      _id: Math.floor(Math.random() * 10000) + 1,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      banned: false,
    };

    setValues({ firstName: "", lastName: "" });
    addorEditUser(user);
  };

  const handleEdit = (event) => {
    event.preventDefault();

    const editedUser = {
      _id: user._id,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      banned: user.banned,
    };

    setValues({ firstName: "", lastName: "" });
    addorEditUser(editedUser);
  };

  return (
    <div
      className={`drop-shadow-2xl flex flex-col bg-white p-4 fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] border border-black ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <h1 className="text-[1.4rem] font-bold mb-4 z-0">
        {edit ? "Edit user" : "Add user"}
      </h1>

      <form onSubmit={edit ? handleEdit : handleAdd} className="flex flex-col">
        <label>
          First name:
          <input
            className="ml-2 border border-black p-1"
            id="firstName"
            name="firstName"
            type="text"
            onChange={handleChange}
            value={values.firstName}
            placeholder={edit ? user.firstName : ""}
          />
        </label>
        <label>
          Last name:
          <input
            className="ml-2 border border-black p-1 mt-2"
            id="lastName"
            name="lastName"
            type="text"
            onChange={handleChange}
            value={values.lastName}
            placeholder={edit ? user.lastName : ""}
          />
        </label>

        <button className="mt-2 border border-black p-1" type="submit">
          {edit ? "Save changes" : "Add user"}
        </button>
      </form>

      <button
        className="absolute border border-black p-1 right-0 top-0 m-2"
        onClick={close}
      >
        Close
      </button>
    </div>
  );
};

export default AddEditUser;
