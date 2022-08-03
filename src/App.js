import React, { useState } from "react";
import "./App.css";
import { Header, Content, Footer } from "./component";

export default function App() {
  const [section_name, setSection_name] = useState("About_me");
  return (
    <div>
      <Header section_name={section_name} setSection_name={setSection_name} />
      <Content section_name={section_name} />
      <Footer />
    </div>
  );
}
