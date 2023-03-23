import logo from './logo.svg';
import './App.css';

function App() {
  
  return (

    <div className="Container">
      <header className="App-header">
      <nav>
      <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Pelit</a></li>
              <li><a class="dropdown-item" href="#">Konsolit</a></li>
              <li><a class="dropdown-item" href="#">Keräilyesineet</a></li>
            </ul>
          </div>
            <label class="logo">Verkkokauppa</label>
            
        </nav>
      </header>
      
    </div>
  );
}

export default App;
