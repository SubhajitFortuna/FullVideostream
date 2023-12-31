import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import CustomTextInput from "../components/Textinput/CustomTextInput";
import CustomEmailInput from "../components/Textinput/CustomEmailTextInput";
import CustomPasswordInput from "../components/Textinput/CustomPasswordTextInput";
import CustomConfirmPasswordInput from "../components/Textinput/CustomConfirmPasswordTextInput";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const Register = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

   const navigation = useNavigation();

   const HandleRegisterPress = () => {
    // Navigate to the "Account" tab
    navigation.navigate("Login");
  };


  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Sign Up</Text>
        </View>

        {/* Textboxes */}
        <View style={styles.textboxContainer}>
          {/* Email Input */}
          <View style={styles.inputContainer}>
            <CustomTextInput placeholder="Name" icon="account-circle-outline" />
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <CustomEmailInput placeholder="Email" icon="email-outline" />
          </View>

          <View style={styles.inputContainer}>
            <CustomPasswordInput placeholder="Paswword" icon="lock-outline" />
          </View>
          <View style={styles.inputContainer}>
            <CustomConfirmPasswordInput
              placeholder="Confirm Paswword"
              icon="lock-outline"
            />
          </View>
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
            {isChecked && <Icon name="check" size={15} color="#e70d8d" />}
          </TouchableOpacity>
          <Text style={styles.additionalText}>
            By signing up you accept the{" "}
            <Text style={{ color: "#FD0782", textDecorationLine: "underline" }}>
              Terms
            </Text>{" "}
            and{" "}
            <Text style={{ color: "#FD0782", textDecorationLine: "underline" }}>
              Privacy Policy
            </Text>
          </Text>
        </View>

        {/* LOGIN Button */}
        <LinearGradient
          colors={["#F47126", "#e70d8d"]}
          style={styles.loginButton}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={styles.loginButtonText}>REGISTER</Text>
        </LinearGradient>

        {/* Signup Container */}
        <View style={styles.signupContainerCenter}>
          <Text style={styles.signupText}>Already Have an Account?</Text>
          <TouchableOpacity onPress={HandleRegisterPress}>
            <Image
              source={require("../assets/images/Logingradint.png")}
              style={styles.buttonImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
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
  additionalCheckbox: {
  width: 0.045 * width,
  height: 0.045 * width,
  borderRadius: 3,
  borderWidth: 2,
  borderColor: "#fff",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 0.012 * width,
  bottom: -0.03 * height,
},
  checkedAdditionalCheckbox: {
    backgroundColor: "#F7F3F6",
    borderColor: "#F7F3F6",
  },
  container: {
    flex: 1,
    padding: 0.05 * width,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 0.02 * height,
    height: 0.13 * height,
  },
  headerText: {
    fontSize: 0.04 * height,
    fontWeight: "bold",
    color: "#fff",
  },
  textboxContainer: {
   marginBottom: 0.02 * height,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0.005 * height,
  },
  additionalTextContainer: {
    marginBottom: 0.02 * height,
  },
  additionalText: {
    fontSize: 0.024 * height,
    color: "#fff",
    marginLeft: 0.077 * width,
    bottom: 0.025 * height,
  },
  loginButton: {
  borderRadius: 5,
  height: 0.07 * height,
  padding: 0.02 * height,
  alignItems: "center",
  marginBottom: 0.02 * height,
  bottom: -0.011 * height,
  left: 0.005 * width,
},
  loginButtonText: {
    color: "#fff",
    fontSize: 0.026 * height,
    fontWeight: "600",
    bottom: 4,
  },
  signupContainerCenter: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginBottom: -0.14 * height,
},
  signupText: {
    fontSize: 0.022 * height,
    color: "#fff",
    marginRight: 0.13 * width,
    fontWeight: "bold",
  },
  buttonImage: {
    width:55, // 10% of the screen width
  height:21, // 4% of the screen height
  left: 0.28 * width,
  bottom: 0.03 * height,
  },
  imageContainer: {
   flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 1,
  bottom: -0.02 * height, // 
  },
  image: {
    width: "30%",
    height: 0.2 * height,
    resizeMode: "contain",
  },
});

export default Register;