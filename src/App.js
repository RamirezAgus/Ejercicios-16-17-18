import React, { useState } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/pure/NavBar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TaskPage from './pages/TaskPage';



const App = () => {

  const [isLogged, setIsLogged] = useState(false);

  const login = (username, password) => {
    const user = JSON.parse(localStorage.getItem(username));
    console.log(user);
    setIsLogged(user?.password === password);
  };

  return (
    <div className='App'>
      <aside>
        <Navbar/>
      </aside>
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage login={login}/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/tasks' element={isLogged ? <TaskPage/> : <Navigate to='/login'/>}/>
        </Routes>
      </main>
    </div>
    
  );
}

export default App;





