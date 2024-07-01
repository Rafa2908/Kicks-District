import NavBar from "./components/navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "../src/components/home/Home";
import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import SneakerDisplay from "./components/sneaker-display/SneakerDisplay.jsx";
import Registration from "./components/reg-log/Registration.jsx";
import AdminPage from "./components/admin/admin-page/AdminPage.jsx";
import CreateForm from "./components/admin/product-form/CreateForm.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/sneaker/:id"} element={<SneakerDisplay />} />
        <Route path={"/user"} element={<Registration />} />
        <Route path={"/admin"} element={<AdminPage />} />
        <Route path={"/new-inventory"} element={<CreateForm />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
