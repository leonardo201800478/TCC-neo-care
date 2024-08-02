import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import { supabase } from '../services/database/supabaseClient';

const ConsultationScreen = () => {
  const [patientName, setPatientName] = useState('');
  const [consultations, setConsultations] = useState([]);

  const handleSearchPatient = async () => {
    const { data, error } = await supabase.from('patients').select('*').like('nomepatient', `%${patientName}%`);
    if (!error) {
      setConsultations(data);
    } else {
      console.error(error.message);
    }
  };

  const handleCreateConsultation = async (patientId: string) => {
    const newConsultation = {
      patient_id: patientId,
      doctor_id: 'doctor_id_here',
      motivoconsultation: 'Motivo da consulta',
    };
    const { data, error } = await supabase.from('consultations').insert([newConsultation]);
    if (!error) {
      console.log('Consultation created successfully');
    } else {
      console.error(error.message);
    }
  };

  const handleDeleteConsultation = async (id: string) => {
    const { data, error } = await supabase.from('consultations').delete().eq('id', id);
    if (!error) {
      console.log('Consultation deleted successfully');
    } else {
      console.error(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar Paciente"
        value={patientName}
        onChangeText={setPatientName}
      />
      <Button title="Pesquisar" onPress={handleSearchPatient} />
      <FlatList
        data={consultations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.consultation}>
            <Text>{item.nomepatient}</Text>
            <Button title="Criar Consulta" onPress={() => handleCreateConsultation(item.id)} />
            <Button title="Deletar Consulta" onPress={() => handleDeleteConsultation(item.id)} />
          </View>
        )}
      />
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
  consultation: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default ConsultationScreen;
function useState(arg0: string): [any, any] {
  throw new Error('Function not implemented.');
}

