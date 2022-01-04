import SingnUp from "./compontents/SingnUp";
import Profile from "./compontents/Profile";
import CreateQuote from "./compontents/CreateQuote";
import Home from "./compontents/Home";
import Login from "./compontents/Login";
import OtherUserProfile from "./compontents/OtherUserProfile";
import ErrorPage from "./compontents/404";


 export const router = [
    {
        path: "/",
      element: <Home />,
    },
    {
        path: "/login",
      element: <Login />,
    },
    {
        path: "/singnup",
      element: <SingnUp />,
    },
    {
        path: "/createquote",
      element: <CreateQuote />,
    },
    {
        path: "/profile",
      element: <Profile />,
    },
    {
      path: "/profile/:userid",
      element: <OtherUserProfile />

    },
    {
      path: "*",
      element: <ErrorPage />

    }
]