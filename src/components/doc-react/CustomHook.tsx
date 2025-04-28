import { useEffect, useState } from "react";

function useLoading() {
  const [isLoading, setState] = useState(false);
  const load = (aPromise: Promise<any>) => {
    setState(true);
    return aPromise.finally(() => setState(false));
  };
  return [isLoading, load] as const; // выводит [boolean, typeof load] вместо (boolean | typeof load)[]
}

interface UserType {
  id: number,
  name: string,
  email: string
}

export default function CustomHook() {
  const [users, setUsers] = useState<UserType[] | null>(null);
  const [isLoading, load] = useLoading();

  useEffect(() => {
    load(
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((res: UserType[]) => setUsers(res))
    )
  }, [])

  return (
    <div>
      {isLoading && <p>Загрузка</p>}
      {users?.map((user) => {
        return <p key={user.id}>Имя: {user.name}, почта: {user.email}.</p>
      })}
    </div>
  )
}