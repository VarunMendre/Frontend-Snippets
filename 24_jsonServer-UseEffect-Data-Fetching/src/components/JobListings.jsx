import React from "react";
import { useState, useEffect } from "react";
import Jobs from "./Jobs";
import Spinner from "./Spinner";

const JobListing = ({ isHome = false }) => {
  // name of state, name of function
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // it takes : 1. a function 2. dependencies array
  useEffect(() => {
    const fetchJobs = async () => {
      const apiURL = isHome
        ? "/api/jobs"
        : "/api/jobs";
      try {
        const result = await fetch(apiURL);
        const data = await result.json();

        setJobs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <Jobs key={job.id} job={job} />
              ))}
            </div>
          )}
        
      </div>
    </section>
  );
};

export default JobListing;
