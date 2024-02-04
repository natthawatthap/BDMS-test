import React, { useState, useEffect } from "react";

import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import Loading from "../components/Loading";
import { questions as initialQuestions } from "../questions";
import { shuffleQuestions } from "../utils/shuffle";
import { MAX_QUESTIONS } from "../config";
import { styles } from "./QuizScreen.styles";

const QuizScreen: React.FC = ({ route }) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const { playerName } = route.params || {};

  useEffect(() => {
    if (isFocused) {
      // Reset currentQuestion when the screen is focused
      setCurrentQuestion(0);
      setQuestions(shuffleQuestions(initialQuestions));
    }
  }, [isFocused]);

  useEffect(() => {
    if (isFocused) {
      // Reset currentQuestion when the screen is focused
      setCurrentQuestion(0);
      const shuffledQuestions = shuffleQuestions(initialQuestions).slice(
        0,
        MAX_QUESTIONS
      );
      setQuestions(shuffledQuestions);
    }
  }, [isFocused]);

  const handleAnswer = (selectedAnswer: string) => {
    if (
      questions &&
      questions[currentQuestion] &&
      selectedAnswer === questions[currentQuestion].correctAnswer
    ) {
      setScore(score + 1);
    }

    if (currentQuestion < MAX_QUESTIONS - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigation.navigate("Score", { score, playerName });
    }
  };

  // Check if shuffledQuestions is not set yet
  if (!questions || questions.length === 0) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionCount}>
        Question {currentQuestion + 1} of {MAX_QUESTIONS}
      </Text>
      <Text style={styles.questionText}>
        {questions[currentQuestion].question}
      </Text>
      {questions[currentQuestion].answers.map((answer, index) => (
        <View key={index} style={styles.buttonContainer}>
          <Button
            title={answer}
            onPress={() => handleAnswer(answer)}
            style={styles.button}
          />
        </View>
      ))}
    </View>
  );
};

export default QuizScreen;
