import './styles/styles.scss';
import logo from './logo.svg';
import './App.css';
import { Header, TitleCard } from './components';

function App() {
  return (
    <div className="App">
      <Header/ >
      <section>
        <TitleCard />
        <img src={logo} className="App-logo" alt="logo" />
      </section>
    </div>
  );
}

export default App;
