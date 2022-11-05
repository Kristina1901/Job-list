import React from "react";
import "./App.css";
import { getJobsList } from "../serveces/jobs-api";
import { Routes, Route, Navigate } from "react-router-dom";
import { JobsList } from "./JobsList";
import {DetailedJob} from "./DetailedJob";
import { useEffect } from "react";
interface Job {
  id: string;
  title: string;
  name: string;
  location: Coordinates;
  address: string;
  pictures: Array<string>;
  createdAt: string;
  salary: string;
  benefits: Array<string>;
  employment_type: Array<string>;
  phone: string;
  email: string;
}
interface Coordinates {
  lat: number;
  long: number;
}
interface CurrentPage {
  selected: number;
}
const App: React.FC = () => {
  const [listJobs, setListJobs] = React.useState<Array<Job>>([]);
  const [page, setPage] = React.useState<number>(1);
  const [jobOneValue, setjobOneValue] = React.useState<Job>();
  useEffect(() => {
    getJobsList(page).then((data) => {
      setListJobs(data);
    });
  }, [page]);
  const handlePageClick = (data: CurrentPage) => {
    let num = data.selected + 1;
    setPage(num);
  };
  function getJob(key: string) {
    let newArray = listJobs.find((item) => item.id === key);
    setjobOneValue(newArray);
  }
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <JobsList
              listJobs={listJobs}
              handlePageClick={handlePageClick}
              getJob={getJob}
            />
          }
        />

        <Route
          path="/detailedJob/:id"
          element={<DetailedJob jobOneValue={jobOneValue} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
