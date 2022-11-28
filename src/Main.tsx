import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon, Text, View } from "native-base";
import HomeScreen from "./screens/Guest/HomeScreen";
import { SafeAreaView } from "react-native";

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
    <View
      style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}
    >
      <HomeScreen />
    </View>
  );
}
