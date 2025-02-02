import * as React from "react";
import {Image, StyleSheet, Text, View, Pressable, Linking} from "react-native";
import { Gap, Color, FontFamily, FontSize, StyleVariable, Border } from "../../constants/GlobalStyles";

const EndScreen = ({ navigation }: any) => {


    return (
        <View style={styles.endScreen}>

            <Image style={styles.path11Icon} resizeMode="cover" source={require("../../assets/images/path1 1.png")} />
            <Text style={styles.sessionStats}>{`Session Stats`}</Text>
            <View style={styles.frameParent}>
                <View style={[styles.yourSpineWasStraightForParent, styles.forParentFlexBox]}>
                    <Text style={[styles.yourSpineWas, styles.minutesFlexBox]}>Your spine was straight for</Text>
                    <Text style={[styles.minutes, styles.minutesFlexBox]}>32 Minutes!</Text>
                </View>
                <View style={styles.forParentFlexBox}>
                    <Text style={[styles.yourSpineWas, styles.minutesFlexBox]}>You were focused for</Text>
                    <Text style={[styles.minutes, styles.minutesFlexBox]}>57 Minutes!</Text>
                </View>
                <View style={styles.forParentFlexBox}>
                    <Text style={[styles.yourSpineWas, styles.minutesFlexBox]}>Your spine is</Text>
                    <Text style={[styles.minutes, styles.minutesFlexBox]}> Thankful</Text>
                </View>
            </View>
            <Pressable
                style={styles.button}
                onPress={() => Linking.openURL("http://localhost:8081/homescreen")}>
                <Text style={styles.goHome}>Go Home</Text>
            </Pressable>
        </View>);
};

const styles = StyleSheet.create({
    forParentFlexBox: {
        gap: Gap.gap_md,
        alignSelf: "stretch",
        alignItems: "center"
    },
    minutesFlexBox: {
        textAlign: "center",
        alignSelf: "stretch",
        color: Color.colorDarkslateblue
    },
    path11Icon: {
        top: -177,
        left: -86,
        width: 348,
        height: 1079,
        position: "absolute"
    },
    sessionStats: {
        marginLeft: -162.5,
        top: 53,
        left: "50%",
        fontSize: 64,
        lineHeight: 64,
        width: 325,
        height: 123,
        textAlign: "left",
        color: Color.colorDarkslateblue,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        position: "absolute"
    },
    yourSpineWas: {
        fontSize: FontSize.size_5xl,
        lineHeight: 24,
        fontFamily: FontFamily.interRegular
    },
    minutes: {
        fontSize: FontSize.size_13xl,
        lineHeight: 32,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        textAlign: "center"
    },
    yourSpineWasStraightForParent: {
        height: 76
    },
    frameParent: {
        top: 264,
        left: 36,
        width: 304,
        gap: 60,
        position: "absolute"
    },
    goHome: {
        fontSize: 33,
        lineHeight: 33,
        fontWeight: "500",
        fontFamily: FontFamily.interMedium,
        color: "#f4faff",
        textAlign: "left"
    },
    button: {
        top: 667,
        left: 32,
        backgroundColor: Color.colorDarkslateblue,
        width: 311,
        height: 77,
        flexDirection: "row",
        justifyContent: "center",
        padding: StyleVariable.space300,
        alignItems: "center",
        position: "absolute",
        overflow: "hidden",
        borderRadius: Border.br_6xl
    },
    endScreen: {
        backgroundColor: "#efeddf",
        flex: 1,
        width: "100%",
        height: 812,
        overflow: "hidden",
        borderRadius: Border.br_6xl
    }
});

export default EndScreen;
