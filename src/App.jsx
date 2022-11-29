// import { useState } from 'react'
import { Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import Careers from "./pages/Careers/Careers";
import Community from "./pages/Community/Community";
import BranchNetwork from "./pages/BranchNetwork/BranchNetwork";
import CorporateSales from "./pages/CorporateSales/CorporateSales";
import SupplierRelations from "./pages/SupplierRelations/SupplierRelations";
import CorporatePolicies from "./pages/CorporatePolicies/CorporatePolicies";
// import logo from "./assets/logo-300x150pxwhite.png";
import classes from "./App.module.css";
// NAVIGATION BAR, LANDING PAGE & FOOTER
import NavBar from "./components/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./components/Footer";
import FooterStrip from "./components/FooterStrip"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <NavBar />
      </div>
      {/* <h2>S-market</h2> */}
      <Switch>
        <Route path='/' exact>
          <div>
            <section className={classes.container}>
              <LandingPage />
            </section>
          </div>
        </Route>
        <Route path='/our-story' exact>
          <About />
        </Route>
        <Route path='/community' exact>
          <Community />
        </Route>
        <Route path='/corporate-policies' exact>
          <CorporatePolicies />
        </Route>
        <Route path='/corporate-sales' exact>
          <CorporateSales />
        </Route>
        <Route path='/branch-network' exact>
          <BranchNetwork />
        </Route>
        <Route path='/careers' exact>
          <Careers />
        </Route>
        <Route path='/supplier-relations' exact>
          <SupplierRelations />
        </Route>
      </Switch>
      <div>
        <section className={classes.footer}>
          <FooterStrip />
        </section>
        <section className={classes.footer}>
          {/* Add this className={classes.container} to make the section fit to 120rem ( screen width) */}
          <Footer />
        </section>
      </div>
    </div>
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
  );
}

export default App;
