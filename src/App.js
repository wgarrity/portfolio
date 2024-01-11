import './styles/styles.scss';
import logo from './logo.svg';
import './App.css';
import { Header, TitleCard, ClientList } from './components';

function App() {
  return (
    <div className="App">
      <section>
        <TitleCard />
        <ClientList />
      </section>
    </div>
  );
}

export default App;
