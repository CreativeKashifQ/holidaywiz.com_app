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
  Text,
  View,
  VStack,
} from "native-base";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <Center backgroundColor="white" w="full" h="full">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Image
          alt="Company Logo"
          style={{
            height: 100,
          }}
          source={require("../../../../assets/company-logo.png")}
        />
        <Heading size="lg" fontWeight="600" color="coolGray.800">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="john@email.com"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" placeholder="password" />
          </FormControl>
          <Button
            onPress={() => navigation.navigate("Dashboard" as never)}
            mt="2"
            py="3"
            bgColor="#000080"
          >
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600">
              I'm a new user.
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate("Register" as never)}
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default LoginScreen;
