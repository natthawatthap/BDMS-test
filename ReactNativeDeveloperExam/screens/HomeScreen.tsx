import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { styles } from "./HomeScreen.styles";

const HomeScreen: React.FC = ({ navigation }) => {
  const [playerName, setPlayerName] = useState("Player1");

  const handleStartQuiz = () => {
    // You can navigate to the quiz screen and pass the player name as a parameter
    navigation.navigate("Quiz", { playerName });
  };

  const handleLeaderboard = () => {
    // Navigate to the Leaderboard screen
    navigation.navigate("Leaderboard");
  };

  return (
    <View style={styles.container}>
      <Text>Enter Your Name:</Text>
      <TextInput
        style={styles.input}
        value={playerName}
        onChangeText={(text) => setPlayerName(text)}
      />
      <Button title="Start Quiz" onPress={handleStartQuiz} />
      <Button title="Leaderboard" onPress={handleLeaderboard} />
    </View>
  );
};

export default HomeScreen;
