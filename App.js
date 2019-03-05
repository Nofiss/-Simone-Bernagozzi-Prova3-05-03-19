/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, ImageBackground, Button, Alert, TouchableOpacity } from 'react-native';
import logo from './images/logo.png';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      button: true,
      activeUomo: '#e4d8d8',
      activeDonna: '#e4d8d8'
    }
  }

  activeUomo = () => {
    this.setState({ activeUomo: '#3025ed', activeDonna: '#e4d8d8'})
  }

  activeDonna = () => {
    this.setState({ activeUomo: '#e4d8d8', activeDonna: '#3025ed'})
  }

  onSubmit = () => {
    if (this.validateEmail(this.state.email)) {
      Alert.alert('registrazione riuscita')
    } else {
      Alert.alert('errore nella registrazione')
    }
  }

  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  };

  render() {
    return (
      <ImageBackground source={logo} style={styles.container}>
        <View style={styles.miniContainer}>
          <Text style={styles.title}>REGISTRATI</Text>
          <Text style={styles.subtitle}>Schermata di registrazione</Text>
        </View>
        <View style={styles.miniContainer}>
          <Text style={styles.registrazione}>LE MIE INFORMAZIONI</Text>
          <TextInput placeholder="Nome" style={styles.textInput} 
            onChangeText={(name) => {
              this.setState({name}) 
              this.state.name !== '' && this.state.email !== '' && this.state.password !== '' ? this.setState({ button: false }) : null
            }}
            value={this.state.name}/>
          <TextInput placeholder="Email" style={styles.textInput} onSubmitEditing={this.validateEmail} 
            onChangeText={(email) => {
              this.setState({email})
              this.state.name !== '' && this.state.email !== '' && this.state.password !== '' ? this.setState({ button: false }) : null
            }} value={this.state.email} />
          <TextInput placeholder="Password" secureTextEntry style={styles.textInput} 
            onChangeText={(password) => {
              this.setState({password})
              this.state.name !== '' && this.state.email !== '' && this.state.password !== '' ? this.setState({ button: false }) : null
            }} value={this.state.password} />
            <View style={styles.sesso}>
            <View style={{ width: '40%'}}>
              <Button 
                title={'UOMO'}
                onPress={this.activeUomo}
                color={this.state.activeUomo}
                />
              </View>
              <View style={{ width: '40%'}}>
              <Button 
                title={'DONNA'}
                onPress={this.activeDonna}
                color={this.state.activeDonna}
              />
              </View>
            </View>
          <View style={{ width: '80%', marginTop: '3%'}}>
            <Button
              title={'CREA ACCOUNT'} 
              style={{ color: '#ffffff' }}
              color={'#423e3e'}
              onPress={this.onSubmit}
              disabled={this.state.button}
            />
          </View>
          <View style={{ width: '80%', alignItems: 'center', marginTop: 30 }}>
            <Text style={{ color: '#000000', fontSize: 25}}>Oppure</Text>
            <TouchableOpacity style={{ backgroundColor: '#1b61ea', color: '#ffffff', width: '100%', height: 40,justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: '#ffffff', fontSize: 20}}>Registrati con Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  miniContainer: {
    width: '100%',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: '#ffffff',
    width: '80%',
    margin: '2%',
  },
  title: {
    fontSize: 30,
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 20,
    color: '#ffffff',
  },
  registrazione: {
    color: '#000000',
    fontSize: 20,
  },
  sesso: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
});
