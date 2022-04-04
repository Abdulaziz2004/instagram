import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import SignIn from './pages/SignIn'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
