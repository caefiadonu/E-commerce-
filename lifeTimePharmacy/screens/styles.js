import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    page: {
      padding: 10,
      flex:1,
    },
    addressInput: {
      backgroundColor: "#cefdce",
      padding: 5,
      marginVertical: 5,
      height: 30,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: "mint green",

    },
    addressZS:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 5,
    },
    pick:{
      height:37,
      width: 90,
      marginBottom: 5,
      marginTop: 2,
      borderRadius: 5,
    },
    countryPick: {
      fontSize:24,
      height:38,
      borderRadius: 5,
      margin: 10,
    },

    row: {
      margin:10,
    },
    descriptionImage: {
      height:450,
      resizeMode: "cover",
      borderRadius: 10,
      padding: 10,
    },

    image: {
      height:150,
      resizeMode: "contain",
      flex: 2,
    },
    rightContainer:{
      padding: 10,
      flex: 3,
    },
    title: {
      fontSize: 24,
    },
    descriptiontitle: {
      fontSize: 50,
    },
    price: {
      fontSize: 18,
      fontWeight: "bold",

    },
    
    description:{
      padding: 10,
      marginVertical: 10,
      justifyContent: "center",
      alignItems: "center"
      
    },
    titleContainer:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

});

export default styles;