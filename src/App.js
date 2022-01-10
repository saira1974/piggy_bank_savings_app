import './App.css';
import PiggyBank from './PiggyBank';
import AccountDetails from './AccountDetails'


function App() {
  return (
    <>
    <PiggyBank title = "Savings Pig" depositAmount={15}interest = {20} />
    <AccountDetails interest = {20}/>
    </>
    
  );
}

export default App;

