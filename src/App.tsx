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
import EffectHook from './components/doc-react/EffectHook';
import RefHook from './components/doc-react/RefHook';
import CustomHook from './components/doc-react/CustomHook';
import FormNoLib from './components/doc-react/FormNoLib';
import FormikMainComponent from './components/formik/FormikMainComponent';
import FormikUseFormik from './components/formik/2FormikUseFormik';
import FormikYupReducingBoilerplate from './components/formik/3FormikYupReducingBoilerplate';

interface PageType {
  name: string,
  path?: string,
  element?: React.ReactNode,
  children?: PageType[]
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
    name: "Хуки",
    children: [
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
        path: 'refhook',
        name: 'RefHook',
        element: <RefHook />
      },
      {
        path: 'customhook',
        name: 'CustomHook',
        element: <CustomHook />
      },
      {
        path: 'context',
        name: 'Context',
        element: <ContextHook />
      },
    ]
  },

  {
    path: 'dom-event',
    name: 'Dom event',
    element: <DomEvent />
  },
  {
    name: "Формы",
    children: [
      {
        path: 'form-no-lib',
        name: 'Form no lib',
        element: <FormNoLib />
      },
      {
        path: 'form-formik',
        name: 'Formik',
        element: <FormikMainComponent />
      },
      {
        path: 'form-formik-use-formik',
        name: 'Formik UseFormik',
        element: <FormikUseFormik />
      },
      {
        path: 'form-formik-yup-reduce-boilerplate',
        name: 'Formik 2 Yup reducer boilerplate',
        element: <FormikYupReducingBoilerplate />
      },
    ],
  },
  {
    name: 'Задачи',
    children: [
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
    ],
  },

]
function App() {



  return (
    <div className="App">
      <header className="App-header">
        {pages.map((page) => {
          if (!page?.children) {
            if (page.path) {
              return (
                <NavLink key={page.path}
                  className={({ isActive }) => isActive ? "App-link active" : "App-link"}
                  to={page.path}>{page.name}</NavLink>
              )
            } else {
              throw new Error('Нету такой ссылки')
            }
          } else {
            return (
              <span key={page.name} className='App-link'>
                <span style={{ cursor: 'pointer' }}>{page.name}</span>
                <ul className='sub-menu'>
                  {page.children.map(el => {
                    if (el?.path) {
                      return (
                        <li key={el.path}>
                          <NavLink
                            className={({ isActive }) => isActive ? "App-link active" : "App-link"}
                            to={el.path}>{el.name}</NavLink>
                        </li>
                      )
                    } else {
                      throw Error("нету ссылки")
                    }
                  })
                  }
                </ul>
              </span>)
          }
        })}
      </header >
      <main className='main'>
        <Routes>
          {pages.map((page) => {
            if (page.children) {
              return page.children.map(el => <Route path={el.path} element={el.element} />)
            } else {
              return <Route key={page.path} path={page.path} element={page.element} />
            }
          }
          )}
        </Routes>
      </main>
    </div >
  );
}

export default App;
