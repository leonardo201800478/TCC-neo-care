// Cadastro de Pacientes
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { supabase } from './supabaseClient';

const PatientCRUDScreen = () => {
  const [patient, setPatient] = useState({
    nomepatient: '',
    idade: '',
    contato: '',
  });

  const handleSavePatient = async () => {
    const { data, error } = await supabase.from('patients').insert([patient]);
    if (!error) {
      console.log('Patient saved successfully');
    } else {
      console.error(error.message);
    }
  };

  const handleUpdatePatient = async (id: string) => {
    const { data, error } = await supabase.from('patients').update(patient).eq('id', id);
    if (!error) {
      console.log('Patient updated successfully');
    } else {
      console.error(error.message);
    }
  };

  const handleDeletePatient = async (id: string) => {
    const { data, error } = await supabase.from('patients').delete().eq('id', id);
    if (!error) {
      console.log('Patient deleted successfully');
    } else {
      console.error(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={patient.nomepatient}
        onChangeText={(value) => setPatient({ ...patient, nomepatient: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={patient.idade}
        onChangeText={(value) => setPatient({ ...patient, idade: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Contato"
        value={patient.contato}
        onChangeText={(value) => setPatient({ ...patient, contato: value })}
      />
      <Button title="Salvar Paciente" onPress={handleSavePatient} />
      <Button title="Atualizar Paciente" onPress={() => handleUpdatePatient(patient.id)} />
      <Button title="Remover Paciente" onPress={() => handleDeletePatient(patient.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});

export default PatientCRUDScreen;
