import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Card } from '@/components/ui/Card';

export default function StatsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Statistics</ThemedText>
      </ThemedView>

      <Card style={styles.card}>
        <ThemedText type="subtitle">Season Standings</ThemedText>
        {/* Add a scrollable table or list of standings */}
      </Card>

      <Card style={styles.card}>
        <ThemedText type="subtitle">Best Scores</ThemedText>
        <ThemedView style={styles.scoreRow}>
          <ThemedText>1. John Doe</ThemedText>
          <ThemedText>38</ThemedText>
        </ThemedView>
        <ThemedView style={styles.scoreRow}>
          <ThemedText>2. Jane Smith</ThemedText>
          <ThemedText>39</ThemedText>
        </ThemedView>
        {/* Add more scores */}
      </Card>

      <Card style={styles.card}>
        <ThemedText type="subtitle">Hole Statistics</ThemedText>
        {/* Add hole-specific stats */}
      </Card>
      </ScrollView>
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
  card: {
    margin: 8,
    padding: 16,
  },
  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
});
