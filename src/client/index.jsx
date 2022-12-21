import { createRoot } from "react-dom/client";                      // Imports the createRoot method
import React from "react";
import "./main.css";
import {
    createBrowserRouter,
    RouterProvider,
    Link,
} from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Game from "./components/Game/Game";
import Config from "./components/Config/Config";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
      },
      {
          path: '/config',
          element: <Config />,
      },
      {
          path: '/game', //add in /:players to set # of players
          element: <Game />
      }
])



const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);


// ReactDOM.createRoot(document.getElementById("app")).render(
//     <React.StrictMode>
//       <RouterProvider router={router} />
//     </React.StrictMode>
//   );
