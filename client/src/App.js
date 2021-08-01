import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './Components/Theme/theme';
import Navbar from './Components/Navbar/navbar';
import Main from './Components/Main/main';
import {BrowserRouter as Router, HashRouter} from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
        
          <Navbar />
          <Main />
          
        </div>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
