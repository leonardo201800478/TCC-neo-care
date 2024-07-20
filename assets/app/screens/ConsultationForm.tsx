import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { supabase } from '../services/supabaseClient';
import { insertConsultation } from '../services/localDatabase';

const ConsultationForm = () => {
  const [consultation, setConsultation] = useState({
    id: '',
    created_at: new Date().toISOString(),
    patient_id: '',
    doctor_id: '',
    motivoconsultation: '',
    created_by: '',
    inserted_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });

  const handleSaveConsultation = async () => {
    const { data, error } = await supabase.from('consultations').insert([consultation]);
    if (!error) {
      insertConsultation(consultation); // Save to local database
      console.log('Consultation saved successfully');
    } else {
      console.error(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Motivo da Consulta"
        value={consultation.motivoconsultation}
        onChangeText={(value) => setConsultation({ ...consultation, motivoconsultation: value })}
      />
      {/* Outros campos */}
      <Button title="Salvar Consulta" onPress={handleSaveConsultation} />
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

export default ConsultationForm;