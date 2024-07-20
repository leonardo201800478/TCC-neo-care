import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { supabase } from '../services/supabaseClient';
import { insertDoctor } from '../services/localDatabase';

const DoctorForm = () => {
  const [doctor, setDoctor] = useState({
    id: '',
    created_at: new Date().toISOString(),
    nomeUser: '',
    cpfUser: '',
    dataNascUser: '',
    emailUser: '',
    foneUser: '',
    cepUser: '',
    ufUser: '',
    cidadeUser: '',
    bairroUser: '',
    logradouroUser: '',
    numeroUser: '',
    owner_id: '',
    inserted_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });

  const handleSaveDoctor = async () => {
    const { data, error } = await supabase.from('doctors').insert([doctor]);
    if (!error) {
      insertDoctor(doctor); // Save to local database
      console.log('Doctor saved successfully');
    } else {
      console.error(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={doctor.nomeUser}
        onChangeText={(value) => setDoctor({ ...doctor, nomeUser: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={doctor.cpfUser}
        onChangeText={(value) => setDoctor({ ...doctor, cpfUser: value })}
      />
      {/* Outros campos */}
      <Button title="Salvar Médico" onPress={handleSaveDoctor} />
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

export default DoctorForm;
