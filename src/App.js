import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import SignIn from './pages/SignIn'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
