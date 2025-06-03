import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./pages/Auth/Navigation";

function App() {
  return (
    // <div className="flex items-center h-screen bg-gray-800 text-2xl text-white font-bold justify-center">
    //   App
    // </div>
    <>
      <ToastContainer />
      <Navigation />
      <main className="py-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
