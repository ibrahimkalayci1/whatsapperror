import firestore from '@react-native-firebase/firestore';
import { chats } from './mockData';

/**
 * Firebase Firestore test fonksiyonu
 * Mockdata'yı Firestore'a kaydeder ve kurulumun çalışıp çalışmadığını test eder
 */
export const testFirestoreConnection = async () => {
  try {
    console.log('🔥 Firebase Firestore bağlantısı test ediliyor...');
    
    // Test koleksiyonu oluştur
    const testCollection = firestore().collection('test_chats');
    
    // Mockdata'daki her chat'i Firestore'a kaydet
    for (const chat of chats) {
      await testCollection.add({
        ...chat,
        createdAt: firestore.FieldValue.serverTimestamp(),
        updatedAt: firestore.FieldValue.serverTimestamp(),
      });
      
      console.log(`✅ Chat kaydedildi: ${chat.name} ${chat.surname}`);
    }
    
    console.log('🎉 Tüm test verileri başarıyla Firestore\'a kaydedildi!');
    
    // Kaydedilen verileri okuyup doğrula
    const snapshot = await testCollection.get();
    console.log(`📊 Toplam ${snapshot.docs.length} döküman bulundu`);
    
    return {
      success: true,
      message: 'Firebase Firestore kurulumu başarılı!',
      documentCount: snapshot.docs.length
    };
    
  } catch (error) {
    console.error('❌ Firebase Firestore hatası:', error);
    return {
      success: false,
      message: `Hata: ${error}`,
      documentCount: 0
    };
  }
};

/**
 * Test verilerini temizle
 */
export const clearTestData = async () => {
  try {
    console.log('🧹 Test verileri temizleniyor...');
    
    const testCollection = firestore().collection('test_chats');
    const snapshot = await testCollection.get();
    
    const batch = firestore().batch();
    snapshot.docs.forEach(doc => {
      batch.delete(doc.ref);
    });
    
    await batch.commit();
    console.log('✅ Test verileri temizlendi');
    
    return { success: true, message: 'Test verileri başarıyla temizlendi' };
  } catch (error) {
    console.error('❌ Test verileri temizlenirken hata:', error);
    return { success: false, message: `Hata: ${error}` };
  }
};

/**
 * Firestore bağlantısını test et (basit)
 */
export const checkFirestoreConnection = async () => {
  try {
    // Basit bir test dökümanı ekle
    const testDoc = await firestore().collection('connection_test').add({
      test: true,
      timestamp: firestore.FieldValue.serverTimestamp(),
      message: 'iOS Firebase Firestore bağlantısı başarılı!'
    });
    
    // Dökümanı oku
    const doc = await testDoc.get();
    
    if (doc.exists()) {
      console.log('✅ Firebase Firestore bağlantısı başarılı!');
      
      // Test dökümanını sil
      await testDoc.delete();
      
      return {
        success: true,
        message: 'Firebase Firestore bağlantısı çalışıyor!'
      };
    } else {
      throw new Error('Test dökümanı oluşturulamadı');
    }
    
  } catch (error) {
    console.error('❌ Firebase Firestore bağlantı hatası:', error);
    return {
      success: false,
      message: `Bağlantı hatası: ${error}`
    };
  }
};
