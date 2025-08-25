import Login from "./Components/Login";
import Profil from "./Components/Profil";
import UserContextProvider from "./Context/UserContextProvider";

export default function App() {
  return (
    <UserContextProvider>
      <h1>Learn context api</h1>
      <Login />
      <Profil />
    </UserContextProvider>
  )
}
