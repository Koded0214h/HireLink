import { Route, Routes, type RouteObject } from "react-router-dom";
import LandingPage from "./LandingPg/LandingPage";
import Login from "./Auth/Login/Login";
import Signup from "./Auth/Signup/Signup";
import AllJobs from "./BrowseJobs/AllJobs";
import EachJob from "./EachJobs/EachJob";

function App() {
  const routes = [
    { path: "/", element: <LandingPage /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/jobs", element: <AllJobs /> },
    { path: "/jobs/:id", element: <EachJob /> },
  ];

  return (
    <Routes>
      {routes.map(({ path, element }, idx) => (
        <Route key={idx} path={path} element={element} />
      ))}
    </Routes>

  );
}

export default App;
