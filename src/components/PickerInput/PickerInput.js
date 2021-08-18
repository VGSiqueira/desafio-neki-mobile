import React from 'react';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';


const PickerInput = ({setLista,lista, select }) => {
  return (
    <Picker
      selectedValue={select}
      onValueChange={item => {
        setLista(item);
      }}
      style={styles.picker}>
      <Picker.Item key={0} label="-- Selecione --" value={0} />
      {lista.map(item => {
        return (
          <Picker.Item
            key={item.id}
            label={item.name}
            value={item.id}
          />
        );
      })}
    </Picker>
  );
};

export default PickerInput;
