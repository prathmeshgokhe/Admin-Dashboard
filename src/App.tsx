import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Users from "./Pages/Users/Users";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./styles/global.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "users",
      element: <Users />,
    },
    {
      path: "products",
      element: <Products />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
