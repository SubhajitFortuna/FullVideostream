import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Assuming you want to use MaterialCommunityIcons for email
import Locker from "react-native-vector-icons/SimpleLineIcons"; // Assuming you want to use SimpleLineIcons for lock
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";

const { width, height } = Dimensions.get("window");

const Login = () => {
  return (
     <ImageBackground
      source={require("../assets/images/background.png")} // Replace with the path to your image
      style={styles.backgroundImage}
    >
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign in to continue</Text>
        <TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Textboxes */}
      <View style={styles.textboxContainer}>
        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Icon name="email-outline" size={20} color="#007BFF" style={styles.icon} />
          <TextInput
            style={styles.textbox}
            placeholder="Email"
            placeholderTextColor="#999"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Locker name="lock" size={20} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.passwordTextbox}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
          />
        </View>
      </View>

      {/* Line Separators */}
      <View style={styles.lineSeparator} />

      {/* Remember Me and Forgot Password */}
      <View style={styles.rowContainer}>
        <View style={styles.checkboxContainer}>
          {/* You can replace this with an actual checkbox component */}
          <Text style={styles.checkboxText}>Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      {/* Additional Text */}
      <View style={styles.additionalTextContainer}>
        <Text style={styles.additionalText}>
          By signing in, you accept the Terms and Privacy Policy
        </Text>
      </View>

      {/* LOGIN Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      {/* Or Continue with Google */}
      <Text style={styles.orText}>Or Continue with</Text>
      <View style={styles.googleButtonContainer}>
        {/* Your Google Sign-In Button */}
      </View>

        <View style={styles.googleButtonContainer}>
        <GoogleSigninButton
          style={styles.googleButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
        />
      </View>  
      {/* Spacer */}
      <View style={styles.spacer} />

      {/* Don't Have an Account? Sign Up */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't Have an Account?</Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
        
      {/* Small Gap */}
      <View style={styles.smallSpacer} />

      {/* Image */}
      <Image source={require("../assets/docs/Bar.png")} style={styles.image} />
      </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
   backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or "stretch"
  },
  container: {
    flex: 1,
    padding: 0.05 * width,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 0.02 * height,
  },
  headerText: {
    fontSize: 0.04 * height,
    fontWeight: "bold",
  },
  googleButtonContainer: {
    alignItems: "center",
  },
  skipText: {
    color: "#007BFF",
    fontSize: 0.035 * height,
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
    height: 0.07 * height,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 0.02 * height,
    paddingLeft: 0.06 * width,
    paddingRight: 40, // Adjust paddingRight to accommodate the icon
    fontSize: 0.03 * height,
    backgroundColor: "#F2F2F2", // Ash color background
    borderRadius:5, // Increased border radius
  },
  passwordTextbox: {
    height: 0.07 * height,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 0.02 * height,
    paddingLeft: 0.06 * width,
    paddingRight: 40, // Adjust paddingRight to accommodate the icon
    fontSize: 0.03 * height,
    backgroundColor: "#F2F2F2", // Ash color background
    borderRadius:5, // Increased border radius
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxText: {
    marginLeft: 0.01 * width,
    fontSize: 0.03 * height,
  },
  forgotPasswordText: {
    color: "#007BFF",
    fontSize: 0.03 * height,
  },
  additionalTextContainer: {
    marginBottom: 0.02 * height,
  },
  additionalText: {
    fontSize: 0.025 * height,
    color: "#555",
  },
  loginButton: {
    backgroundColor: "#fff",
    padding: 0.02 * height,
    borderRadius: 0.01 * width,
    alignItems: "center",
    borderColor: "#007BFF",
    borderWidth: 1,
    marginBottom: 0.02 * height,
  },
  loginButtonText: {
    color: "#007BFF",
    fontSize: 0.04 * height,
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    fontSize: 0.025 * height,
    color: "#555",
    marginBottom: 0.02 * height,
  },
  googleButtonContainer: {
    alignItems: "center",
  },
  googleButton: {
    marginTop: 0.02 * height,
  },
  spacer: {
    height: 0.02 * height,
  },
  smallSpacer: {
    height: 0.01 * height,
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  signupText: {
    fontSize: 0.020 * height,
    color: "#555",
  },
  signupLink: {
    color: "#007BFF",
    fontSize: 0.020 * height,
    marginLeft: 0.01 * width,
  },
  image: {
    width: "30%",
    height: 0.2 * height,
    resizeMode: "contain",
  },
});

export default Login;