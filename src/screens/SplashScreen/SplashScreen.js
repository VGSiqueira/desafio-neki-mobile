import React from 'react';
import { useState } from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

const SplashScreen = (props) => {

    setTimeout(() => {
       props.navigation.navigate('Login'); 
    }, 3000);


  return (
    <SafeAreaView style={{flex: 1, justifyContent: "center"}}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>SKILLS!</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
