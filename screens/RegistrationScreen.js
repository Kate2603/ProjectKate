import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo-app-loading";

const inisialState = {
  login: "",
  email: "",
  password: "",
};

const loadAplication = async () => {
  await Font.loadAsync({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
};

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(inisialState);
  const [isReady, setIsReady] = useState(false);
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(inisialState);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadAplication}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/images/bg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{ ...styles.form, marginBottom: isShowKeyboard ? 0 : 78 }}
            >
              <Text style={styles.formTitle}>Registration</Text>
              <View>
                <TextInput
                  placeholder="LOGIN"
                  style={styles.input}
                  textAlign="left"
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  value={state.login}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                />
              </View>
              <View>
                <TextInput
                  placeholder="EMAIL"
                  style={styles.input}
                  textAlign="left"
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View>
                <TextInput
                  placeholder="PASSWORD"
                  style={styles.input}
                  textAlign="left"
                  secureTextEntry={true}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
                <Text style={styles.inputText}>Show password</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.buttonForm}
                onPress={keyboardHide}
                disabled={
                  state.login !== "" &&
                  state.email !== "" &&
                  state.password !== ""
                    ? false
                    : true
                }
              >
                <Text style={styles.btnText}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "Roboto-Medium",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  form: {
    marginTop: 200,
    aligemItems: "center",
    backgroundColor: "#fff",
    minWidth: 375,
    height: 549,
    borderRadius: 25,
  },
  formTitle: {
    marginTop: 92,
    marginBottom: 33,
    textAlign: "center",
    fontSize: 30,
    color: "#212121",
    fontFamily: "Roboto-Medium",
  },
  input: {
    marginHorizontal: 16,
    height: 50,
    padding: 10,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  inputText: {
    fontFamily: "Roboto-Medium",
  },
  buttonForm: {
    backgroundColor: "#FF6C00",
    border: "none",
    borderRadius: 100,
    width: 343,
    height: 50,
    justifyContent: "center",
    marginTop: 43,
  },
  btnText: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    color: "#FFFFFF",
    textAlign: "center",
  },
});
