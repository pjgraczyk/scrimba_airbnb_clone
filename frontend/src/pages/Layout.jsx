import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="app-layout">
      <NavBar />
      <main className="app-maincontent">
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
}
