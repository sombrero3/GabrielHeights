import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav'
import PagesContainer from './PagesContainer/PagesContainer';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Nav />
      <PagesContainer />
    </div>
  );
}

export default App;