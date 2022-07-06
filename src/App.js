import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Main from './Components/main/main'
import {Route,Routes} from "react-router-dom"
import Projects from './Components/projects/projects';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
