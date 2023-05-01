

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import FavoriteList from './pages/FavoriteList';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/list' element={<FavoriteList/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
