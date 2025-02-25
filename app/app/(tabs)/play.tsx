import React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Card } from '@/components/ui/Card';

export default function PlayScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Play Game</ThemedText>
      </ThemedView>

      <Card>
        <ThemedText type="subtitle">Current Match</ThemedText>
        <ThemedText style={styles.matchInfo}>Hole 7 - Par 4</ThemedText>
        <ThemedText style={styles.matchInfo}>Score: 0</ThemedText>
      </Card>

      <Card>
        <ThemedText type="subtitle">Quick Actions</ThemedText>
        <ThemedView style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <ThemedText>Record Score</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <ThemedText>View Scorecard</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    marginBottom: 8,
  },
  matchInfo: {
    marginTop: 8,
  },
  buttonContainer: {
    marginTop: 12,
    gap: 8,
  },
  button: {
    backgroundColor: 'rgba(100, 100, 255, 0.1)',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
});
