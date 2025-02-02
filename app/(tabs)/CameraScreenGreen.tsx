import * as React from "react";
import {Image, StyleSheet, Text, View, Pressable,Linking } from "react-native";
import { Border, FontFamily, Color, StyleVariable } from "../../constants/GlobalStyles";

const CameraScreenGreen = ({ navigation }: any) => {

    return (
        <View style={[styles.cameraScreenGreen, styles.buttonLayout]}>
            <Image style={styles.posturePicIcon} resizeMode="cover" source={require("../../assets/images/Posture pic.png")} />
            <Pressable
                style={styles.button}
                onPress={() => Linking.openURL("http://localhost:8081/EndScreen")}>
                <Text style={[styles.endSession, styles.textTypo]}>End Session</Text>
            </Pressable>

            <View style={styles.cameraScreenGreenChild} />
            <View style={[styles.clockParent, styles.buttonFlexBox1]}>
                <Image style={styles.clockIcon} resizeMode="cover" source={require("../../assets/images/clock.png")} />
                <View style={styles.buttonFlexBox}>
                    <Text style={[styles.text, styles.textTypo]}>00:57:16</Text>
                </View>
            </View>
        </View>);
};

const styles = StyleSheet.create({
    buttonLayout: {
        overflow: "hidden",
        borderRadius: Border.br_6xl
    },
    buttonFlexBox: {
        justifyContent: "center",
        flexDirection: "row"
    },
    textTypo: {
        fontFamily: FontFamily.interMedium,
        fontWeight: "500"
    },
    buttonFlexBox1: {
        alignItems: "center",
        position: "absolute"
    },
    posturePicIcon: {
        height: "100%",
        marginLeft: -223.5,
        top: "0%",
        bottom: "0%",
        borderRadius: 26,
        maxHeight: "100%",
        width: 499,
        left: "50%",
        position: "absolute"
    },
    endSession: {
        fontSize: 33,
        lineHeight: 33,
        color: "#fff",
        textAlign: "left"
    },
    button: {
        marginLeft: -132.5,
        top: 691,
        backgroundColor: Color.colorDarkslateblue,
        width: 265,
        height: 77,
        padding: StyleVariable.space300,
        alignItems: "center",
        position: "absolute",
        left: "50%",
        overflow: "hidden",
        borderRadius: Border.br_6xl
    },
    cameraScreenGreenChild: {
        top: 608,
        left: 32,
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        width: 312,
        height: 71,
        position: "absolute",
        borderRadius: Border.br_6xl
    },
    clockIcon: {
        width: 38,
        height: 38
    },
    text: {
        fontSize: 40,
        letterSpacing: -0.8,
        lineHeight: 48,
        color: Color.colorDarkslateblue,
        textAlign: "center"
    },
    clockParent: {
        top: 620,
        left: 77,
        gap: 24,
        flexDirection: "row",
        alignItems: "center"
    },
    cameraScreenGreen: {
        backgroundColor: "#67aee4",
        borderStyle: "solid",
        borderColor: "rgba(10, 167, 59, 0.52)",
        borderWidth: 9,
        flex: 1,
        width: "100%",
        height: 812
    }
});

export default CameraScreenGreen;
