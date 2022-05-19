import { Route, Switch } from "react-router-dom";
import About from "./Componets/About";
import Appoiment from "./Componets/Appoiment";
import Contact from "./Componets/Contact";
import Department from "./Componets/Department";
import Doctors from "./Componets/Doctors";
import Footear from "./Componets/Footear";
import Heaader from "./Componets/Heaader";
import Homme from "./Conatainers/Homme";



function App() {
  return (
  <>
  
  <Heaader />
  <Switch>
    {/* <Route exact path={"/"} Component={Homme} /> */}
    <Route exact path={"/"} component={Homme}/>
    <Route exact path={"/Department"} component={Department}/>
    <Route exact path={"/Doctors"} component={Doctors}/>
    <Route exact path={"/About"} component={About}/>
    <Route exact path={"/Contact"} component={Contact}/>
    <Route exact path={"/Appoiment"} component={Appoiment}/>
  </Switch>
  <Footear />
  
  </>
  );
}

export default App;
