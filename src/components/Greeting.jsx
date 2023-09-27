import { useUser } from "../context/UserContext";

export default function Greeting() {
  const { currentUser } = useUser();
  return <p>You logged in as {currentUser.name}.</p>;
}
