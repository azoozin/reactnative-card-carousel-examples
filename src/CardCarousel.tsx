import React, { useState, FC } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card, { CardProps as SingleCardProps } from "./Card";

export type CarouselCardItem = SingleCardProps;

const defaultCardData: CarouselCardItem[] = [
    {
        id: "card-1",
        title: "Opinião 1",
        description: "Qualquer coisa qualquer coisa.",
        backgroundColor: "#3498db",
    },
    {
        id: "card-2",
        title: "Opinião 2",
        description:
            "teste teste teste teste teste teste teste teste teste teste teste teste teste.",
        backgroundColor: "#2ecc71",
    },
    {
        id: "card-3",
        title: "Opinião 3",
        description:
            "fsd fsdf sdfli usdaçlfjh çsljdhfçlk sjdfkçljsd fljsdkçlf jkçsldjf lksdjf kljsd fçl jsdkçlf howeyhgiqoweuy tgoiweu gioweuflk",
        backgroundColor: "#e74c3c",
    },
    {
        id: "card-4",
        title: "Opinião 4",
        description:
            "esta é uma opiniao d eum cliente, placeholder apenas para ver como fica na interface.",
    },
];

type CardCarouselProps = {};

const CardCarousel: FC<CardCarouselProps> = () => {
    const cardsToDisplay = defaultCardData;
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextCard = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === cardsToDisplay.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPreviousCard = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cardsToDisplay.length - 1 : prevIndex - 1
        );
    };

    if (!cardsToDisplay || cardsToDisplay.length === 0) {
        return null;
    }

    if (currentIndex < 0 || currentIndex >= cardsToDisplay.length) {
        console.warn(
            "CardCarousel: currentIndex out of bounds, resetting to 0."
        );
        setCurrentIndex(0);
        return null;
    }

    const currentCardData = cardsToDisplay[currentIndex];
    const showNavigation = cardsToDisplay.length > 1;
    const arrowIconColor = "#2c3e50";

    return (
        <View style={styles.carouselOuterContainer}>
            <View style={styles.contentDisplayRow}>
                <View style={styles.arrowSlot}>
                    {showNavigation && (
                        <TouchableOpacity
                            onPress={goToPreviousCard}
                            style={styles.sideNavigationButton}
                            activeOpacity={0.7}
                        >
                            <Ionicons
                                name="chevron-back"
                                size={30}
                                color={arrowIconColor}
                            />
                        </TouchableOpacity>
                    )}
                </View>

                <View style={styles.cardDisplaySlot}>
                    {currentCardData && <Card {...currentCardData} />}
                </View>

                <View style={styles.arrowSlot}>
                    {showNavigation && (
                        <TouchableOpacity
                            onPress={goToNextCard}
                            style={styles.sideNavigationButton}
                            activeOpacity={0.7}
                        >
                            <Ionicons
                                name="chevron-forward"
                                size={30}
                                color={arrowIconColor}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            {showNavigation && (
                <View style={styles.indicatorContainer}>
                    {cardsToDisplay.map((card, index) => (
                        <View
                            key={card.id}
                            style={[
                                styles.indicator,
                                index === currentIndex &&
                                    styles.activeIndicator,
                            ]}
                        />
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    carouselOuterContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 16,
        width: "100%",
    },
    contentDisplayRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 8,
    },
    arrowSlot: {
        minWidth: 30 + 2 * 8,
        alignItems: "center",
        justifyContent: "center",
    },
    sideNavigationButton: {
        padding: 8,
    },
    cardDisplaySlot: {
        width: 250,
        height: 450,
        justifyContent: "center",
        alignItems: "center",
    },
    indicatorContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 24,
    },
    indicator: {
        width: 14,
        height: 14,
        borderRadius: 10,
        backgroundColor: "#FFEB3B",
        borderColor: "#FFFFFF",
        borderWidth: 3,
        marginHorizontal: 5,
    },
    activeIndicator: {
        backgroundColor: "#FBC02D",
    },
});

export default CardCarousel;
// // src/CardCarousel.tsx
// import React, { useState, FC } from "react";
// import { View, StyleSheet, TouchableOpacity } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import Card, { CardProps as SingleCardProps } from "./Card";
// import theme from "./styles/theme";

// export type CarouselCardItem = SingleCardProps;

// type CardCarouselProps = {
//     cards: CarouselCardItem[];
// };

// const CardCarousel: FC<CardCarouselProps> = ({ cards }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const goToNext = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === cards.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     const goToPrev = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? cards.length - 1 : prevIndex - 1
//         );
//     };

//     if (!cards || cards.length === 0) {
//         return null;
//     }

//     if (currentIndex < 0 || currentIndex >= cards.length) {
//         console.warn(
//             "CardCarousel: currentIndex out of bounds, resetting to 0."
//         );
//         setCurrentIndex(0);
//         return null;
//     }

//     const currentCardData = cards[currentIndex];
//     const showNavigation = cards.length > 1;
//     const arrowIconColor = theme.colors.text;

//     return (
//         <View style={styles.carouselOuterContainer}>
//             <View style={styles.contentDisplayRow}>
//                 {/* slot left arrow */}
//                 <View style={styles.arrowSlot}>
//                     {showNavigation && (
//                         <TouchableOpacity
//                             onPress={goToPrev}
//                             style={styles.sideNavigationButton}
//                             activeOpacity={0.7}
//                         >
//                             <Ionicons
//                                 name="chevron-back"
//                                 size={30}
//                                 color={arrowIconColor}
//                             />
//                         </TouchableOpacity>
//                     )}
//                 </View>

//                 {/* slot card component */}
//                 <View style={styles.cardDisplaySlot}>
//                     {currentCardData && <Card {...currentCardData} />}
//                 </View>

//                 {/* right arrow slot */}
//                 <View style={styles.arrowSlot}>
//                     {showNavigation && (
//                         <TouchableOpacity
//                             onPress={goToNext}
//                             style={styles.sideNavigationButton}
//                             activeOpacity={0.7}
//                         >
//                             <Ionicons
//                                 name="chevron-forward"
//                                 size={30}
//                                 color={arrowIconColor}
//                             />
//                         </TouchableOpacity>
//                     )}
//                 </View>
//             </View>

//             {/* indicators */}
//             {showNavigation && (
//                 <View style={styles.indicatorContainer}>
//                     {cards.map((card, index) => (
//                         <View
//                             key={card.id}
//                             style={[
//                                 styles.indicator,
//                                 index === currentIndex &&
//                                     styles.activeIndicator,
//                             ]}
//                         />
//                     ))}
//                 </View>
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     carouselOuterContainer: {
//         alignItems: "center",
//         justifyContent: "center",
//         paddingVertical: theme.spacing.medium,
//         width: "100%",
//     },
//     contentDisplayRow: {
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//         width: "100%",
//         paddingHorizontal: theme.spacing.small,
//     },
//     arrowSlot: {
//         minWidth: 30 + 2 * theme.spacing.small,
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     sideNavigationButton: {
//         padding: theme.spacing.small,
//     },
//     cardDisplaySlot: {
//         width: 250,
//         height: 450,
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     indicatorContainer: {
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: theme.spacing.large,
//     },
//     indicator: {
//         width: 14,
//         height: 14,
//         borderRadius: 10,
//         backgroundColor: "#FFEB3B",
//         borderColor: "#FFFFFF",
//         borderWidth: 3,
//         marginHorizontal: 5,
//     },
//     activeIndicator: {
//         backgroundColor: "#FBC02D",
//     },
// });

// export default CardCarousel;
