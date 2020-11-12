import './App.css';

//React Components
import { Header } from "./components/Header";
import { AccountSummary } from "./components/AccountSummary";
import { TransactionHistory } from "./components/TransactionHistory";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from './context/TransactionContext';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
