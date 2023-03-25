import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import "./main.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Logout from "./components/logout/Logout";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import CreateTrip from "./components/createTrip/CreateTrip";
import TripCatalog from "./components/tripCatalog/Catalog";
import Details from "./components/details/Details";
import Profile from "./components/profile/Profile";

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
                <Route path="/create" element={<CreateTrip />} />
                <Route path="/trips" element={<TripCatalog/>}/>
                <Route path="/details/:tripId" element={<Details />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </main>
        <Footer />
    </UserProvider>
);
}

export default App;
