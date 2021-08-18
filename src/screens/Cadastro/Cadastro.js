import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Botao from '../../components/Botao/Botao';
import Titulo from '../../components/Titulo/Titulo';
import api from '../../services/http/api';
import styles from './styles';

const Login = ({navigation}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleNavigateLogin = () => {
    navigation.navigate('Login');
  };

  const cadastrar = () => {
    if (password == repeatPassword) {
      const usuario = {
        login: login,
        password: password,
      };
      api
        .post('/user', usuario)
        .then(response => {
          navigation.navigate('Login');
        })
        .catch(erro => {
          console.log(erro);
        });
    } else {
      alert('Verifique o campo de senha!');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, padding: '5%'}}>
      <View style={styles.header}>
        <Titulo title="Cadastro" />
      </View>

      <View style={styles.inputs}>
        <TextInput
          style={styles.textInput}
          placeholder="Login"
          maxLength={12}
          onChangeText={setLogin}
          value={login}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Senha"
          textContentType="password"
          maxLength={100}
          onChangeText={setPassword}
          value={password}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Confirmar senha"
          textContentType="password"
          maxLength={100}
          onChangeText={setRepeatPassword}
          value={repeatPassword}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Botao titulo="Cadastrar" onPress={cadastrar} />
      </View>

      <View style={styles.textContainer}>
        <Text>Já possui uma conta?</Text>
        <TouchableOpacity onPress={handleNavigateLogin}>
          <Text style={styles.textDecorator}>Entre!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
