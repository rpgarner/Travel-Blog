import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Posts from './components/Posts';
import Comments from './components/Comments';

function App() {
  return (
    <div >
      <header >
        <Nav />
      </header>
    <main>
      <h1>Travelr Blog</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:id' element={<Comments />} />
      </Routes>
    </main>
    </div>
  );
}

export default App;
