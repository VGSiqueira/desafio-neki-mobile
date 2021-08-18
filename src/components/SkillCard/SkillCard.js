import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const SkillCard = ({source, skill, description, knowledgeLevel, version}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: source}} style={styles.img} />
      <View>
        <Text>{skill}</Text>
        <Text>Descrição: {description}</Text>
        <Text>Versão: {version}</Text>
        <Text>Nível: {knowledgeLevel}</Text>
      </View>
    </View>
  );
};

export default SkillCard;
