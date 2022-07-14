import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Main from './Components/main/main'
import {Route, Routes, useLocation} from "react-router-dom"
import { AnimatePresence } from 'framer-motion';
import Projects from "./Components/projects/projects"

export default function App() {
  const location = useLocation()
  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location}>
          <Route path="" element={<Main/>} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

