import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./constant/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false)

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false)
  }

  let screens = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screens = <GameScreen userNumber={userNumber} onGameOver={GameOverHandler} />;
  }

    if (gameIsOver && userNumber) {
    screens = <GameOverScreen />;
  }

  function GameOverHandler(){
    setGameIsOver(true);
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        style={styles.rootScreen}
        source={require("./assets/background.png")}
        resizeMode={"cover"}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screens}
        </SafeAreaView>
        <StatusBar style="auto" />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
