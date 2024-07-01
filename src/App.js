
import './App.css';
import Button from './components/Button';
import { BrowserRouter,Routes, Route, Link, NavLink } from 'react-router-dom';

//pages
import Home from './pages/Home';


function App() {
  return (

    <BrowserRouter>
    <header>
      <nav className='bg-green-300 flex justify-between'>
        <h1 className='font-bold text-3xl'>
          React Application
        </h1>
        <div className="flex space-x-4">
        <Link to = '/' className=' active:bg-yellow-500 rounded-lg items-stretch'> SignIn </Link>
        <NavLink to ='/home' className='active:bg-yellow-500 rounded-lg justify-around '>Home</NavLink>
        </div>
      </nav>
    </header>
    <main className='bg-[#0ea5e9] min-h-screen flex  text-white text-xl '>
      
      <Routes>
        <Route path="/" element={<Button/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
