import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cabecalho: {
    backgroundColor:'#FDB934',
    flex:0.12
  },

  iconesCabecalho: {
    flexDirection:"row",
    justifyContent: "space-between",
    marginTop: 15,
    marginRight: 10,
    marginLeft: 20
  },

  textoCabecalho: {
    color: '#fff',
    fontWeight:'bold',
    flexDirection:"row",
    marginTop: 25,
    marginRight: 35,
    marginLeft: 35
  },

  alinhaTxCabecalho: {
    flexDirection:"row",
    justifyContent: "space-between"
  },

  container: {
    backgroundColor:'white',
    flex:0.9
  },
      
  image: {
    width:80, 
    height: 20,
  },

  itemSV:{
    flexDirection:"row",
    borderTopWidth:5,
    borderBottomWidth:5,
    borderTopColor:'#E5E5E5',
    borderBottomColor:'#E5E5E5',
    
  },

  imageSV: {
    borderRadius:50,
    width:50,
    height:50,
    marginTop: 15,
    marginRight: 15,
    marginLeft: 15,
    marginBottom:15
  },

  imageProduto: {
    width:250, 
    height: 250,
    marginTop: 15,
    marginBottom: 15,
    
  }

})
