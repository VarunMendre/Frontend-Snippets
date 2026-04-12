import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListing from "../components/JobListings";
import ViewJobs from "../components/ViewJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
          <JobListing isHome={ true} />
      <ViewJobs />
    </>
  );
};

export default HomePage;
