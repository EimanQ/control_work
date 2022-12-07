import './App.css';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Tasks from './pages/Tasks/Tasks';
import Cabinet from './pages/Cabinet/Cabinet'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/tasks" element={<Tasks />}></Route>
        <Route path="/cabinet" element={<Cabinet />}></Route>
      </Routes>
    </>
  );
}

export default App;
