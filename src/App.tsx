import React from 'react';
import './App.css';
import { NavLink, Route, Routes } from 'react-router';
import { Task1 } from './components/Task1/Task1';
import { Task2 } from './components/Task2/Task2';
import { Task3 } from './components/Task3/Task3';
import Task4 from './components/Task4/Task4';
import PropsComponent from './components/doc-react/PropsComponent';
import StateHook from './components/doc-react/StateHook';
import ReducerHook from './components/doc-react/ReducerHook';
import ContextHook from './components/doc-react/ContextHook';
import DomEvent from './components/doc-react/DomEvent';
import Home from './components/Home';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavLink className={({ isActive }) =>
          isActive ? "App-link active" : "App-link"
        } to='/'>Home</NavLink>
        <NavLink className={({ isActive }) =>
          isActive ? "App-link active" : "App-link"
        } to='/props'>Передача prop</NavLink>
        <NavLink className={({ isActive }) =>
          isActive ? "App-link active" : "App-link"
        } to='/state'>State</NavLink>
        <NavLink className={({ isActive }) =>
          isActive ? "App-link active" : "App-link"
        } to='/reducer'>Reducer</NavLink>
        <NavLink className={({ isActive }) =>
          isActive ? "App-link active" : "App-link"
        } to='/context'>Context</NavLink>
        <NavLink className={({ isActive }) =>
          isActive ? "App-link active" : "App-link"
        } to='/dom-event'>Dom event</NavLink>
        <NavLink className={({ isActive }) =>
          isActive ? "App-link active" : "App-link"
        } to='task1'>Task 1</NavLink>
        <NavLink className={({ isActive }) =>
          isActive ? "App-link active" : "App-link"
        } to='task2'>Task 2</NavLink>
        <NavLink className={({ isActive }) =>
          isActive ? "App-link active" : "App-link"
        } to='task3'>Task 3</NavLink>
        <NavLink className={({ isActive }) =>
          isActive ? "App-link active" : "App-link"
        } to='task4'>Task 4</NavLink>
      </header>
      <main className='main'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='task1' element={<Task1 title="Task1" initialState={5} />} />
        <Route path='props' element={<PropsComponent />} />
        <Route path='state' element={<StateHook />} />
        <Route path='reducer' element={<ReducerHook />} />
        <Route path='context' element={<ContextHook />} />
        <Route path='dom-event' element={<DomEvent />} />
        <Route path='task2' element={<Task2 />} />
        <Route path='task3' element={<Task3 />} />
        <Route path='task4' element={<Task4 />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
