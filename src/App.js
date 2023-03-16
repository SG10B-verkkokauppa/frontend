import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="Container">
      <header className="App-header">
      <nav>
            <label class="logo"><a href="#">Verkkokauppa</a></label>
            <button type="button" id="hamburger" onclick="hideNav()"><i class="fa-solid fa-bars fa-xl"></i></button>
            <div id="navi" class="hide"></div>
        <ul>
            <li><a href="#">Games</a></li>
            <li><a href="#">Retro</a></li>
            <li><a href="#">Collector items</a></li>
        </ul>
        </nav>
      </header>
      
    </div>
  );
}

export default App;
