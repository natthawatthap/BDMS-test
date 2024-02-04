import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './ScoreScreen.styles';

interface ScoreScreenProps {
  route: {
    params?: {
      score?: number;
      playerName?: string;
    };
  };
}

const ScoreScreen: React.FC<ScoreScreenProps> = ({ route }) => {
  const { score = 0, playerName = 'Player' } = route.params || {};
  const navigation = useNavigation();

  useEffect(() => {
    // Save player data to internal storage when the component mounts
    savePlayerData();

    // Update screen options to disable the back button
    navigation.setOptions({
      headerLeft: () => null,
    });
  }, []);

  const savePlayerData = async () => {
    try {
      // Retrieve existing player data from AsyncStorage
      const storedPlayers = await AsyncStorage.getItem('players');
      const existingPlayers: any[] = storedPlayers ? JSON.parse(storedPlayers) : [];

      // Add the current player to the list
      const currentPlayer = { name: playerName, score };
      const updatedPlayers = [...existingPlayers, currentPlayer];

      // Save the updated player list to AsyncStorage
      await AsyncStorage.setItem('players', JSON.stringify(updatedPlayers));
    } catch (error) {
      console.error('Error saving player data to AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Finished!</Text>
      <Text>{`Player: ${playerName}`}</Text>
      <Text>Your Score: {score}</Text>
      <Button
        title="View Leaderboard"
        onPress={() => navigation.navigate('Leaderboard')}
      />
    </View>
  );
};

export default ScoreScreen;
