import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./homescreen";
import CameraScreenGreen from "./CameraScreenGreen";
import EndScreen from "./EndScreen";
import StatsScreen from "./StatsScreen";

const Stack = createNativeStackNavigator(); // ✅ Create Stack Navigator

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="CameraScreenGreen" component={CameraScreenGreen} />
                <Stack.Screen name="EndScreen" component={EndScreen} />
                <Stack.Screen name="StatsScreen" component={StatsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}