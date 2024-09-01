import { useContext, useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import { Context } from "./main";
import { observer } from "mobx-react-lite";
import UserService from "./service/UserService";
import { IUser } from "./models/IUser";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  const getUsers = async () => {
    try {
      const response = await UserService.getAllUser();
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  if (store.isLoading) {
    return <div>Loading ...</div>;
  }

  if (!store.isAuth) {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }

  return (
    <>
      <div>
        <h1>
          {store.isAuth
            ? `Юзер Авторизован ${store.user.email}`
            : "Юзер не авторизован"}
        </h1>
        <h1>
          {store.user.isActivated
            ? `Юзер Неактивирован ${store.user.email}`
            : "Юзер не активирован"}
        </h1>
        <button onClick={() => store.logout()}>Exit</button>
        <button onClick={() => getUsers()}>Получить юзеров</button>
        {users.map((item) => (
          <div key={item.id}>
            <h2>{item.email}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default observer(App);
