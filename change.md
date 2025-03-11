Создадим проект на React с использованием TypeScript, который будет включать в себя несколько заданий для освоения ключевых концепций TypeScript в контексте React. Каждое задание будет направлено на изучение определённой темы.

---

### **1. Настройка проекта**

1. Установите Node.js (если ещё не установлен).
2. Создайте новый проект с использованием Create React App и TypeScript:
   ```bash
   npx create-react-app my-ts-react-app --template typescript
   cd my-ts-react-app
   ```
3. Запустите проект:
   ```bash
   npm start
   ```

---

### **2. Структура проекта**
```
src/
├── components/
│   ├── Task1/
│   │   ├── Task1.tsx
│   │   └── Task1.test.tsx
│   ├── Task2/
│   │   ├── Task2.tsx
│   │   └── Task2.test.tsx
│   └── ... (остальные задания)
├── App.tsx
├── index.tsx
└── styles.css
```

---

### **3. Задания**

#### **Задание 1: Типизация пропсов и состояния**
**Цель**: Научиться типизировать пропсы и состояние компонента.

1. Создайте компонент `Task1` в папке `src/components/Task1/Task1.tsx`.
2. Компонент должен принимать пропсы:
   - `title` (строка).
   - `initialCount` (число).
3. Внутри компонента создайте состояние `count` (число) и кнопку для его увеличения.
4. Отобразите `title` и текущее значение `count`.

**Пример реализации**:
```tsx
import React, { useState } from 'react';

interface Task1Props {
  title: string;
  initialCount: number;
}

const Task1: React.FC<Task1Props> = ({ title, initialCount }) => {
  const [count, setCount] = useState<number>(initialCount);

  return (
    <div>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Task1;
```

**Тест**:
Создайте тест для проверки работы компонента в `Task1.test.tsx`.

---

#### **Задание 2: Типизация событий**
**Цель**: Научиться типизировать события в React.

1. Создайте компонент `Task2` в папке `src/components/Task2/Task2.tsx`.
2. Добавьте input, который принимает текст и отображает его ниже.
3. Используйте тип `React.ChangeEvent<HTMLInputElement>` для обработки события изменения input.

**Пример реализации**:
```tsx
import React, { useState } from 'react';

const Task2: React.FC = () => {
  const [text, setText] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
    </div>
  );
};

export default Task2;
```

**Тест**:
Создайте тест для проверки работы компонента в `Task2.test.tsx`.

---

#### **Задание 3: Типизация API-запросов**
**Цель**: Научиться типизировать данные, полученные из API.

1. Создайте компонент `Task3` в папке `src/components/Task3/Task3.tsx`.
2. Используйте API [JSONPlaceholder](https://jsonplaceholder.typicode.com/) для получения списка пользователей.
3. Создайте интерфейс для данных пользователя:
   ```typescript
   interface User {
     id: number;
     name: string;
     email: string;
   }
   ```
4. Отобразите список пользователей.

**Пример реализации**:
```tsx
import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const Task3: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data: User[]) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task3;
```

**Тест**:
Создайте тест для проверки работы компонента в `Task3.test.tsx`.

---

#### **Задание 4: Типизация контекста**
**Цель**: Научиться типизировать React Context.

1. Создайте компонент `Task4` в папке `src/components/Task4/Task4.tsx`.
2. Создайте контекст для темы (светлая/тёмная).
3. Используйте интерфейс для описания контекста:
   ```typescript
   interface ThemeContextType {
     theme: string;
     toggleTheme: () => void;
   }
   ```
4. Реализуйте переключение темы.

**Пример реализации**:
```tsx
import React, { createContext, useState, useContext } from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const Task4: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeToggler />
    </ThemeContext.Provider>
  );
};

const ThemeToggler: React.FC = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    return <div>Context not found</div>;
  }

  const { theme, toggleTheme } = context;

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Task4;
```

**Тест**:
Создайте тест для проверки работы компонента в `Task4.test.tsx`.

---

#### **Задание 5: Типизация форм**
**Цель**: Научиться типизировать формы и их обработку.

1. Создайте компонент `Task5` в папке `src/components/Task5/Task5.tsx`.
2. Создайте форму с полями:
   - Имя (строка).
   - Возраст (число).
   - Email (строка).
3. Используйте интерфейс для описания данных формы:
   ```typescript
   interface FormData {
     name: string;
     age: number;
     email: string;
   }
   ```
4. Отобразите данные формы после её отправки.

**Пример реализации**:
```tsx
import React, { useState } from 'react';

interface FormData {
  name: string;
  age: number;
  email: string;
}

const Task5: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', age: 0, email: '' });
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmittedData(formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'age' ? Number(value) : value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Age: {submittedData.age}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default Task5;
```

**Тест**:
Создайте тест для проверки работы компонента в `Task5.test.tsx`.

---

### **4. Итоговый проект**
Соберите все задания в одном приложении, добавив навигацию между ними. Используйте React Router для переключения между заданиями.

Пример `App.tsx`:
```tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Task1 from './components/Task1/Task1';
import Task2 from './components/Task2/Task2';
import Task3 from './components/Task3/Task3';
import Task4 from './components/Task4/Task4';
import Task5 from './components/Task5/Task5';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/task1">Task 1</Link> | 
        <Link to="/task2">Task 2</Link> | 
        <Link to="/task3">Task 3</Link> | 
        <Link to="/task4">Task 4</Link> | 
        <Link to="/task5">Task 5</Link>
      </nav>
      <Routes>
        <Route path="/task1" element={<Task1 title="Counter" initialCount={0} />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
        <Route path="/task5" element={<Task5 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

---

### **5. Запуск и тестирование**
1. Запустите проект:
   ```bash
   npm start
   ```
2. Переходите по заданиям через навигацию.
3. Проверяйте работу каждого задания и тестов.

---

Этот проект поможет вам освоить TypeScript в контексте React, начиная с базовых концепций и заканчивая продвинутыми темами. Удачи в изучении! 😊