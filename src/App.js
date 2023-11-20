
import './App.css';
import Home from './Components/Home';
import AppContext from './Context/TodoContext';

function App() {
  return (
      <AppContext>
       <Home/>
      </AppContext>
    
  );
}

export default App;
