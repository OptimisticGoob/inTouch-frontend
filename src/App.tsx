import './App.css'
import Root from './routes/root';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

function App() {

 
  
  ReactDOM.render(
    <Router>
      <Root />
    </Router>
    ,

    document.getElementById('root')
  );

}

export default App
