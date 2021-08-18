import React, {useState} from 'react';
import {SafeAreaView, Text, View, FlatList} from 'react-native';
import styles from './styles';
import Titulo from '../../components/Titulo/Titulo';
import {Picker} from '@react-native-picker/picker';
import api from '../../services/http/api';
import {useEffect} from 'react';
import PickerInput from '../../components/PickerInput/PickerInput';
import SkillCard from '../../components/SkillCard/SkillCard';

const Home = () => {
  const [skills, setSkills] = useState([]);
  const [skillSelecionada, setSkillSelecionada] = useState(0);
  const [nivel, setNivel] = useState(0);

  const niveis = [1,2,3,4,5,6,7,8,9,10]

  const [dados, setDados] = useState([]);

  useEffect(() => {
     // api.get('/user/'+ userId) -> Pegar o id do async storage futuramente
     api.get('/user/'+ 1)
     .then((response) => {
       setDados(response.data.skills)
       console.log(response.data.skills)
     })
     .catch((erro) => {
       console.log(erro);
     })
    api
      .get('/skill')
      .then(response => {
        setSkills(response.data);
      })
      .catch(erro => console.log(erro));
  }, []);

  return (
    <SafeAreaView style={{flex: 1, padding: '5%'}}>
      <View style={styles.header}>
        <Titulo title="Habilidades" />
      </View>
      <View>
        <View>
          <Text>Habilidades:</Text>
        </View>

        <PickerInput
          lista={skills}
          setLista={setSkillSelecionada}
          select={skillSelecionada}
        />
        <View>
          <Text>Nível:</Text>
        </View>

        <Picker
          selectedValue={nivel}
          onValueChange={item => {
            setNivel(item);
          }}
          style={styles.picker}>
          <Picker.Item key={0} label="-- Selecione --" value={0} />
          {niveis.map(item => {
            return (
              <Picker.Item
                key={item}
                label={item}
                value={item}
              />
            );
          })}
        </Picker>
      </View>

          <View>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={dados}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => {
              console.log(dados)
              return (
                <SkillCard
                  source={item.skill.imageUrl}
                  skill={item.skill.name}
                  description={item.skill.description}
                  knowledgeLevel={item.knowledgeLevel}
                  version={item.skill.version}
                />
                
              )
            }}
            />
          </View>

    </SafeAreaView>
  );
};

export default Home;
