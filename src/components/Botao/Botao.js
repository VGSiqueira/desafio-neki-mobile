import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Botao = ({ titulo, onPress }) => {

    return (
        <TouchableOpacity style={styles.botao} onPress={onPress}>
            <Text style={styles.titulo}>{titulo}</Text>
        </TouchableOpacity>
    )

}

export default Botao;