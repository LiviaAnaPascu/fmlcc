import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/navbar/footer/Footer";
import { Logo } from "./svgs/Logo";
import Section from "./components/Section";
import Events from "./components/Events";
import image from "./assets/images/homeImage1.jpeg";
import image2 from "./assets/images/homeImage2.jpeg";

function App() {
  const [aboutContent, setAboutContent] = useState("");
  const [voicesContent, setVoicesContent] = useState("");

  const sections = ["home", "about", "strava", "events"];

  const events = [
    { day: 2, message: "Event 1" },
    { day: 9, message: "Event 2" },
    { day: 16, message: "Event 3" },
    { day: 23, message: "Event 4" },
    { day: 30, message: "Event 4" },
  ];

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/about.txt`)
      .then((response) => response.text())
      .then((text) => setAboutContent(text))
      .catch((error) => console.error("Error fetching content:", error));
  }, []);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/voicesFromWithin.txt`)
      .then((response) => response.text())
      .then((text) => setVoicesContent(text))
      .catch((error) => console.error("Error fetching content:", error));
  }, []);

  return (
    <div className="App">
      <NavBar logo={<Logo width={139} height={88} />} sections={sections} />
      <main className="px-[50px]">
        <Section
          className="mb-[200px]"
          header="ABOUT"
          content={aboutContent}
          id="about"
          textAlign="right"
          imageSrc={image}
        />
        <Section
          className="mt-[226px]"
          header="VOICES FROM WITHIN"
          content={voicesContent}
          textAlign="left"
          imageSrc={image2}
        />
        <Section
          header=""
          id=""
          content={
            <div className="bg-gray-300 h-[100vh] mt-[226px]"> movie</div>
          }
          imageSrc=""
        ></Section>
        <Section
          className="mt-[226px]"
          header="Events"
          id="events"
          content={<Events events={events} />}
          imageSrc=""
        ></Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
