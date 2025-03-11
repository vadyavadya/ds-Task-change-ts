import { useEffect, useState } from "react"

interface User {
  id: number,
  name: string,
  email: string
}

export const Task3: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data: User[]) => setUsers(data))
        .catch((message: string) => {throw new Error(message)} )
  }, [])

  return (
    <>
      <h1>Task3</h1>
      {users.length && (
        <ul>
          {users.map((user) => <li key={user.id}>{user.name} - {user.email}</li>)}
        </ul>
      )}
    </>
  )
}