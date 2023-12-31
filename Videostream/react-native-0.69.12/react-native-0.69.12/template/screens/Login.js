import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Locker from "react-native-vector-icons/SimpleLineIcons";
import LinearGradient from "react-native-linear-gradient";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import CustomGoogleSigninButton from "../components/CustomGoogleSigninButton";
import { useNavigation } from "@react-navigation/native";
import CustomEmailInput from "../components/Textinput/CustomEmailTextInput";
import CustomPasswordInput from "../components/Textinput/CustomPasswordTextInput";
import { CommonActions } from '@react-navigation/native';


const { width, height } = Dimensions.get("window");

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();

  const HandleSkipPress = () => {
  // Navigate to the "Home" tab
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: 'BottomTabNavigator' }],
    })
  );
};
  const HandleRegisterPress = () => {
    // Navigate to the "Account" tab
    navigation.navigate("Register");
  };


  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  // Initialize GoogleSignin
  GoogleSignin.configure({
    webClientId: "YOUR_WEB_CLIENT_ID", // Replace with your web client ID
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  });

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      // Implement further logic with the user information
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // User cancelled the login flow
        console.log("User cancelled the login flow");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Operation (e.g., sign in) is in progress already
        console.log("Operation (e.g., sign in) is in progress already");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Play services not available or outdated
        console.log("Play services not available or outdated");
      } else {
        // Some other error happened
        console.error(error);
      }
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Sign in to continue</Text>
          <TouchableOpacity
           onPress={HandleSkipPress}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>

        {/* Textboxes */}
        <View style={styles.textboxContainer}>
          {/* Email Input */}
          <View style={styles.inputContainer}>
              <CustomEmailInput placeholder="Email" icon="email-outline" />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <CustomPasswordInput placeholder="Paswword" icon="lock-outline" />
          </View>
        </View>

        {/* Remember Me and Forgot Password */}
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={toggleCheckbox}
            style={styles.checkboxContainer}
          >
            <View style={[styles.checkbox, isChecked && styles.checked]}>
              {isChecked && <Icon name="check" size={20} color="#fff" />}
            </View>
            <Text style={styles.checkboxText}>Remember Me</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Additional Text */}
        <View style={styles.additionalTextContainer}>
          <TouchableOpacity
            onPress={toggleCheckbox}
            style={[
              styles.additionalCheckbox,
              isChecked && styles.checkedAdditionalCheckbox,
            ]}
          >
            {isChecked && <Icon name="check" size={15} color="#fff" />}
          </TouchableOpacity>
          <Text style={styles.additionalText}>
            By signing in, you accept the Terms and Privacy Policy
          </Text>
        </View>

        {/* LOGIN Button */}
        <LinearGradient
          colors={["#F47126", "#e70d8d"]}
          style={styles.loginButton}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </LinearGradient>

        {/* Or Continue with Google */}
        <Text style={styles.orText}>Or Continue with</Text>
        <View>
          {/* Other components in your view */}
          <CustomGoogleSigninButton onPress={handleGoogleSignIn} />
        </View>

        {/* Signup Container */}
        <View style={styles.signupContainerCenter}>
          <Text style={styles.signupText}>Don't Have an Account?</Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}
                onPress={HandleRegisterPress}
            >Sign Up</Text>
          </TouchableOpacity>
        </View>

        {/* Spacer */}
        <View style={styles.smallSpacer} />

        {/* Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/docs/Bar.png")}
            style={styles.image}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    padding: 0.05 * width,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 0.02 * height,
    height: "10%", // Adjusted height
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
    backgroundColor: "#F7F3F6",
  },
  checked: {
    backgroundColor: "#F7F3F6",
  },
  headerText: {
    fontSize: 0.04 * height,
    fontWeight: "bold",
    color: "#fff",
  },
  skipText: {
    color: "#fff",
    fontSize: 0.027 * height,
    bottom: -10,
  },
  textboxContainer: {
    marginBottom: 0.02 * height,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  textbox: {
    flex: 1,
    height: 0.07 * height,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 0.02 * height,
    paddingLeft: 0.02 * width,
    paddingRight: 0.1 * width, // Adjusted paddingRight
    fontSize: 0.03 * height,
    backgroundColor: "#313746",
    borderRadius: 6,
    color: "#fff",
  },
  passwordTextbox: {
    flex: 1,
    height: 0.07 * height,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 0.02 * height,
    paddingLeft: 0.02 * width,
    paddingRight: 0.1 * width, // Adjusted paddingRight
    fontSize: 0.03 * height,
    backgroundColor: "#313746",
    borderRadius: 6,
    color: "#fff",
  },
  lineSeparator: {
    height: 1,
    backgroundColor: "#ccc",
    marginBottom: 0.02 * height,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 0.02 * height,
  },
  checkboxText: {
    marginLeft: 0.01 * width,
    fontSize: 0.02 * height,
    color: "#fff",
  },
  forgotPasswordText: {
    color: "#fff",
    fontSize: 0.02 * height,
    fontWeight: "bold",
  },
  additionalTextContainer: {
    marginBottom: 0.02 * height,
  },
  additionalText: {
    fontSize: 0.025 * height,
    color: "#fff",
  },
  loginButton: {
    borderRadius: 5,
    height: 0.07 * height,
    padding: 0.02 * height,
    alignItems: "center",
    marginBottom: 0.02 * height,
    bottom: -15,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 0.026 * height,
    fontWeight: "600",
    bottom: 4,
  },
  orText: {
    textAlign: "center",
    fontSize: 0.025 * height,
    color: "#fff",
    marginBottom: 0.05 * height,
    bottom: -22,
  },
  googleButtonContainer: {
    alignItems: "center",
  },
  googleButton: {
    marginTop: 0.02 * height,
    height: 0.08 * height, // Adjusted height
    borderRadius: 22,
    padding: 0.02 * height,
    alignItems: "center",
  },
  spacer: {
    height: 0.02 * height,
  },
  signupContainerCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -105,
  },
  signupText: {
    fontSize: 0.022 * height,
    color: "#fff",
    marginRight: 0.13 * width,
    fontWeight: "bold",
  },
  signupLink: {
    color: "#fff",
    fontSize: 0.025 * height,
    marginLeft: 0.5 * width,
    bottom: 23,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  image: {
    width: "30%",
    height: 0.2 * height,
    resizeMode: "contain",
  },
});

export default Login;
