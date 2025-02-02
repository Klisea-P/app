import React, { useState, useEffect } from 'react';
import {
    Image,
    StyleSheet,
    Platform,
    View,
    Text,
    Dimensions
} from 'react-native';
import { Camera } from 'expo-camera';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.front);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    // If permission is not granted, show a message
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <View style={styles.cameraContainer}>
                    {hasPermission && (
                        <Camera
                            style={styles.camera}
                            type={cameraType}
                        >
                            <View style={styles.cameraOverlay}>
                                <ThemedText type="title" style={styles.cameraText}>
                                    Posture Detection
                                </ThemedText>
                            </View>
                        </Camera>
                    )}
                </View>
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Welcome to Posture App!</ThemedText>
                <HelloWave />
            </ThemedView>

            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">How to Use</ThemedText>
                <ThemedText>
                    The camera is now active. We'll add posture detection features soon!
                </ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    cameraContainer: {
        width: '100%',
        height: 300,
        overflow: 'hidden',
    },
    camera: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: 300,
    },
    cameraOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraText: {
        color: 'white',
        fontSize: 24,
    },
});