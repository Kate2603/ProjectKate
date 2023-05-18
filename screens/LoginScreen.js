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

const inisialState = {
  login: "",
  email: "",
  password: "",
};

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(inisialState);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(inisialState);
  };

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
              <Text style={styles.formTitle}>Sign in</Text>
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
                <Text>SIGN IN</Text>
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
  inputText: {},
  buttonForm: {
    backgroundColor: "#FF6C00",
    border: "none",
    borderRadius: 100,
    marginHorizontal: 16,
    width: 343,
    height: 50,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 30,
    color: "#FFFFFF",
    marginTop: 43,
  },
});
