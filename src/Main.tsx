
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon, View } from "native-base";
import HomeScreen from "./screens/Guest/HomeScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const user = {
    token : null
}

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
 
  if (!user.token) {
    return (
      <View >
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{ title: "", headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </View>
    );
  }

  return (
    <View >
      <Stack.Navigator>
        {/* <Stack.Screen
          options={{ headerShown: false, title: "Home" }}
          name="Home"
          component={DrawerNavigation}
        /> */}

        {/* <Stack.Screen name="Event Details" component={EventDetailsScreen} /> */}
        
        {/* <Stack.Screen
          options={{
            headerBackTitle: "Back",
          }}
          name="Events"
          component={EventsScreen}
        /> */}
      

      </Stack.Navigator>
    </View>
  );
}

