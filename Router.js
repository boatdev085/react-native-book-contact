import React from "react";
import { Scene, Router, ActionConst } from "react-native-router-flux";
import RootHomePage from "./pages/HomePage";
import RootCalendar from "./pages/calendar";
import RootContact from "./pages/contact";
import RootOrgChart from "./pages/org-chart";
const AppComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="Home"
          component={RootHomePage}
          title="Home"
          type={ActionConst.RESET}
        />
        <Scene
          key="calendar"
          component={RootCalendar}
          title="Calendar"
          type={ActionConst.RESET}
        />
        <Scene
          key="contact"
          component={RootContact}
          title="Contact"
          type={ActionConst.RESET}
        />
        <Scene
          key="orgChart"
          component={RootOrgChart}
          title="Org chart"
          type={ActionConst.RESET}
        />
      </Scene>
    </Router>
  );
};

export default AppComponent;
