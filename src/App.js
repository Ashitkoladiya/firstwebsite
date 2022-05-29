import { Route, Switch } from "react-router-dom";
import About from "./Componets/About";
import Appoiment from "./Componets/Appoiment";
import Contact from "./Componets/Contact";
import Department from "./Componets/Department";
import Doctors from "./Componets/Doctors";
import Footer from "./Componets/Footer";
import Header from "./Componets/Header";
import More from "./Componets/More";
import Home from "./Conatainers/Home";



function App() {
  return (
    <>

      <Header />
      <Switch>
        {/* <Route exact path={"/"} Component={Homme} /> */}
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/Department"} component={Department} />
        <Route exact path={"/Doctors"} component={Doctors} />
        <Route exact path={"/About"} component={About} />
        <Route exact path={"/Contact"} component={Contact} />
        <Route exact path={"/Appoiment"} component={Appoiment} />
        <Route exact path={"/More"} component={More} />
      </Switch>
      <Footer />
     

    </>
  );
}

export default App;
