import { StatusBar } from "expo-status-bar";

import React from "react";
import { View, StyleSheet } from "react-native";
import CardCarousel from "./src/CardCarousel";

const App = () => {
    return (
        <View style={styles.appContainer}>
            <CardCarousel />
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
});

export default App;

// // App.tsx
// import { StatusBar } from "expo-status-bar";
// import { ThemeProvider } from "styled-components/native";
// import React from "react";
// import { View } from "react-native";
// import ImageCarousel from "./src/ImageCarousel";
// import theme from "./src//styles/theme"; // Import your theme

// const App = () => {
//     const images = [
//         require("./assets/images/card1.png"),
//         require("./assets/images/card2.png"),
//         require("./assets/images/card3.png"),
//     ];
//     console.log("Images: ", images);
//     return (
//         <ThemeProvider theme={theme}>
//             {" "}
//             {/* Provide the theme object */}
//             <View style={{ flex: 1, justifyContent: "center" }}>
//                 <ImageCarousel images={images} />
//                 <StatusBar style="auto" />
//             </View>
//         </ThemeProvider>
//     );
// };

// export default App;
