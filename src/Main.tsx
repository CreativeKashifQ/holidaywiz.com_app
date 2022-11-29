import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon, Text, View } from "native-base";
import HomeScreen from "./screens/Guest/HomeScreen";
import { SafeAreaView } from "react-native";
import LoginScreen from "./screens/Guest/Account/LoginScreen";
import RegisterScreen from "./screens/Guest/Account/RegisterScreen";
import DashboardScreen from "./screens/Auth/DashboardScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const user = {
  token: null,
};

// const DrawerNavigation = () => {
//   const navigation = useNavigation();
//   return (
//     <Drawer.Navigator
//       initialRouteName="Map"
//       drawerContent={(props) => <CustomDrawerContent {...props} />}
//     >
//       <Drawer.Screen
//         options={{
//           title: "",
//           headerRight: () => (
//             <Button
//               onPress={() => navigation.navigate("Events" as never)}
//               variant="link"
//               rightIcon={<Icon as={Ionicons} name="arrow-forward" size="sm" />}
//             >
//               Search Events
//             </Button>
//           ),
//         }}
//         name="Map"
//         component={MapScreen}
//       />

//       {/* <Drawer.Screen name="My Profile" component={ProfileScreen} /> */}

//     </Drawer.Navigator>
//   );
// };

export default function Main() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      ></Drawer.Screen>

      <Drawer.Screen
        options={{ headerShown: false }}
        name="Register"
        component={RegisterScreen}
      ></Drawer.Screen>

      <Drawer.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={DashboardScreen}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}
