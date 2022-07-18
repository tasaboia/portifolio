import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Contact from '../pages/contact';
import Home from '../pages/home';
import Projects from '../pages/projects';
import Skills from '../pages/skills';

export default function RoutesContainer() {
  return (
    <Routes>
        <Route>
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Skills />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/contato" element={<Contact />} />
        </Route>
    </Routes>
  )
}
