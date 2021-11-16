import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { HomePage } from "../pages/HomePage";
import { VettedPage } from "../pages/VettedPage";

export const AppRouter = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 overflow-hidden">
          <Navbar />

          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/vetted" component={VettedPage} />

            <Redirect to="/home" />
          </Switch>

          <Footer />
        </div>
      </div>
    </Router>
  )
}
