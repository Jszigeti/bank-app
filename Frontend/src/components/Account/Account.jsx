import { useSelector } from "react-redux";
import "./Account.style.css";

function Account({ account }) {
  // Retrieve the state of editMode to modify CSS
  const { editMode } = useSelector((state) => state.user);

  return (
    // Edit CSS based on editMode state
    <section className={`account ${editMode ? "account-edit" : ""}`}>
      <div className="account-content-wrapper">
        <h3 className="account-title">{account.title}</h3>
        <p className="account-amount">{account.amount}</p>
        <p className="account-amount-description">{account.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

export default Account;
