import logo from './logo.svg';
import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [progress, setProgress] = useState(0)

  return (
    <Router>

      <Navbar />
      <LoadingBar
      color='#f11946'
      height={4}
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route exact path='/' element={<News setProgress={setProgress} category='general'  key='general'/>} />
        <Route exact path='/business' element={<News setProgress={setProgress} category='business' key='business'/>} />
        <Route exact path='/sports' element={<News setProgress={setProgress} category='sports' key='sports'/>} />
        <Route exact path='/technology' element={<News setProgress={setProgress} category='technology' key='technology'/>} />
        <Route exact path='/entertainment' element={<News setProgress={setProgress} category='entertainment' key='entertainment'/>} />
        <Route exact path='/science' element={<News setProgress={setProgress} category='science' key='science'/>} />
        <Route exact path='/health' element={<News setProgress={setProgress} category='health' key='health'/>} />
      </Routes>
    </Router>
  );
}

export default App;
