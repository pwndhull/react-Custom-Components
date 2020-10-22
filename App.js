import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./Navigation/DrawerNavigator.js";

const App = () => {
  return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
  );
};

export default App;
