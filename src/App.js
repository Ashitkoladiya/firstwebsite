import { Route, Switch } from "react-router-dom";
import About from "./Componets/About";
import Appoiment from "./Componets/Appoiment";
import Contact from "./Componets/Contact";
import Department from "./Componets/Department";
import Doctors from "./Componets/Doctors";
import Footer from "./Componets/Footer";
import Form2 from "./Componets/Form2";
import Header from "./Componets/Header";
import More from "./Componets/More";
import Home from "./Conatainers/Home";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";



function App() {
  return (
    <>

      <Header />
      <Switch>
        {/* <Route exact path={"/"} Component={Homme} /> */}
        <PublicRoute exact path={"/"} component={Home} />
        <PublicRoute exact path={"/Department"} component={Department} />
        <PrivateRoute exact path={"/Doctors"} component={Doctors} />
        <PublicRoute exact path={"/About"} component={About} />
        <PublicRoute exact path={"/Contact"} component={Contact} />
        <PublicRoute exact path={"/Appoiment"} component={Appoiment} />
        <PublicRoute  restricted = {true} exact path={"/More"} component={More} />
        <Route exact path={"/Form"} component={Form2} />
      </Switch>
      <Footer />
     

    </>
  );
}

export default App;
