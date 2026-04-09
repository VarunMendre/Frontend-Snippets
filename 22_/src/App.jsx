import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListing from "./components/JobListing";
import ViewJobs from "./components/ViewJobs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<h1>My App</h1>} />
    </>
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

/**<>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListing />
      <ViewJobs />
    </> */


    // new Job list component, used useState() hook to toggle description, setup of React Router