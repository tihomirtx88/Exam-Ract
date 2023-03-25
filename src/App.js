import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import "./main.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Logout from "./components/logout/Logout";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";

function App() {
  return (
    <UserProvider>
        <Header />

        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </main>
        <Footer />
    </UserProvider>
);
}

export default App;
