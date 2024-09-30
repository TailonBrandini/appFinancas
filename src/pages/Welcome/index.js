import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image, 
    TouchableOpacity
} from "react-native";

import * as Animatable from 'react-native-animatable'

import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logoWelcome.png')}
                    style={{width: '140%' }}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Seu App de Investimento e Finanças!</Text>
                <Text style={styles.text}>Faça o Login para começar</Text>

                <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#009B77'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#009B77',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    containerForm: {
        flex: 1, //Aqui da pra aumentar o container do formulario amarelo, ex 1.2
        backgroundColor: '#FFD700',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },
    text: {
        color: '#a1a1a1'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#009B77',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:
    {
        fontSize: 18,
        color: '#F5F5F5',
        fontWeight: 'bold'
    }

})