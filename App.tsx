import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, View } from "native-base";
import Main from "./src/Main";

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
