import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Componet
import Month from "./Pages/months/Month";
import Home from "./Pages/Home";

//Context
import { GlobalProvider } from "./Context/GlobalState";

import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <div>
      <GlobalProvider>
        <BrowserRouter>
          <Switch>
            <MainLayout>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/:id" render={() => <Month />} />
            </MainLayout>
          </Switch>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
