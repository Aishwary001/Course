
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home';
import About from './Pages/About';
import Course from './Pages/course';
import SignIn from './Pages/LogIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/Course' element={<Course />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/SignIn' element={<SignIn />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
