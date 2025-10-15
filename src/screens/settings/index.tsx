import React from 'react'
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import defaultStyle from '../../styles/defaultScreenStyle'
import { useNavigation } from '@react-navigation/native'
import { FIRESTORE_TEST } from '../../utils/routes'


const Settings: React.FC = () => {
    const navigation = useNavigation();

    const handleFirestoreTest = () => {
        Alert.alert(
            'Firebase Firestore Test',
            'Firestore bağlantısını test etmek için test ekranına gitmek istiyor musunuz?',
            [
                { text: 'İptal', style: 'cancel' },
                { 
                    text: 'Git', 
                    onPress: () => navigation.navigate(FIRESTORE_TEST as never)
                }
            ]
        );
    };

    return (
        <SafeAreaView style={defaultStyle.SafeArea}>
            <View style={defaultStyle.container}>
                <Text style={styles.title}>Settings</Text>
                
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.testButton}
                        onPress={handleFirestoreTest}
                    >
                        <Text style={styles.testButtonText}>🔥 Firebase Firestore Test</Text>
                        <Text style={styles.testButtonSubtext}>Bağlantıyı test et ve mockdata kaydet</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#333',
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    testButton: {
        backgroundColor: '#007AFF',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    testButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    testButtonSubtext: {
        color: 'white',
        fontSize: 14,
        opacity: 0.9,
    },
});

export default Settings
