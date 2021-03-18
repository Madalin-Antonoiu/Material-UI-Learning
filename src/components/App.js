import React from 'react';
import Header from '../components/ui/Header';
import { ThemeProvider } from "@material-ui/core/styles"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import theme from "./ui/Theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route path="/services" component={() => <div>Services</div>} />
          <Route path="/customsoftware" component={() => <div>Custom Software</div>} />
          <Route path="/mobileapps" component={() => <div>Mobile Apps</div>} />
          <Route path="/websites" component={() => <div>Websites</div>} />
          <Route path="/revolution" component={() => <div>The Revolution</div>} />
          <Route path="/about" component={() => <div>About Us</div>} />
          <Route path="/contact" component={() => <div>Contact Us</div>} />
          <Route path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>

      </BrowserRouter>
    </ThemeProvider>


  );
}

export default App;
