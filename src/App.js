import './App.css'
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ThemeContext } from "styled-components";
import About from "./Componets/About";
import Appoiment from "./Componets/Appoiment";
import BookDoctor from "./Componets/BookDoctor";
import Contact from "./Componets/Contact";
import Department from "./Componets/Department";
import Doctors from "./Componets/Doctors";
import Footer from "./Componets/Footer";
import Form2 from "./Componets/Form2";
import Header from "./Componets/Header";
import ListDoctor from "./Componets/ListDoctor";
import More from "./Componets/More";
import Counter from "./Conatainers/counter/Counter";
import Home from "./Conatainers/Home";
import { ContextTheme, Toogle_theme } from "./context/ContextTheme";
import store, { ConfigStore, persistor } from "./redux/action/store";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import { SnackbarProvider } from 'notistack';
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  // const store = ConfigStore();
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Toogle_theme>
          <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            <Switch>
              {/* <Route exact path={"/"} Component={Homme} /> */}
              <PublicRoute exact path={"/"} component={Home} />
              <PublicRoute exact path={"/Department"} component={Department} />
              <PrivateRoute exact path={"/Doctors"} component={Doctors} />
              <PrivateRoute exact path={"/BookDoctor"} component={BookDoctor} />
              <PrivateRoute exact path={"/ListDoctor"} component={ListDoctor} />
              <PublicRoute exact path={"/About"} component={About} />
              <PublicRoute exact path={"/Contact"} component={Contact} />
              <PublicRoute exact path={"/Appoiment"} component={Appoiment} />
              <Route exact path={"/More"} component={More} />
              <Route exact path={"/Form"} component={Form2} />
              <Route exact path={"/counter"} component={Counter} />
            </Switch>
            <Footer />
            </PersistGate>
          </Provider>

        </Toogle_theme>
      </SnackbarProvider>


    </>
  );
}

export default App;
