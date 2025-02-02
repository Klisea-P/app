import * as React from "react";
import {Image, StyleSheet, Text, View, Pressable} from "react-native";
import { FontFamily, Color, StyleVariable, Border } from "../../constants/GlobalStyles";

const HomeScreen = () => {

    return (
        <View style={[styles.homeScreen, styles.homeScreenLayout]}>
            <Image style={styles.path11Icon} resizeMode="cover" source={require("../../assets/images/path1 1.png")} />
            <View style={styles.fixYourSpineOneSessionAtParent}>
                <Text style={styles.fixYourSpine}>{`Fix your spine
          					One session at a time`}</Text>
                <Image style={[styles.spinefixLogo1Icon, styles.homeScreenLayout]} resizeMode="cover" source={require("../../assets/images/SpineFix_Logo 1.png")} />
                <Pressable style={styles.button} onPress={()=>{}}>
                    <Text style={[styles.startSession, styles.startSessionTypo]}>Start Session</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={()=>{}}>
                    <Text style={[styles.startSession, styles.startSessionTypo]}>Start Test Session</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={()=>{}}>
                    <Text style={[styles.statsHistory, styles.startSessionTypo]}>Stats History</Text>
                </Pressable>
            </View>
        </View>);
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

export default HomeScreen;
