import { Route, Routes, type RouteObject } from "react-router-dom";
import LandingPage from "./LandingPg/LandingPage";
import Login from "./Auth/Login/Login";
import Signup from "./Auth/Signup/Signup";
import AllJobs from "./BrowseJobs/AllJobs";
import EachJob from "./EachJobs/EachJob";
// added jobseeker dashboard and myapplication (under jobseeker features)
import JobSeekerDashboard  from "./Dashboard/JobSeeker/JobSeekerDashboard";
import MyApplications from "./Applications/MyApplications";

function App() {
  const routes = [
    { path: "/", element: <LandingPage /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/jobs", element: <AllJobs /> },
    { path: "/jobs/:id", element: <EachJob /> },

    // added jobseeker dashboard and application route.
    { path: "/dashboard", element: <JobSeekerDashboard /> },
    { path: "/applications", element: <MyApplications /> },
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
