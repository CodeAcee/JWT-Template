import { FC, memo, useContext, useState } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";

const LoginForm: FC = () => {
  const [mail, setMail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const { store } = useContext(Context);

  return (
    <div>
      <input
        onChange={(e) => setMail(e.target.value)}
        value={mail}
        type="text"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPass(e.target.value)}
        value={pass}
        type="password"
        placeholder="Password"
      />
      <button onClick={() => store.login(mail, pass)}>Login</button>
      <button onClick={() => store.registration(mail, pass)}>
        Registration
      </button>
    </div>
  );
};

export default observer(LoginForm);
