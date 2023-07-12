import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Users from "./Pages/Users/Users";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import "./styles/global.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menucontainer">
            <Menu />
          </div>
          <div className="contentcontainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
