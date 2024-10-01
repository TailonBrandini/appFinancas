import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';




export default function SignIn() {



  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    if(username === 'admin' && password === 'password'){
      setMessage('Você será logado em breve!');
      setUsername('');
      setPassword('');
      navigation.navigate('Begin'); // não funcionou
    } else if (username === '' || password === '') {
      setMessage('Email ou Senha não preenchido(s)');
      setUsername('');
      setPassword('');
    } else {
      setMessage('Email ou Senha incorreta!');
      setUsername('');
      setPassword('');
    }
  }



    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader} >
                <Text style={styles.message}>Seja bem vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput placeholder="Digite um email..." 
                style={styles.input}
                value={username}
                onChangeText={setUsername} 
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput placeholder="Sua senha..." 
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}  >
                    <Text style={styles.buttonText} >Acessar</Text>
                </TouchableOpacity>

                <View style={styles.messageButton}>
                    {message != "" ? (<Text> {message} </Text>) : (<Text> </Text>)}
                </View>
                
                <TouchableOpacity style={styles.buttonRegister} >
                    <Text style={styles.registerText} >Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009B77"
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#F5F5F5'
    },
    containerForm: {
        backgroundColor: 'white',
        flex: 1,
        borderTopLeftRadius: 25, // Arredondar a borda esquerda superior
        borderTopRightRadius: 25, // Arredondar a borda direita superior
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: '#009B77',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#F5F5F5',
        fontSize: 20, // 18 tbm fica legal
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#a1a1a1'
    },
    messageButton: {
        marginTop: 14,
        alignSelf: 'center'
    }

})