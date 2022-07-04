import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import RootStack from "./app/routes/routes.js";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";

enableScreens();
console.disableYellowBox = true;

export default function App() {
  
  useEffect(() => {
  }, []);

    return (
      <PaperProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </PaperProvider>
    );
  }
