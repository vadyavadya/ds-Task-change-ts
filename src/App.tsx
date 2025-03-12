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
import EffectHook from './components/doc-react/EffectHook';

interface PageType {
  path: string,
  name: string,
  element: React.ReactNode
}

const pages: PageType[] = [
  {
    path: '/',
    name: 'Home',
    element: <div>Page home</div>
  },
  {
    path: 'props',
    name: 'Передача prop',
    element: <PropsComponent />
  },
  {
    path: 'state',
    name: 'State',
    element: <StateHook />
  },
  {
    path: 'reducer',
    name: 'Reducer',
    element: <ReducerHook />
  },
  {
    path: 'effect',
    name: 'Effect',
    element: <EffectHook />
  },
  {
    path: 'context',
    name: 'Context',
    element: <ContextHook />
  },
  {
    path: 'dom-event',
    name: 'Dom event',
    element: <DomEvent />
  },
  {
    path: 'task1',
    name: 'Task 1',
    element: <Task1 title="Task1" initialState={5} />
  },
  {
    path: 'task2',
    name: 'Task 2',
    element: <Task2 />
  },
  {
    path: 'task3',
    name: 'Task 3',
    element: <Task3 />
  },
  {
    path: 'task4',
    name: 'Task 4',
    element: <Task4 />
  },
]
function App() {

  return (
    <div className="App">
      <header className="App-header">
        {pages.map((page) => <NavLink 
        className={({ isActive }) => isActive ? "App-link active" : "App-link"} 
        to={page.path}>{page.name}</NavLink>
        )}
      </header>
      <main className='main'>
        <Routes>
          {pages.map((page) => <Route path={page.path} element={page.element} /> )}
        </Routes>
      </main>
    </div>
  );
}

export default App;
