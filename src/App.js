import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import "./main.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Logout from "./components/logout/Logout";
import Home from "./components/home/Home";

function App() {
  return (
    <UserProvider>
        <Header />

        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </main>
        <Footer />
    </UserProvider>
);
}

export default App;
