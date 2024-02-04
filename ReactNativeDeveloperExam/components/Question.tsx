import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface QuestionProps {
  question: string;
  answers: string[];
  onSelectAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, answers, onSelectAnswer }) => {
  return (
    <View>
      <Text>{question}</Text>
      {answers.map((answer, index) => (
        <TouchableOpacity key={index} onPress={() => onSelectAnswer(answer)}>
          <Text>{answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Question;