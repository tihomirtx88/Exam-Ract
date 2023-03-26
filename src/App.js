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
import EditTrip from "./components/edit/Edit";
import AuthWrapper from "./context/AuthWrapper";

{
  /* <Route element={<AuthWrapper />}>
            <Route path="/" element={<FilmList />} />
          </Route> */
}

function App() {
  return (
    <UserProvider>
      <Header />

      <main>
        <Routes>
          <Route element={<AuthWrapper />}>
              <Route path="/create" element={<CreateTrip />} />
              <Route path="/details/:tripId" element={<Details />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/details/:tripId/edit" element={<EditTrip />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/trips" element={<TripCatalog />} />
          
        </Routes>
      </main>
      <Footer />
    </UserProvider>
  );
}

export default App;
