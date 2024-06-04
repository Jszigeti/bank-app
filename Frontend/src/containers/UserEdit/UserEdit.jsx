import { useState } from "react";
import "./UserEdit.style.css";
import { useSelector } from "react-redux";

function UserEdit() {
  // Retrieving user data from the store
  const { userData } = useSelector((state) => state.userReducer);
  // State creation to rendering edit form
  const [editToggle, setEditToggle] = useState(false);
  // State creation to control the form
  const [username, setUsername] = useState(userData.userName);

  // Toggle the state editToggle
  const handleToggle = (e) => {
    e.preventDefault();
    setEditToggle(!editToggle);
  };

  // Sending username when submitting the form
  const handleUsernameEdit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="header">
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
