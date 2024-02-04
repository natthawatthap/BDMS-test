import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { styles } from './LeaderboardScreen.styles';

interface Player {
  name: string;
  score: number;
}

const LeaderboardScreen: React.FC = () => {
  const navigation = useNavigation();
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    // Fetch player data from AsyncStorage on component mount
    fetchPlayerData();
  }, []);

  const fetchPlayerData = async () => {
    try {
      // Retrieve player data from AsyncStorage
      const storedPlayers = await AsyncStorage.getItem('players');

      if (storedPlayers) {
        // If player data exists in storage, parse and update the state
        const parsedPlayers: Player[] = JSON.parse(storedPlayers);
        setPlayers(parsedPlayers);
      }
    } catch (error) {
      console.error('Error fetching player data from AsyncStorage:', error);
    }
  };

  // Sort players based on scores in descending order
  const sortedPlayers = players.sort((a, b) => b.score - a.score);

  return (
    <View style={styles.container}>
    

      <FlatList
        data={sortedPlayers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.playerItem}>
            <Text>{`${index + 1}. ${item.name}: ${item.score}`}</Text>
          </View>
        )}
      />

      {/* Back button to navigate to the home screen */}
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('React Native Developer Exam')}
      />
    </View>
  );
};

export default LeaderboardScreen;
