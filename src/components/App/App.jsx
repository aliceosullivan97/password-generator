import './App.css';
import Header from '../Header/Header';
import PasswordOptions from '../PasswordOptions/PasswordOptions';
import GenerateButton from '../GenerateButton/GenerateButton';


const App = () => {
  return (
    <div className="App">
      <Header />   
      <PasswordOptions />
      <GenerateButton />
    </div>
  );
}

export default App;
