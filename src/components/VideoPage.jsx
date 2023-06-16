import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import movieData from "../data.json";

const VideoPage = (props) => {
  let { _videoID } = useParams();

  return (
    <div className="videoPageContainer">
      <div className="Video">
      <ReactPlayer url={movieData[_videoID].Video} controls light={<img src={movieData[_videoID].Poster}  width={"250px"} alt='Thumbnail' />} width={"100%"} height={"100%"}/>

      </div>
      <div className="content">
        <h1>{movieData[_videoID].Title}</h1>  
        <h5>Released on : {movieData[_videoID].Year}</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod pariatur veniam reprehenderit cum perspiciatis repellendus nihil voluptatibus dolorem eum deleniti a, aut officia maxime corrupti aliquid facilis quibusdam veritatis porro atque, placeat magni ipsa ab sit rem! Error dolore non, quae quam quis, vitae nam accusamus numquam placeat, nobis fugit.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea est sint minus nostrum laboriosam culpa temporibus cupiditate expedita excepturi facere, quidem delectus hic dolorum enim voluptatibus voluptate repellat maxime.</p>
      </div>
    </div>
  );
};

export default VideoPage;
