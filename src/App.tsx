
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import Price from './pages/Price';
import CatPage from './pages/CatPage';
import DogPage from './pages/DogPage';
import Blog from './pages/Blog';

import CatDetailsPage from './pages/CatDetailsPage';
import DogDetailsPage from './pages/DogDetialsPage';


function App() {
  return (
    <div className="App">
   <Routes>
   <Route path='/' Component={Layout}>
   <Route index Component={Home} />
   <Route path="contact" Component={Contact} />
   <Route path='price' Component={Price}/>
   <Route path='cat' Component={CatPage}/>
   <Route path='cat/:id' Component={CatDetailsPage}/>
   <Route path='dog' Component={DogPage}/>
   <Route path='dog/:id' Component={DogDetailsPage}/>
   <Route path='price' Component={Price}/>
   <Route path='blog' Component={Blog}/>
   
   </Route>
   </Routes>

    </div>

  );
}

export default App;
