import * as React from "react";
import {Image, StyleSheet, Text, View, Pressable} from "react-native";


/* fonts */
export const FontFamily = {
    interMedium: "Inter-Medium",
    interBold: "Inter-Bold",
    interRegular: "Inter-Regular",
    interExtraLight: "Inter-ExtraLight"
};
/* font sizes */
export const FontSize = {
    size_13xl: 32,
    size_5xl: 24,
};
/* Colors */
export const Color = {
    colorDarkslateblue: "#003f70",
};
/* Style Variables */
export const StyleVariable = {
    space200: 8,
    space300: 12,
};
/* Gaps */
export const Gap = {
    gap_md: 20,
};
/* border radiuses */
export const Border = {
    br_6xl: 25,
};


const styles = StyleSheet.create({
    homeScreenLayout: {
        width: "100%",
        overflow: "hidden"
    },
    startSessionTypo: {
        textAlign: "left",
        fontFamily: FontFamily.interMedium,
        fontWeight: "500"
    },
    path11Icon: {
        top: -177,
        left: -86,
        width: 348,
        height: 1079,
        position: "absolute"
    },
    fixYourSpine: {
        fontSize: 24,
        fontWeight: "200",
        fontFamily: FontFamily.interExtraLight,
        color: "#000",
        textAlign: "center",
        height: 58,
        lineHeight: 32,
        alignSelf: "stretch"
    },
    spinefixLogo1Icon: {
        maxWidth: "100%",
        height: 279,
        alignSelf: "stretch",
        overflow: "hidden"
    },
    startSession: {
        fontSize: 32,
        color: "#fff",
        lineHeight: 32
    },
    button: {
        backgroundColor: Color.colorDarkslateblue,
        height: 77,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: StyleVariable.space300,
        alignSelf: "stretch",
        overflow: "hidden",
        borderRadius: Border.br_6xl
    },
    statsHistory: {
        fontSize: 33,
        lineHeight: 33,
        color: "#f4faff"
    },
    fixYourSpineOneSessionAtParent: {
        marginLeft: -155.5,
        top: 129,
        left: "50%",
        width: 311,
        gap: 21,
        position: "absolute"
    },
    homeScreen: {
        backgroundColor: "#efeddf",
        flex: 1,
        height: 812,
        overflow: "hidden",
        borderRadius: Border.br_6xl
    }
});

// export default HomeScreen;
