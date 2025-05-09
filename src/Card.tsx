import React from "react";
import { View, Text, StyleSheet } from "react-native";

export type CardProps = {
    id: string | number;
    title: string;
    description: string;
    backgroundColor?: string;
};

const Card = ({ title, description, backgroundColor }: CardProps) => {
    return (
        <View
            style={[
                styles.cardContainer,
                { backgroundColor: backgroundColor || "#3498db" },
            ]}
        >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginBottom: 8,
        textAlign: "center",
    },
    description: {
        fontSize: 16,
        color: "#FFFFFF",
        textAlign: "center",
    },
});

export default Card;
