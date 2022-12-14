import "./App.css";
import SignIn from "./components/SignIn";
import { Line } from "./components/Line";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return <div className="App">{user ? <Line /> : <SignIn />}</div>;
}

export default App;
