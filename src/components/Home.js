import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ListWrapper from "./ListWrapper";
import ImageTextSection from "./ImageTextSection";
import GridSection from "./GridSection";
import LocationGrid from "./LocationGrid";
import "./Home.css"; // ไฟล์ CSS สำหรับหน้า Home

const Home = () => {

  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        <ListWrapper />
        <ImageTextSection />
        <GridSection />
        <LocationGrid />
        
        {/* Header Section */}
        <div className="grid-header">
          <h2 className="grid-title">รีวิว</h2>
  
        </div>
        <hr className="grid-divider" />

        {/* YouTube Video Section */}
        <div className="video-section">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SO_d7yD_FtY?si=TJ-_9W7w6GY_F2gR"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/sEZPHs9dVUM?si=bCCRpipO1vOFg1b0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
