import React from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, Pressable, Image, View } from 'react-native';
import { Card } from 'react-native-paper';
import Custominput from '../components/CstmInput';
import CustomBtn from '../components/CstmBtn'
import CustomImage from '../components/CstmPng'

export default function Register({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <CustomImage
            style={styles.imageStyle}
            source={require('../assets/register.png')}
          />
        </View>
      <Text style={styles.txthello}>Hii...... </Text>
      <Text style={styles.txtdefault}>Register to continue</Text>
      <Custominput placeholder="Username" />
      <Custominput placeholder="Email" />
      <Custominput placeholder="Password" secureTextEntry={true} />  
        <CustomBtn
          buttonStyle={styles.btnlogin}
          onPress={() => {navigation.navigate('Home')}}
          title="Register"
          textStyle={{ color: 'white' }}
        />
        
      <Text style={styles.txtbtnreg} onPress={() => 
      {navigation.navigate('Home')}}>
      Skip For NOW
      </Text>
      <Text style={styles.txtbtnreg} onPress={() => 
      {navigation.navigate('Login')}}>
      Easter Egg?
      </Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 8,
  },
  txthello: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    fontWeight: '600',
    marginLeft: 45,
    marginBottom: 5,
  },
  txtdefault: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    fontWeight: '600',
    marginLeft: 45,
    marginBottom: 20,
  },
  btnlogin: {
    width: 200,
    height: 35,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#3366CC',
  },
  imageContainer: {
    alignItems: 'center', // Tempatkan gambar di tengah vertikal
    justifyContent: 'center', // Tempatkan gambar di tengah horizontal
  },

  txtbtnlog: {
    color: 'white',
    fontWeight: '600',
  },

  txtbtnreg: {
    color: '#3366CC',
    fontWeight: 600,
    marginTop: 10,
    textAlign: 'center',
  },
});
