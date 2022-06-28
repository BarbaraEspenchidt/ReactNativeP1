import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput} from "react-native";
import { styles } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons'; 

// import LogoElo7 from "../../assets/images/elo7.png";
// na View <Image source={LogoElo7} style={styles.image}/>

export const Login = () => {
    
    return <> 
    <View style={styles.cabecalho}>
    <Text style={styles.login}>
            Login
        </Text>
    </View>
    
    <View style={styles.container}>
                 <Image source={{uri:"https://images.elo7.com.br/assets/v3/desktop/svg/logo-elo7.svg"}} style={styles.image}/>
        <Text style={styles.title}>
            Login Elo7
        </Text>
    </View>

    <View style={styles.caixa}>

        <View style={styles.interno}>
            <Text style={styles.textoCx1}>E-mail</Text>
            <TextInput
                style={styles.input}
                keyboardType="email-address"
            />
                
            <Text style={styles.textoCx1}>Senha                          Esqueceu a senha?</Text>
            <TextInput style={styles.input} keyboardType="default" />


                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Entrar
                </Text>
                </TouchableOpacity>

             <TouchableOpacity style={styles.buttonF}>
                <Text style={styles.buttonTextF}>
                <FontAwesome5 name="facebook" size={20} color="#566D8C" marginRight={100} />
                    Conectar com o Facebook  
                </Text>
             </TouchableOpacity>

             <Text style={[styles.textoCx1, {fontSize: 13, textAlign:'center'}]}>...................................................................................................</Text>

             <Text style={[styles.textoCx1, {fontSize: 15, textAlign:'center', color:'#6EB3A9', marginTop:15}]}>
                Sou um novo usuário
            </Text>
            
            <Text style={[styles.textoCx1, {fontSize: 13, textAlign:'center'}]}>...................................................................................................</Text>
            
            <Text style={[styles.textoCx1, {fontSize: 13, textAlign:'center', color:'#ADADAD', marginTop:10}]}>
            Protegido pelo reCAPTCHA - Privacidade e 
            </Text>

            <Text style={[styles.textoCx1, {fontSize: 13, textAlign:'center', color:'#6EB3A9'}]}>
                Termos de Serviço.
            </Text>
            
        </View>
        
    </View>

    </>
    
}
