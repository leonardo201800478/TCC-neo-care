import { View, TextInput, Button, StyleSheet } from 'react-native';
import { supabase } from "../services/database/supabaseClient";
import { insertPatient } from '../services/database/localDatabase';

const PatientForm = () => {
  const [patient, setPatient] = useState({
    id: '',
    created_at: new Date().toISOString(),
    nomepatient: '',
    cpfpatient: '',
    dataNascpatient: '',
    emailpatient: '',
    fonepatient: '',
    ceppatient: '',
    ufpatient: '',
    cidadepatient: '',
    bairropatient: '',
    logradouropatient: '',
    numeropatient: '',
    inserted_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });

  const handleSavePatient = async () => {
    const { data, error } = await supabase.from('patients').insert([patient]);
    if (!error) {
      insertPatient(patient); // Save to local database
      console.log('Patient saved successfully');
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
        placeholder="CPF"
        value={patient.cpfpatient}
        onChangeText={(value) => setPatient({ ...patient, cpfpatient: value })}
      />
      {/* Outros campos */}
      <Button title="Salvar Paciente" onPress={handleSavePatient} />
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

export default PatientForm;
function useState(arg0: { id: string; created_at: string; nomepatient: string; cpfpatient: string; dataNascpatient: string; emailpatient: string; fonepatient: string; ceppatient: string; ufpatient: string; cidadepatient: string; bairropatient: string; logradouropatient: string; numeropatient: string; inserted_at: string; updated_at: string; }): [any, any] {
  throw new Error('Function not implemented.');
}

