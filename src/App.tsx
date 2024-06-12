import "./styles.css";
import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import { Home } from "./components/Home";
import { Page } from "./components/Page";
import Section from "./components/Section";
import image from "./assets/images/homeImage1.jpeg";
import image2 from "./assets/images/homeImage2.jpeg";
import Gallery from "./components/navbar/Gallery";
import Events from "./components/Events";

export default function App() {

  const [aboutContent, setAboutContent] = React.useState("");

  const events = [
    { day: 6, name: "feierabendrunde", timelocation: "6pm @ veletage", distance: "50-60km" , average: "Ø 25/28 kmh"},
    { day: 13, name: "", timelocation: "", distance: "" , average: ""},
    { day: 20, name: "", timelocation: "", distance: "" , average: "" },
    { day: 27, name: "", timelocation: "", distance: "" , average: ""},
  ];

  React.useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/about.txt`)
      .then((response) => response.text())
      .then((text) => setAboutContent(text))
      .catch((error) => console.error("Error fetching content:", error));
  }, []);

  const element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/about",
      element: (
        <Page
          title="about"
          titleWidth={8}
          content={
            <>
            <Gallery/>
            <Section
              className="mb-[200px] mt-[-100px]"
              header=""
              content={aboutContent}
              id="about"
              textAlign="right"
            />
            </>}
        />
      )
    },
    {
      path: "/events",
      element: (
        <Page
          title="events"
          titleWidth={8}
          content={
            <Events events={events}/>
          }
        />
      )
    }
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}
