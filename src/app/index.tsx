import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useUsersDatabase } from "@/database/useUsersDatabase";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import bcrypt from "react-native-bcrypt";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const userDatabase = useUsersDatabase()

  async function handleSignIn() {
    try {
      if (!email.trim() || !password.trim()) {
        return Alert.alert("Entrar", "Preencha e-mail e senha para entrar.")
      }

      const response = await userDatabase.searchByEmail(email)

      if(!response){
        return Alert.alert("Erro!", "Usuário não encontrado")
      } 
      
      const passValid = bcrypt.compareSync(password, response.password)

      if(!passValid) {
        return Alert.alert("Atenção!", "A senha não corresponde.")
      }
      
      router.push("/home")
    } catch (error) {
      throw error
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: "padding", android: "height" })}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Image
            source={require("@/assets/img1.jpeg")}
            style={styles.ilustration}
          />
          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.subtitle}>Acesse sua conta com e-mail e senha.</Text>

          <View style={styles.form}>
            <Input placeholder="E-mail" keyboardType="email-address" onChangeText={setEmail} />
            <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
            <Button label="Entrar" onPress={handleSignIn} />
          </View>

          <Text style={styles.footerText}> Não tem uma conta? {" "}
            <Link href="/signup" style={styles.footerLink}>
              Cadastre-se aqui.
            </Link>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 32
  },
  ilustration: {
    width: "100%",
    height: 330,
    resizeMode: "contain",
    marginTop: 62
  },
  title: {
    fontSize: 32,
    fontWeight: 900,
  },
  subtitle: {
    fontSize: 16
  },
  form: {
    marginTop: 24,
    gap: 12
  },
  footerText: {
    textAlign: "center",
    marginTop: 24,
    color: "#585860"
  },
  footerLink: {
    color: "#032ad7",
    fontWeight: 700
  }
})