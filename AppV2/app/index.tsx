import { Image, Pressable, SafeAreaView, ScrollView, Text, View, } from 'react-native';
import { styles } from '../components/ui/styles';

export default function HomeScreen() {
    return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}>

          {/* Logo */}

          <Image
            source={require('../assets/images/icon.png')} // luego lo cambiamos por el logo correcto
            style={styles.logo}
            resizeMode="contain"
          />
  
          {/* Card */}
          <View style={styles.card}>
  
            <Text style={styles.label}>Valor total</Text>
  
            <View style={styles.input}>
              <Text style={styles.placeholder}>S/ 50,000.00</Text>
            </View>
  
            <Text style={styles.label}>Inicial</Text>
  
            <View style={styles.input}>
              <Text style={styles.placeholder}>S/ 10,000.00</Text>
            </View>
  
            <Text style={styles.label}>Cuotas</Text>
  
            <View style={styles.input}>
              <Text style={styles.placeholder}>24 cuotas</Text>
            </View>
  
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>CALCULAR</Text>
            </Pressable>
  
         </View>
  
          {/* Resultado */}
  
          <View style={styles.resultCard}>
  
            <Text style={styles.resultTitle}>
              CUOTA MENSUAL
            </Text>
  
            <Text style={styles.result}>
              S/ 1,845.35
            </Text>
  
         </View>
  
        </ScrollView>
    </SafeAreaView>
    );
}
  
