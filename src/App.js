import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import Routing from "./routes/index"
function App() {
  return (
    <>
      <Routing />
      <ToastContainer />
    </>
  );
}

export default App;
