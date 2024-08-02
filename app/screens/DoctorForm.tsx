import { View, TextInput, Button, StyleSheet } from 'react-native';
import { supabase } from '../services/database/supabaseClient';
import { insertDoctor } from "../services/database/localDatabase";

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
function useState(arg0: { id: string; created_at: string; nomeUser: string; cpfUser: string; dataNascUser: string; emailUser: string; foneUser: string; cepUser: string; ufUser: string; cidadeUser: string; bairroUser: string; logradouroUser: string; numeroUser: string; owner_id: string; inserted_at: string; updated_at: string; }): [any, any] {
  throw new Error('Function not implemented.');
}

