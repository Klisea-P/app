function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="EndScreen" component={EndScreen} />
                <Stack.Screen name="StatsScreen" component={StatsScreen} />
                <Stack.Screen name="CameraScreenGreen" component={CameraScreenGreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
