import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Form from "../components/Form";
import Jobs from "../components/Jobs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Jobs />,
      },
      {
        path: "/editJob/:id",
        element: <Form />,
      },
      {
        path: "/addJob",
        element: <Form />,
      },
    ],
  },
]);
