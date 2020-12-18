import sun from './svgs/sun.svg';
import {Tides} from './tides/api/fetchTideLevels'
import './App.css';

function App() {

  
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={sun} className="sun_logo" alt="sun" />
        <p>
          Good Morning
        </p>
        
      </header>
    </div>
  );
}

export default App;
