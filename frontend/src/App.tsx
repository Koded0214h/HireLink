import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPg/LandingPage";
import Login from "./Auth/Login/Login";
import Signup from "./Auth/Signup/Signup";
import AllJobs from "./BrowseJobs/AllJobs";
import EachJob from "./EachJobs/EachJob";


// added jobseeker dashboard and myapplication (under jobseeker features)
import JobSeekerDashboard from "./Dashboard/JobSeeker/JobSeekerDashboard";
import MyApplications from "./Applications/MyApplications";
import EmployerDashboard from "./Dashboard/Employer/EmployerDashboard";
import EmployerLayout from "./Dashboard/Employer/Layout/EmployerLayout";
import EmployerJobsPage from "./Dashboard/Employer/EmployerJobsPage";
import PostNewJob from "./Dashboard/Employer/PostNewJob";
import EditProfile from "./Dashboard/Employer/EditProfile";
import Bookmarks from "./Bookmarks/Bookmarks";

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

    //jobseeker routes
    { path: "/bookmarks", element: < Bookmarks/>,},

    // Employer routes
    {
      path: "/employer",
      element: <EmployerLayout />,
      children: [
        { index: true, element: <EmployerDashboard /> },
        { path: "dashboard", element: <EmployerDashboard /> },
        { path: "manage-jobs", element: <EmployerJobsPage /> },
        { path: "new-job", element: <PostNewJob /> },
        { path: "edit-profile", element: <EditProfile /> },
      ],
    },
  ];

  return (
    <Routes>
      {routes.map((route, idx) => (
        <Route key={idx} {...route}>
          {route.children?.map((child, cIdx) => (
            <Route key={cIdx} {...child} />
          ))}
        </Route>
      ))}
    </Routes>
  );
}

export default App;
