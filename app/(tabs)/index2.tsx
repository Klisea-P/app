import React, { useState, useRef, useEffect } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Linking
} from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

export default function PoseTrackingApp() {
    const [permission, requestPermission] = useCameraPermissions();
    const [poseAnalysis, setPoseAnalysis] = useState('Press "Check Posture"');
    const [seconds, setSeconds] = useState(0);
    const cameraRef = useRef<CameraView>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Convert time to HH:MM:SS format
    const formatTime = (time) => {
        const hrs = Math.floor(time / 3600).toString().padStart(2, "0");
        const mins = Math.floor((time % 3600) / 60).toString().padStart(2, "0");
        const secs = (time % 60).toString().padStart(2, "0");
        return `${hrs}:${mins}:${secs}`;
    };

    // Simulated Posture Check
    const checkPosture = () => {
        const postureFeedback = [
            { message: '✅ Perfect posture! Keep it up! 🏆', isGood: true },
            { message: '⚠️ Slight misalignment in shoulders.', isGood: false },
            { message: '🚨 Head is tilted forward too much.', isGood: false },
            { message: '🟠 Keep your spine straight for better posture.', isGood: false }
        ];

        const result = postureFeedback[Math.floor(Math.random() * postureFeedback.length)];
        setPoseAnalysis(result.message);
    };

    // Periodic posture check
    useEffect(() => {
        const postureInterval = setInterval(checkPosture, 5000);
        return () => clearInterval(postureInterval);
    }, []);

    if (!permission) return <View />;
    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need camera access for posture tracking</Text>
                <TouchableOpacity onPress={requestPermission}>
                    <Text style={styles.permissionButton}>Grant Permission</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <CameraView ref={cameraRef} style={styles.camera} facing="front" mode="picture">
                <TouchableOpacity style={styles.checkPostureButton} onPress={checkPosture}>
                    <Text style={styles.checkPostureButtonText}>Check Posture</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.endSessionButton}
                    onPress={() => Linking.openURL("http://localhost:8081/EndScreen")}
                >
                    <Text style={styles.endSessionButtonText}>End Session</Text>
                </TouchableOpacity>
            </CameraView>

            {/* Posture Feedback & Timer */}
            <View style={styles.feedbackContainer}>
                <Text style={styles.feedbackText}>{poseAnalysis}</Text>
                <Text style={styles.timer}>{formatTime(seconds)}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    camera: { flex: 1 },
    message: { textAlign: 'center', padding: 20, fontSize: 16 },
    permissionButton: { color: 'blue', fontWeight: 'bold' },

    checkPostureButton: {
        position: 'absolute', bottom: 100, alignSelf: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)', padding: 15, borderRadius: 10
    },
    checkPostureButtonText: { fontWeight: 'bold', color: 'black' },

    endSessionButton: {
        position: 'absolute', bottom: 40, alignSelf: 'center',
        backgroundColor: 'red', padding: 12, borderRadius: 10
    },
    endSessionButtonText: { color: 'white', fontWeight: 'bold' },

    feedbackContainer: {
        position: 'absolute', bottom: 200, left: 0, right: 0,
        alignItems: 'center', padding: 10
    },
    feedbackText: {
        backgroundColor: 'rgba(0,0,0,0.7)', color: 'white', padding: 12,
        borderRadius: 10, textAlign: 'center', maxWidth: '90%', fontSize: 16
    },
    timer: { fontSize: 20, fontWeight: "bold", color: "white", marginTop: 10 }
});

