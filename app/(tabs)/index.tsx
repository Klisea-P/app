import React, { useState, useRef, useEffect } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import Sound from 'react-native-sound';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

export default function PoseTrackingApp() {
    const [facing] = useState<CameraType>('front');
    const [permission, requestPermission] = useCameraPermissions();
    const [poseAnalysis, setPoseAnalysis] = useState<string>('');
    const cameraRef = useRef<CameraView>(null);

    // Comprehensive posture assessment
    const assessPosture = () => {
        // Simulate body positioning checks with more detailed analysis
        const postureChecks = [
            {
                type: 'Head Alignment',
                isGood: Math.random() > 0.3,
                goodMessage: 'Head is well-aligned with spine',
                badMessage: 'Head is tilted or misaligned'
            },
            {
                type: 'Shoulder Symmetry',
                isGood: Math.random() > 0.3,
                goodMessage: 'Shoulders are symmetrical and relaxed',
                badMessage: 'Shoulders are uneven or tensed'
            },
            {
                type: 'Spine Curvature',
                isGood: Math.random() > 0.3,
                goodMessage: 'Spine maintains a natural, neutral curve',
                badMessage: 'Spine appears overly curved or strained'
            },
            {
                type: 'Neck Position',
                isGood: Math.random() > 0.3,
                goodMessage: 'Neck is in a neutral, relaxed position',
                badMessage: 'Neck is strained or pushed forward'
            }
        ];

        // Collect failed checks
        const failedChecks = postureChecks.filter(check => !check.isGood);
        const passedChecks = postureChecks.filter(check => check.isGood);

        // Generate detailed analysis
        if (failedChecks.length === 0) {
            setPoseAnalysis('Perfect Posture! 🏆\n' +
                passedChecks.map(check => check.goodMessage).join('\n'));
        } else if (failedChecks.length <= 2) {
            setPoseAnalysis('Moderate Posture Issues 🟠\n' +
                failedChecks.map(check => check.badMessage).join('\n'));
        } else {
            setPoseAnalysis('Poor Posture Detected! 🚨\n' +
                failedChecks.map(check => check.badMessage).join('\n'));
        }
    };

    // Periodic posture check
    useEffect(() => {
        const postureInterval = setInterval(assessPosture, 3000);
        return () => clearInterval(postureInterval);
    }, []);

    // No permission handling
    if (!permission) {
        return <View />;
    }

    // Permission not granted
    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <TouchableOpacity onPress={requestPermission}>
                    <Text>Grant Permission</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <CameraView
                ref={cameraRef}
                style={styles.camera}
                facing={facing}
                mode="picture"
            >
                <TouchableOpacity
                    style={styles.checkPostureButton}
                    onPress={assessPosture}
                >
                    <Text style={styles.checkPostureButtonText}>Check Posture</Text>
                </TouchableOpacity>
            </CameraView>

            {/* Posture Analysis Overlay */}
            <View style={styles.postureAnalysisContainer}>
                <Text style={styles.postureAnalysisText}>{poseAnalysis}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    message: {
        textAlign: 'center',
        padding: 20,
    },
    checkPostureButton: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        backgroundColor: 'rgba(255,255,255,0.7)',
        padding: 15,
        borderRadius: 10,
    },
    checkPostureButton: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        backgroundColor: 'rgba(255,255,255,0.7)',
        padding: 15,
        borderRadius: 10,
    },
    checkPostureButtonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    postureAnalysisContainer: {
        position: 'absolute',
        bottom: 70,
        left: 0,
        right: 0,
        alignItems: 'center',
        padding: 10,
    },
    postureAnalysisText: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: 'white',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        maxWidth: '90%',
    },
});
