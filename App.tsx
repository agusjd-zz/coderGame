import { SafeAreaView,StyleSheet } from 'react-native';
import React from 'react';
import Card from './src/components/Card';
import Header from './src/components/Header';
import StartGame from './src/screens/StartGame';

export default function App() {
  return (
    <SafeAreaView>
      <Header/>
      <StartGame>
        <Card/>
      </StartGame>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
