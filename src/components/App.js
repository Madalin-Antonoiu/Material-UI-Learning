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
          <Route exact path="/" component={() => <div style={{ height: "2000px" }}>Home</div>} />
          <Route path="/services" component={() => <div style={{ height: "2000px" }}>Services</div>} />
          <Route path="/customsoftware" component={() => <div style={{ height: "2000px" }}>Custom Software</div>} />
          <Route path="/mobileapps" component={() => <div style={{ height: "2000px" }}>Mobile Apps</div>} />
          <Route path="/websites" component={() => <div style={{ height: "2000px" }}>Websites</div>} />
          <Route path="/revolution" component={() => <div style={{ height: "2000px" }}>The Revolution</div>} />
          <Route path="/about" component={() => <div style={{ height: "2000px" }}>About Us</div>} />
          <Route path="/contact" component={() => <div style={{ height: "2000px" }}>Contact Us</div>} />
          <Route path="/estimate" component={() => <div style={{ height: "2000px" }}>Estimate</div>} />
        </Switch>

        <Footer />

      </BrowserRouter>
    </ThemeProvider>


  );
}

export default App;
