// src/ImageCarousel.tsx
import React, { useState } from "react";
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    ImageSourcePropType,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type ImageCarouselProps = {
    images: ImageSourcePropType[];
};

const ImageCarousel = ({ images }: ImageCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <TouchableOpacity
                    onPress={goToPrev}
                    style={[styles.arrowButton, styles.leftArrow]}
                    activeOpacity={0.7}
                >
                    <Ionicons name="chevron-back" size={30} color="white" />
                </TouchableOpacity>

                <Image
                    source={images[currentIndex]}
                    style={styles.image}
                    resizeMode="cover"
                />

                <TouchableOpacity
                    onPress={goToNext}
                    style={[styles.arrowButton, styles.rightArrow]}
                    activeOpacity={0.7}
                >
                    <Ionicons name="chevron-forward" size={30} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.indicatorContainer}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.indicator,
                            index === currentIndex && styles.activeIndicator,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        width: 300,
        height: 300,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },
    arrowButton: {
        position: "absolute",
        top: "50%",
        // transform: [{ translateY: -25 }],
        padding: 10,
        backgroundColor: "rgba(0,0,0,0.1)", // ultimo numero 0.2 e transparencia
        borderRadius: 25,
        zIndex: 1,
    },
    leftArrow: {
        left: 0,
    },
    rightArrow: {
        right: 0,
    },
    indicatorContainer: {
        flexDirection: "row",
        marginTop: 20,
    },
    indicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#FFEB3B",
        borderColor: "#FFFFFF",
        borderWidth: 1,
        marginHorizontal: 5,
    },
    activeIndicator: {
        backgroundColor: "#FBC02D", // indicador de img ativa
    },
});

export default ImageCarousel;
