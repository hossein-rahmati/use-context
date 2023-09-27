import Panel from "./Panel";
import Greeting from "./Greeting";
import LoginForm from "./LoginForm";
import { useUser } from "../context/UserContext";

export default function WelcomePanel({ children }) {
  const { currentUser } = useUser();
  return (
    <Panel title="Welcome">
      {currentUser !== null ? <Greeting /> : <LoginForm />}
    </Panel>
  );
}
