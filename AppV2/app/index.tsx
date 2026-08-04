import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { calculate } from "../components/calculator/calculate";
import { styles } from "../components/ui/styles";

const CUOTAS_OPTIONS = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60] as const;

export default function HomeScreen() {
  const [valorTotal, setValorTotal] = useState("");
  const [inicial, setInicial] = useState("");
  const [cuotas, setCuotas] = useState(24);
  const [resultado, setResultado] = useState<number | null>(null);

  const handleCalcular = () => {
    const total = Number(valorTotal);
    const pagoInicial = Number(inicial);
    const cuota = calculate(total, pagoInicial, cuotas);

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

          <View style={styles.cuotasSelector}>
            {CUOTAS_OPTIONS.map((option) => {
              const isSelected = cuotas === option;

              return (
                <Pressable
                  key={option}
                  accessibilityRole="radio"
                  accessibilityState={{ checked: isSelected }}
                  onPress={() => setCuotas(option)}
                  style={[
                    styles.cuotaOption,
                    isSelected && styles.cuotaOptionSelected,
                  ]}
                >
                  <Text
                    style={[
                      styles.cuotaOptionText,
                      isSelected && styles.cuotaOptionTextSelected,
                    ]}
                  >
                    {option}
                  </Text>
                </Pressable>
              );
            })}
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
