// import Navbar from "./components/navbar/Navbar.jsx";
import HomePage from "./routes/homePage/homePage.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
  // Routes,
} from "react-router-dom";

import ListPage from "./routes/listPage/listPage.jsx";
import Layout from "./routes/layout/layout.jsx";
import SinglePage from "./routes/singlePage/singlePage.jsx";
import Login from "./routes/login/login.jsx";
import Register from "./routes/registerPage/registerPage.jsx";
import ProfilePage from "./routes/profilePage/profilePage.jsx";
import ErrorPage from "./routes/errorPage/errorPage.jsx";
import RegisterPage from "./routes/registerPage/registerPage.jsx";
import NewPostPage from "./routes/newpostPage/newPostPage.jsx";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        // {
        //   path: "/post",
        //   element: <ProfileUpdatePage />,
        // },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/register",
          element: <RegisterPage />
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: ({ params }) => {
            if (!/^\d+$/.test(params.id)) {
              throw new Response("Not Found", { status: 404 });
            }
            return null;
          },
          errorElement: <ErrorPage />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;