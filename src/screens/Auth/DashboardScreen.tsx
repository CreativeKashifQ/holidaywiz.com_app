import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";
const DashboardScreen = () => {
  const navigation = useNavigation();
  const hotels = ["Bj Hotel", "Night Music", "Dj Music"];
  return (
    <SafeAreaView>
      <ScrollView>
        <Box safeArea p="2">
          <Image
            alt="Company Logo"
            style={{
              height: 100,
            }}
            source={require("../../../assets/company-logo.png")}
          />
          <Heading size="lg" fontWeight="bold" color="blue.500">
            Welcome to Holidaywize.com
          </Heading>
          <Heading size="lg" fontWeight="600" color="coolGray.800">
            Most Picked
          </Heading>
          <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
            You can find your ideal hotels here...
          </Heading>

          <ScrollView horizontal>
            {hotels.map((h, i) => {
              return (
                <View key={i} height="48" width="72" mr="3" mt="5">
                  <Image
                    alt="Company Logo"
                    borderColor="gray.400"
                    h="48"
                    rounded="lg"
                    source={require("../../../assets/hotel.jpg")}
                  />
                </View>
              );
            })}
          </ScrollView>
        </Box>
        <Box safeArea p="2">
          <Heading size="lg" fontWeight="600" color="coolGray.800">
            Houses with beauty backyard
          </Heading>
          <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam at
            autem natus perspiciatis. Tempora architecto harum.
          </Heading>

          <ScrollView horizontal>
            {hotels.map((h, i) => {
              return (
                <View key={i} height="48" width="72" mr="3" mt="5">
                  <Image
                    alt="Company Logo"
                    borderColor="gray.400"
                    h="48"
                    rounded="lg"
                    source={require("../../../assets/hotel.jpg")}
                  />
                </View>
              );
            })}
          </ScrollView>
        </Box>

        <Box safeArea p="2">
          <Heading size="lg" fontWeight="600" color="coolGray.800">
            Hotels with large living room
          </Heading>
          <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam at
            autem natus perspiciatis.
          </Heading>

          <ScrollView horizontal>
            {hotels.map((h, i) => {
              return (
                <View key={i} height="48" width="72" mr="3" mt="5">
                  <Image
                    alt="Company Logo"
                    borderColor="gray.400"
                    h="48"
                    rounded="lg"
                    source={require("../../../assets/hotel.jpg")}
                  />
                </View>
              );
            })}
          </ScrollView>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;
