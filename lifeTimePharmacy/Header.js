import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class Header extends React.Component{
render() {
  return (
    <View style={styles.header}>
     <Image
     source= {require('../img/cart.png')}
     style={styles.cart}
     />
     <Text style={styles.logo}e-commerce>
     </Text>
      </View>
  );
   }
}

const styles = StyleSheet.create({
  header: {
      height: 80,
      marginTop: 20,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 5,
      borderBottomcolor: '#00ff00',
  },
  cart: {
      width: 40,
      height: 40,
  },
  logo: {
      fontSize: 20,
      marginLeft: 10,
      fontStyle: 'intro script medium',
      color: '#151515'
      

  }
  });
