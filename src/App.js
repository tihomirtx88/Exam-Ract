import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import "./main.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";


function App() {
  return (
    <UserProvider>
        <Header />

        <main>
            <Routes>
            
            </Routes>
        </main>
        <Footer />
    </UserProvider>
);
}

export default App;
