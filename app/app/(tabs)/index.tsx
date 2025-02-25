import React from "react";
import {
    ScrollView,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Card } from "@/components/ui/Card";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { router } from "expo-router";

export default function HomeScreen() {
    const navigateToSchedule = () => router.push("/(tabs)/schedule");
    const navigateToStats = () => router.push("/(tabs)/stats");

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ThemedView style={styles.header}>
                    <ThemedText type="title">Welcome Back, John!</ThemedText>
                </ThemedView>

                <Card>
                    <ThemedView style={styles.cardHeader}>
                        <ThemedText type="subtitle">Latest Round</ThemedText>
                        <TouchableOpacity>
                            <IconSymbol
                                size={20}
                                name="arrow.right"
                                color="#666"
                            />
                        </TouchableOpacity>
                    </ThemedView>
                    <ThemedView style={styles.scoreCard}>
                        <ThemedView>
                            <ThemedText type="defaultSemiBold">
                                Score: 42
                            </ThemedText>
                            <ThemedText>Feb 24, 2025</ThemedText>
                        </ThemedView>
                        <ThemedView style={styles.stats}>
                            <ThemedText>Putts: 28</ThemedText>
                            <ThemedText>Fairways: 9/14</ThemedText>
                        </ThemedView>
                    </ThemedView>
                </Card>

                <Card>
                    <ThemedView style={styles.cardHeader}>
                        <ThemedText type="subtitle">Team Standings</ThemedText>
                        <TouchableOpacity onPress={navigateToStats}>
                            <IconSymbol
                                size={20}
                                name="arrow.right"
                                color="#666"
                            />
                        </TouchableOpacity>
                    </ThemedView>
                    <ThemedView style={styles.standingsContainer}>
                        <ThemedView style={styles.standingRow}>
                            <ThemedText>4. Team Above</ThemedText>
                            <ThemedText>24 pts</ThemedText>
                        </ThemedView>
                        <ThemedView
                            style={[styles.standingRow, styles.highlighted]}
                        >
                            <ThemedText type="defaultSemiBold">
                                5. Your Team
                            </ThemedText>
                            <ThemedText type="defaultSemiBold">
                                21 pts
                            </ThemedText>
                        </ThemedView>
                        <ThemedView style={styles.standingRow}>
                            <ThemedText>6. Team Below</ThemedText>
                            <ThemedText>19 pts</ThemedText>
                        </ThemedView>
                    </ThemedView>
                </Card>

                <Card>
                    <ThemedView style={styles.cardHeader}>
                        <ThemedText type="subtitle">Next Match</ThemedText>
                        <TouchableOpacity onPress={navigateToSchedule}>
                            <IconSymbol
                                size={20}
                                name="arrow.right"
                                color="#666"
                            />
                        </TouchableOpacity>
                    </ThemedView>
                    <ThemedView style={styles.matchInfo}>
                        <ThemedText type="defaultSemiBold">
                            vs Team Challenger
                        </ThemedText>
                        <ThemedText>March 1, 2025 - 2:00 PM</ThemedText>
                        <ThemedText>Venue: Hole 7</ThemedText>
                    </ThemedView>
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
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },
    scoreCard: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    stats: {
        alignItems: "flex-end",
    },
    standingsContainer: {
        gap: 8,
    },
    standingRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 4,
    },
    highlighted: {
        backgroundColor: "rgba(100, 100, 255, 0.1)",
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    matchInfo: {
        gap: 4,
    },
});
