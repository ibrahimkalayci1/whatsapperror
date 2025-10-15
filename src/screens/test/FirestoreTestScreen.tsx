import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {
  testFirestoreConnection,
  clearTestData,
  checkFirestoreConnection,
} from '../../utils/firestoreTest';

const FirestoreTestScreen: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>('');

  const handleTestConnection = async () => {
    setLoading(true);
    setResult('');
    
    try {
      const response = await checkFirestoreConnection();
      setResult(response.message);
      
      Alert.alert(
        response.success ? '✅ Başarılı!' : '❌ Hata!',
        response.message
      );
    } catch (error) {
      setResult(`Hata: ${error}`);
      Alert.alert('❌ Hata!', `Test sırasında hata oluştu: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleTestDataSave = async () => {
    setLoading(true);
    setResult('');
    
    try {
      const response = await testFirestoreConnection();
      setResult(response.message);
      
      Alert.alert(
        response.success ? '✅ Başarılı!' : '❌ Hata!',
        `Kaydedilen döküman sayısı: ${response.documentCount}\n\n${response.message}`
      );
    } catch (error) {
      setResult(`Hata: ${error}`);
      Alert.alert('❌ Hata!', `Veri kaydetme sırasında hata oluştu: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleClearData = async () => {
    setLoading(true);
    setResult('');
    
    try {
      const response = await clearTestData();
      setResult(response.message);
      
      Alert.alert(
        response.success ? '✅ Başarılı!' : '❌ Hata!',
        response.message
      );
    } catch (error) {
      setResult(`Hata: ${error}`);
      Alert.alert('❌ Hata!', `Veri temizleme sırasında hata oluştu: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🔥 Firebase Firestore Test</Text>
        <Text style={styles.subtitle}>iOS kurulumunu test edin</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={handleTestConnection}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Test Ediliyor...' : '🔗 Bağlantıyı Test Et'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={handleTestDataSave}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Kaydediliyor...' : '💾 Mockdata Kaydet'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.dangerButton]}
          onPress={handleClearData}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Temizleniyor...' : '🧹 Test Verilerini Temizle'}
          </Text>
        </TouchableOpacity>
      </View>

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>İşlem yapılıyor...</Text>
        </View>
      )}

      {result ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>📋 Sonuç:</Text>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      ) : null}

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>ℹ️ Test Adımları:</Text>
        <Text style={styles.infoText}>
          1. İlk olarak "Bağlantıyı Test Et" butonuna basın{'\n'}
          2. Başarılı olursa "Mockdata Kaydet" ile test verilerini kaydedin{'\n'}
          3. Firebase Console'dan verilerinizi kontrol edin{'\n'}
          4. Test sonrası "Test Verilerini Temizle" ile temizleyin
        </Text>
      </View>

      <View style={styles.statusContainer}>
        <Text style={styles.statusTitle}>✅ Kurulum Kontrol Listesi:</Text>
        <Text style={styles.statusText}>
          ✓ Firebase SDK kurulu{'\n'}
          ✓ GoogleService-Info.plist mevcut{'\n'}
          ✓ AppDelegate.swift'te Firebase.configure() çağrılı{'\n'}
          ✓ Firestore bağımlılığı package.json'da{'\n'}
          ✓ Podfile'da gerekli pod'lar kurulu
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007AFF',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
  },
  buttonContainer: {
    padding: 20,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  secondaryButton: {
    backgroundColor: '#34C759',
  },
  dangerButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  resultContainer: {
    backgroundColor: 'white',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  resultText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  infoContainer: {
    backgroundColor: 'white',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#FF9500',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  statusContainer: {
    backgroundColor: 'white',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#34C759',
    marginBottom: 40,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  statusText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default FirestoreTestScreen;
