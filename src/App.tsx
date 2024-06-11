import "./styles.css";
import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import { Home } from "./components/Home";
import { Page } from "./components/Page";
import { amsterdamPhotosMetadata, londonPhotosMetadata } from "./data";

export default function App() {
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
        />
      )
    },
    {
      path: "/events",
      element: (
        <Page
          title="events"
          titleWidth={8}
        />
      )
    },
    {
      path: "/strava",
      element: (
        <Page
          title="strava"
          titleWidth={8}
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
