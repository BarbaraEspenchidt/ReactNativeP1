import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  cabecalho:{
    backgroundColor:'#FDB934',
     flex:0.2

  },
    container: {
      backgroundColor:'white',
      flex:0.4
      },

      login: {
        color: '#fff',
        fontSize: 22,
        fontWeight: "normal",
        marginLeft: 20,
        marginTop: 15
        
    },

    title: {
        color: '#ADADAD',
        fontSize: 26,
        fontWeight: "normal",
        textAlign:'center'
    },

    image: {
        width: 80, 
        height: 30,
        marginLeft:140,
        marginTop: 15,
        marginBottom: 10
    

    },

    caixa: {
      backgroundColor:'#F8F8F8',
      borderColor: '#E5E5E5',
      borderWidth: 2,
      borderRadius:3,
      width: 330,
      height: 460,
      alignSelf: 'center'
      
    },

    interno: {
      marginLeft:20,
      marginTop:10,
      marginRight:20

    },

    textoDuplo:{
      flexDirection:"row",
      justifyContent: "space-between"
      
    },


    
    textoCx1: {
        color: '#ADADAD',
        fontSize: 15,
        fontWeight: "normal",
        textAlign:'left'
    },

    textoCx1vd: {
      color: '#6EB3A9',
      fontSize: 15,
      fontWeight: "normal",
      marginRight: 30,
      textAlign:'right'
      
  },



    button: {
      backgroundColor:'#FDB934',
      padding: 15,
      borderRadius: 3,
      alignItems: 'center',
      marginTop: 10
  },
  buttonText: {
      color: 'white',
      borderColor:'blue',
      fontSize: 17,
      fontWeight: 'bold'
  },

  buttonF: {
    backgroundColor:'white',
    padding: 15,
    borderColor: '#566D8C',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10
},
buttonTextF: {
    color: '#566D8C',
    fontSize: 15,
    fontWeight: 'normal'
},


  input: {
      backgroundColor: 'white',
      color:'black',
      fontSize: 18,
      padding: Platform.OS === 'ios' ? 15 : 10,
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 3,
      borderColor: '#E5E5E5',
      borderWidth: 3
  }
        
          
        
        




   })

   