import { useState } from "react";
import "./UserEdit.style.css";
import { useDispatch, useSelector } from "react-redux";
import { editMode, editUserName } from "../../actions/user.actions";

function UserEdit() {
  const dispatch = useDispatch();
  // Retrieving user data from the store
  const { userData, token } = useSelector((state) => state.userReducer);
  // State creation to rendering edit form
  const [editToggle, setEditToggle] = useState(false);
  // State creation to control the form
  const [userName, setUserName] = useState("");

  // Toggle the state editToggle
  const handleToggle = (e) => {
    e.preventDefault();
    setUserName(userData.userName);
    setEditToggle((editToggle) => !editToggle);
    dispatch(editMode(!editToggle));
  };

  // Sending username when submitting the form
  const handleUsernameEdit = (e) => {
    e.preventDefault();
    const username = {
      userName: userName,
    };
    dispatch(editUserName(username, token));
    setEditToggle((editToggle) => !editToggle);
    dispatch(editMode(!editToggle));
  };

  return (
    <div className={`header ${editToggle ? "header-edit" : ""}`}>
      {/* Conditions the rendering of the edit form */}
      {!editToggle ? (
        <>
          <h1>
            Welcome back
            <br />
            {userData.firstName} "{userData.userName}" {userData.lastName}!
          </h1>
          <button className="edit-button" onClick={(e) => handleToggle(e)}>
            Edit Name
          </button>
        </>
      ) : (
        <>
          <h1>Edit user info</h1>
          <form>
            <div>
              <label htmlFor="username">User name:</label>
              <input
                type="text"
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="firstName">First name:</label>
              <input
                type="text"
                id="firstName"
                disabled="disabled"
                value={userData.firstName}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last name:</label>
              <input
                type="text"
                id="lastName"
                disabled="disabled"
                value={userData.lastName}
              />
            </div>
            <div>
              <button
                className="edit-button"
                type="submit"
                onClick={(e) => handleUsernameEdit(e)}
              >
                Save
              </button>
              <button className="edit-button" onClick={(e) => handleToggle(e)}>
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
export default UserEdit;
