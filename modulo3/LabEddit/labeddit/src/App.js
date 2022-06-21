import  Router  from '../src/routes/Router';
import './App.css';
import GlobalState from './global/GlobalState';

function App() {
  return (
    <>
    <GlobalState>
      <Router/>
      </GlobalState>
    </>
  );
}

export default App;
