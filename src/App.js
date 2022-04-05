import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login'
import Recomendation from './pages/Recomendation';
import SignIn from './pages/SignIn'

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<SignIn/>}/> */}
        {/* <Route path='/signIn' element={<Login/>}/> */}

        <Route path='/' element={<Home/>}/>
        <Route path='/recomendation' element={<Recomendation/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
