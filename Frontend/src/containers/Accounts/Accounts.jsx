import UserEdit from "../../components/UserEdit/UserEdit";
import { accounts } from "../../data/data";
import Account from "../../components/Account/Account";
import { useSelector } from "react-redux";

function Accounts() {
  // Retrieve the state of editMode to modify CSS
  const { editMode } = useSelector((state) => state.user);

  return (
    // Edit CSS based on editMode state
    <main className={`main ${editMode ? "edit-bg" : "bg-dark"}`}>
      <UserEdit />
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account) => (
        <Account key={Math.random()} account={account} />
      ))}
    </main>
  );
}

export default Accounts;
