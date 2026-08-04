import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { calculate } from "../components/calculator/calculate";
import { styles } from "../components/ui/styles";

export default function HomeScreen() {
  const [valorTotal, setValorTotal] = useState("");
  const [inicial, setInicial] = useState("");
  const [cuotas, setCuotas] = useState("24");
  const [resultado, setResultado] = useState<number | null>(null);

  const handleCalcular = () => {
    const total = Number(valorTotal);
    const pagoInicial = Number(inicial);
    const numeroCuotas = Number(cuotas);

    const cuota = calculate(total, pagoInicial, numeroCuotas);

    setResultado(cuota);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}
        <Image
          source={require("../assets/images/icon.png")} // luego lo cambiamos por el logo correcto
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.label}>Valor total</Text>

          <TextInput
            style={styles.input}
            value={valorTotal}
            onChangeText={setValorTotal}
            placeholder="S/ 0.00"
            keyboardType="numeric"
          />

          <Text style={styles.label}>Inicial</Text>

          <TextInput
            style={styles.input}
            value={inicial}
            onChangeText={setInicial}
            placeholder="S/ 0.00"
            keyboardType="numeric"
          />

          <Text style={styles.label}>Cuotas</Text>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={cuotas}
              onValueChange={(itemValue) => setCuotas(itemValue)}
            >
              <Picker.Item label="12 cuotas" value="12" />
              <Picker.Item label="24 cuotas" value="24" />
              <Picker.Item label="36 cuotas" value="36" />
            </Picker>
          </View>

          <Pressable style={styles.button} onPress={handleCalcular}>
            <Text style={styles.buttonText}>CALCULAR</Text>
          </Pressable>
        </View>

        {/* Resultado */}

        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>CUOTA MENSUAL</Text>

          <Text style={styles.result}>
            {resultado !== null ? `S/ ${resultado.toFixed(2)}` : "S/ 0.00"}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
