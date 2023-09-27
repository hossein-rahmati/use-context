import { useContext } from "react";
import { CurrentUserContext } from "../App";

export default function Greeting() {
  const { currentUser } = useContext(CurrentUserContext);
  return <p>You logged in as {currentUser.name}.</p>;
}
