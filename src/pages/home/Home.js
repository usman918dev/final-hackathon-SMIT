import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../redux/slices/eventSlice";
import EventCard from "../../components/event/EventCard";
import Navbar from "../../components/navbar/Navbar";
import UserProfile from "../../components/userprofile/UserProfile";
import { getUserName } from "../../services/events";
import Welcome from "../../components/welcome/Welcome";
import Carousel from "../../components/carousel/Carousel";

const Home = () => {


  return (
    <div className="home-container">
      <Navbar />
      <div className="for">
        <Welcome />
        {/* <Carousel /> */}
      </div>

    </div>

  );
};

export default Home;
