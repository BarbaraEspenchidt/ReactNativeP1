import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'; 
import LogoTalk7 from "../../assets/images/logoTalk7.png";
import MiniKit from "../../assets/images/mini-kit-plantio-safari-kit-cultivo.jpg";

export const Novidades = () => {
    return <>
    <View style={styles.cabecalho}>
        <View style={styles.iconesCabecalho}>
            <MaterialIcons name="menu" size={25} color="white"/>
            <Image source={LogoTalk7} style={styles.image} />
            <MaterialIcons name="add-shopping-cart" size={24} color="white" />
        </View>

        <View style= {styles.alinhaTxCabecalho}>
            <Text style={styles.textoCabecalho}>NOVIDADES (0)</Text>
            <Text style={styles.textoCabecalho}>MENSAGENS (3)</Text>
        </View>
    
    </View>

    <View style={styles.container}>
        <ScrollView>
            <View style ={styles.itemSV}>
                <Image source={{uri:"https://img.elo7.com.br/users/picture/6238C3.jpg?7842368"}} style={styles.imageSV}/>
                <Text style={{marginTop:10}}>
                    <Text style={{fontWeight: "bold"}}>Rosilene Cavalcante Soares </Text><Text> começou a seguir você{'\n'}</Text> 
                    <Text style={{color:'#ADADAD'}}>19/02/22 · 14:27 </Text>
                </Text>              
            </View>

            <View style ={styles.itemSV}>
                <Image source={{uri:"https://img.elo7.com.br/users/picture/31113C.jpg?61663416"}} style={styles.imageSV}/>
                <Text style={{marginTop:10}}>
                    <Text style={{fontWeight: "bold"}}>Marilia Furlan </Text>
                    <Text> começou a seguir você{'\n'}</Text> 
                    <Text style={{color:'#ADADAD'}}>04/02/22 · 19:47 </Text>
                </Text>              
            </View>

            <View style ={styles.itemSV}>
                <Image source={{uri:"https://img.elo7.com.br/users/picture/76DC14.jpg?22300605"}} style={styles.imageSV}/>
                <Text style={{marginTop:10}}>
                    <Text style={{fontWeight: "bold"}}>Jessica Diniz</Text>
                    <Text> adicionou</Text>
                    <Text style={{fontWeight: "bold"}}> Mini Kit Plantio Safari</Text>
                    <Text> à coleção</Text> 
                    <Text style={{fontWeight:"bold"}}> Aniversário lf 3 anos {'\n'}</Text>
                    <Text style={{color:'#ADADAD'}}>30/01/22 · 19:13 {'\n'}</Text>
                    <Image source={MiniKit} style={styles.imageProduto} />

                </Text>              
            </View>

            <View style ={styles.itemSV}>
                <Image source={{uri:"https://img.elo7.com.br/users/picture/50611D.jpg?79807157"}} style={styles.imageSV}/>
                <Text style={{marginTop:10}}>
                    <Text style={{fontWeight: "bold"}}>Jaqueline </Text><Text> começou a seguir você{'\n'}</Text> 
                    <Text style={{color:'#ADADAD'}}>07/01/22 · 08:15 </Text>
                </Text>              
            </View>

            <View style ={styles.itemSV}>
                <Image source={{uri:"https://img.elo7.com.br/users/picture/568C6B.jpg?44148900"}} style={styles.imageSV}/>
                <Text style={{marginTop:10}}>
                    <Text style={{fontWeight: "bold"}}>VALÉRIA </Text><Text> começou a seguir você{'\n'}</Text> 
                    <Text style={{color:'#ADADAD'}}>03/01/22 · 15:53 </Text>
                </Text>              
            </View>

            <View style ={styles.itemSV}>
                <Image source={{uri:"https://images.elo7.com.br/assets/initials/AL.png"}} style={styles.imageSV}/>
                <Text style={{marginTop:10}}>
                    <Text style={{fontWeight: "bold"}}> </Text>Anneíse Luciani <Text> começou a seguir você{'\n'}</Text>  
                    <Text style={{color:'#ADADAD'}}>13/11/21 · 18:00 </Text>
                </Text>              
            </View>
          
        </ScrollView>

    </View>

    </>

}
