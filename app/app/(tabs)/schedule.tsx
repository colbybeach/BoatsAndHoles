import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Card } from '@/components/ui/Card';

export default function ScheduleScreen() {
  const [showAllTeams, setShowAllTeams] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Schedule</ThemedText>
      </ThemedView>

      <Card style={styles.card}>
        <ThemedText type="subtitle">Your Team's Schedule</ThemedText>
        {/* Add team schedule */}
      </Card>

      <TouchableOpacity 
        style={styles.toggleButton} 
        onPress={() => setShowAllTeams(!showAllTeams)}
      >
        <ThemedText>
          {showAllTeams ? 'Show My Team Only' : 'Show All Teams'}
        </ThemedText>
      </TouchableOpacity>

      {showAllTeams && (
        <Card style={styles.card}>
          <ThemedText type="subtitle">League Schedule</ThemedText>
          {/* Add complete league schedule */}
        </Card>
      )}
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
  toggleButton: {
    margin: 8,
    padding: 12,
    alignItems: 'center',
    backgroundColor: 'rgba(100, 100, 255, 0.1)',
    borderRadius: 8,
  },
});
