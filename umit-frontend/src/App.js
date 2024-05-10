import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import NotFoundPage from "./NotFoundPage";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import Service from "./Service";
import Quote from "./Quote";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Feature from "./Feature";
import Layout from "./layout/layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/NotFoundPage" element={<NotFoundPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Quote" element={<Quote />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/Feature" element={<Feature />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
