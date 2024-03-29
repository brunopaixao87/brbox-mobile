import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import logo from '../../assets/logo.png';


export default class Main extends Component {
  
  state = {
    newBox: ''
  }

  async componentDidMount(){
    const idBox = await AsyncStorage.getItem('@BrBox:idBox');

    if(idBox){
      this.props.navigation.navigate('Box');
    }
  }
  
  handleSignIn = async () => {
    if(this.state.newBox === ''){return;}
    const response = await api.post('boxes', {
      title: this.state.newBox,
    });

    await AsyncStorage.setItem('@BrBox:idBox', response.data._id);
    
    this.props.navigation.navigate('Box');
  }

  render() {
    return (
             <View style={styles.container}>
               <Image style={styles.logo} source={logo} />
               
               <TextInput 
                  style={styles.input} 
                  placeholder="Crie um box"
                  placeholderTextColor="#999"
                  autoCapitalize="none"
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  value={this.state.newBox}
                  onChangeText={ text => this.setState({ newBox: text })}
              />

              <TouchableOpacity
                  onPress={ this.handleSignIn}
                  style={styles.button} >
                  <Text style={styles.buttonText} >Criar</Text>
              </TouchableOpacity>

             </View>
        );
  }
}
