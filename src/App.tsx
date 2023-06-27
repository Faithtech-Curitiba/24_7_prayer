import React from "react";

// Pages
import Main from "~/pages/Main";
import Reasons from "~/pages/Reasons";
import About from "./pages/About";
import Footer from "./pages/Footer";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Main />
      <Reasons />
      <SignUp />
      <About />
      <Footer />
    </div>
  );
}

export default App;
