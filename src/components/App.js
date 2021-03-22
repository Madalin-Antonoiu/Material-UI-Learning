import React from 'react';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import { ThemeProvider } from "@material-ui/core/styles"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import theme from "./ui/Theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={() => <div style={{ height: "100vh" }}>Home</div>} />
          <Route path="/services" component={() => <div style={{ height: "100vh" }}>Services</div>} />
          <Route path="/customsoftware" component={() => <div style={{ height: "100vh" }}>Custom Software</div>} />
          <Route path="/mobileapps" component={() => <div style={{ height: "100vh" }}>Mobile Apps</div>} />
          <Route path="/websites" component={() => <div style={{ height: "100vh" }}>Websites</div>} />
          <Route path="/revolution" component={() => <div style={{ height: "100vh" }}>The Revolution</div>} />
          <Route path="/about" component={() => <div style={{ height: "100vh" }}>About Us</div>} />
          <Route path="/contact" component={() => <div style={{ height: "100vh" }}>Contact Us</div>} />
          <Route path="/estimate" component={() => <div style={{ height: "100vh" }}>Estimate</div>} />
        </Switch>

        <Footer />

      </BrowserRouter>
    </ThemeProvider>


  );
}

export default App;
