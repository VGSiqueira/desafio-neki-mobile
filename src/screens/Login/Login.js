import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Botao from '../../components/Botao/Botao';
import Titulo from '../../components/Titulo/Titulo';
import styles from './styles';

const Login = ({navigation}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

    const hangleNavigateHome = () => {
        navigation.navigate('Home')
    }

  const handleNavigateCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <SafeAreaView style={{flex: 1, padding: '5%'}}>
      <View style={styles.header}>
        <Titulo title="Login" />
      </View>

      <View style={styles.inputs}>
        <TextInput
          style={styles.textInput}
          placeholder="Login"
          onChangeText={setLogin}
          value={login}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Senha"
          textContentType="password"
          onChangeText={setPassword}
          value={password}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Botao titulo="Entrar" onPress={hangleNavigateHome} />
      </View>

      <View style={styles.textContainer}>
        <Text>Não possui uma conta?</Text>
        <TouchableOpacity onPress={handleNavigateCadastro}>
          <Text style={styles.textDecorator}>Cadastre-se!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
