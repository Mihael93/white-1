import './App.css';
import Header from './components/common/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepages from './components/home/Homepages';
import Footer from './components/common/footer/Footer';
import Culture from './components/culture/Culture';
import Singlepages from './components/singlePages/Singlepages';
import Politics from './components/politics/Politics';
import Cookie from './components/terms/Cookie';
import Privacy from './components/terms/Privacy';
import Terms from './components/terms/Terms';
import Sports from './components/sports/Sports';
import Reviews from './components/reviews/Reviews';

function App() {
   return (
      <div>
         <BrowserRouter>
            <Header />
            <Routes >
               <Route path='/' element={<Homepages />} />
               <Route exact path='/culture' element={<Culture />} />
               <Route exact path='/politics' element={<Politics />} />
               <Route exact path='/sports' element={<Sports />} />
               <Route exact path='/reviews' element={<Reviews />} />
               <Route path='/cookie' element={<Cookie />} />
               <Route exact path='/privacy' element={<Privacy />} />
               <Route exact path='/terms' element={<Terms />} />
               <Route exact path='/singlepage/:id' element={<Singlepages />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </div>
   );
}

export default App;