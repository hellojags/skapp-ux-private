import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import Apps from './components/AppsComp/Apps'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import SubmitApp from './components/SubmitApp/SubmitApp'
import './index.css'
import { skappTheme } from './theme/Theme'
import Error from './components/ErrorPage/Error'
import NoApps from './components/NoApps/NoApps'
import InstalledApps from './components/AppsComp/InstalledApps'
import Hosting from './components/Hosting/Hosting'
import SubmitNewSite from './components/Hosting/SubmitNewSite'
import NoDomain from './components/Domain/NoDomain'
import Domains from './components/Domain/Domains'
import StorageGateway from './components/Hosting/StorageGateway'
import Settings from './components/Setting/Settings'
// React Router Dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import AppDetailsPage from './components/AppDetails/AppDetailsPage'
import DeploySite from './components/Hosting/DeploySite'
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={skappTheme}>
          <div className="App">
            <Navbar />
            <section className="main-content">
              <aside className="app-sidebar">
                <Sidebar />
              </aside>

              <main className="app-content">
                <Switch>
                  <Route exact path="/appdetail">
                    <AppDetailsPage />
                  </Route>
                  <Route exact path="/submitapp">
                    <SubmitApp />
                  </Route>
                  <Route exact path="/error">
                    <Error />
                  </Route>
                  <Route exact path="/noapp">
                    <NoApps />
                  </Route>
                  <Route exact path="/installedappps">
                    <InstalledApps />
                  </Route>
                  <Route exact path="/hosting">
                    <Hosting />
                  </Route>
                  <Route exact path="/submitsite">
                    <SubmitNewSite />
                  </Route>
                  <Route exact path="/domains">
                    <Domains />
                  </Route>
                  {/* <Route exact path='/addnewdomain'>
                  <AddNewDomain />
                </Route>
                <Route exact path='/adddomaintxt'>
                  <AddNewDomainTXT />
                </Route> */}
                  <Route exact path="/nodomain">
                    <NoDomain />
                  </Route>
                  <Route exact path="/storagegateway">
                    <StorageGateway />
                  </Route>
                  <Route exact path="/settings">
                    <Settings />
                  </Route>
                  <Route exact path="/deploysite">
                    <DeploySite />
                  </Route>
                  <Route exact path="/apps">
                    <Apps />
                  </Route>
                </Switch>
              </main>
            </section>
          </div>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App
