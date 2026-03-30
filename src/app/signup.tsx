import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useUsersDatabase } from "@/database/useUsersDatabase";
import { Link } from "expo-router";
import { useState } from "react";
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import bcrypt from "react-native-bcrypt";

export default function SignUp() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const usersDatabase = useUsersDatabase()

    async function handleSignUp() {
        try {
            if (!name.trim() || !email.trim() || !password.trim() || !confirmPass.trim()) {
                return Alert.alert("Cadastro", "Todos os campos devem ser preenchidos.")
            } else if (confirmPass.trim() != password.trim()) {
                return Alert.alert("Atenção!", "A senha não confere.")
            }
            const pass = password;
            const salt = 10;
            const hashPass = bcrypt.hashSync(pass, salt);

            const response = await usersDatabase.create({ name, email, password: hashPass })
            console.log(hashPass)
            
            Alert.alert("Cadastrar", "Usuário cadastrado com sucesso!")
        } catch (error) {
            console.log(error)
            Alert.alert("Atenção!", "Erro ao cadastar!")
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
                        source={require("@/assets/img2.jpeg")}
                        style={styles.ilustration}
                    />
                    <Text style={styles.title}>Cadastrar</Text>
                    <Text style={styles.subtitle}>Crie sua conta para acessar.</Text>

                    <View style={styles.form}>
                        <Input placeholder="Nome" onChangeText={setName} />
                        <Input placeholder="E-mail" keyboardType="email-address" onChangeText={setEmail} />
                        <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
                        <Input placeholder="Confirmar Senha" secureTextEntry onChangeText={setConfirmPass} />
                        <Button label="Cadastrar" onPress={handleSignUp} />
                    </View>

                    <Text style={styles.footerText}> Já tem uma conta? {" "}
                        <Link href="/" style={styles.footerLink}>
                            Entre aqui aqui.
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