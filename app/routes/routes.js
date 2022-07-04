import React  from "react";
import { Scene, Router, Stack } from "react-native-router-flux";
import FirstScreen from '../screen/screen-1'
import SecondScreen from '../screen/screen-2'

const App = () => (
  <Router>
      <Stack key="root">
        <Scene key="first" component={FirstScreen}  title={'First Screen'} />
        <Scene key="second" component={SecondScreen} back title={'Second Screen'}  />
      </Stack>
  </Router>
);

export default App;
