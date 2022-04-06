import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Addposts from './pages/AddPosts';
import Home from './pages/Home';
import Login from './pages/Login'
import Profile from './pages/Profile';
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
        <Route path='/profile' element={<Profile />}/>
        <Route path='/add' element={<Addposts />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
