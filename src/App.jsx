import React from "react";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import movieData from "./data.json";
import { useState } from "react";
import VideoPage from "./components/VideoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              {movieData.map((ele, index) => {
                return (
                  <Movie
                    imageURL={ele.Poster}
                    name={ele.Title}
                    year={ele.Year}
                    _videoID={index}
                    key={index}
                  />
                );
              })}
            </div>
          }
        ></Route>
        <Route path="/movie/:_videoID" element={<VideoPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
