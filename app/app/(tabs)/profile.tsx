import React from 'react';
import { ScrollView, StyleSheet, Image, SafeAreaView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Card } from '@/components/ui/Card';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Profile</ThemedText>
      </ThemedView>

      <Card style={styles.card}>
        <ThemedView style={styles.profileHeader}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.profileImage}
          />
          <ThemedView style={styles.profileInfo}>
            <ThemedText type="subtitle">John Doe</ThemedText>
            <ThemedText>@johndoe</ThemedText>
          </ThemedView>
        </ThemedView>
      </Card>

      <Card style={styles.card}>
        <ThemedText type="subtitle">Personal Information</ThemedText>
        <ThemedView style={styles.infoRow}>
          <ThemedText>Email</ThemedText>
          <ThemedText>john@example.com</ThemedText>
        </ThemedView>
        <ThemedView style={styles.infoRow}>
          <ThemedText>Nickname</ThemedText>
          <ThemedText>Captain</ThemedText>
        </ThemedView>
        {/* Add more profile fields */}
      </Card>

      <Card style={styles.card}>
        <ThemedText type="subtitle">Settings</ThemedText>
        {/* Add settings options */}
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
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(150, 150, 150, 0.2)',
  },
});
