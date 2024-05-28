import UserEdit from "../../features/UserEdit/UserEdit";
import { accounts } from "../../data/data";
import Account from "../../components/Account/Account";

function Accounts() {
  return (
    <main class="main bg-dark">
      <UserEdit />
      <h2 class="sr-only">Accounts</h2>
      {accounts.map((account) => (
        <Account key={Math.random()} account={account} />
      ))}
    </main>
  );
}

export default Accounts;
