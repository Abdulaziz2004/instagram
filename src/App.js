import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import PrivateRoutes from './components/PrivateRoutes';
import Addposts from './pages/AddPosts';
import Home from './pages/Home';
import Like from './pages/Like';
import Login from './pages/Login'
import Profile from './pages/Profile';
import Recomendation from './pages/Recomendation';
import SignIn from './pages/SignIn'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signIn' element={ <SignIn/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route path='/' element={<PrivateRoutes> <Home/> </PrivateRoutes>}/>
        <Route path='/recomendation' element={<PrivateRoutes> <Recomendation/> </PrivateRoutes>}/>
        <Route path='/profile' element={<PrivateRoutes> <Profile /> </PrivateRoutes>}/>
        <Route path='/like' element={<PrivateRoutes> <Like/> </PrivateRoutes>}/>
        <Route path='/add' element={<PrivateRoutes> <Addposts/> </PrivateRoutes>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
