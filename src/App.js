import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./features/Home/Home";
import MainPage from "./features/MainPage/MainPage";
import Detail from "./features/movie/components/Detail";

function App() {
  document.title = "Disney+";
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>

        <Route path="/home">
          <Home />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
