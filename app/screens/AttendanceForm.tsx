import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { supabase } from '../services/database/supabaseClient';
import { insertAttendance } from '../services/database/localDatabase';

const AttendanceForm = () => {
  const [attendance, setAttendance] = useState({
    id: '',
    created_at: new Date().toISOString(),
    created_by: '',
    doctor_id: '',
    patient_id: '',
    consultation_id: '',
    hist: '',
    tipo: '',
    taxMae: '',
    pesoMae: '',
    estaturaMae: '',
    paMae: '',
    tipoSangMae: '',
    tax: '',
    apgar1: '',
    apgar5: '',
    peso: '',
    comprimento: '',
    pc: '',
    gesta: '',
    para: '',
    cesareas: '',
    abortos: '',
    abotEspon: '',
    vacinasMae: '',
    nascVivos: '',
    mortNeo: '',
    filhos: '',
    intern: false,
    cirg: false,
    quantCirg: '',
    consulPre: false,
    quantConsulPre: '',
    tratMae: false,
    descrMae: '',
    inserted_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });

  const handleSaveAttendance = async () => {
    const { data, error } = await supabase.from('attendances').insert([attendance]);
    if (!error) {
      insertAttendance(attendance); // Save to local database
      console.log('Attendance saved successfully');
    } else {
      console.error(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Histórico"
        value={attendance.hist}
        onChangeText={(value) => setAttendance({ ...attendance, hist: value })}
      />
      {/* Outros campos */}
      <Button title="Salvar Prontuário" onPress={handleSaveAttendance} />
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

export default AttendanceForm;
function useState(arg0: { id: string; created_at: string; created_by: string; doctor_id: string; patient_id: string; consultation_id: string; hist: string; tipo: string; taxMae: string; pesoMae: string; estaturaMae: string; paMae: string; tipoSangMae: string; tax: string; apgar1: string; apgar5: string; peso: string; comprimento: string; pc: string; gesta: string; para: string; cesareas: string; abortos: string; abotEspon: string; vacinasMae: string; nascVivos: string; mortNeo: string; filhos: string; intern: boolean; cirg: boolean; quantCirg: string; consulPre: boolean; quantConsulPre: string; tratMae: boolean; descrMae: string; inserted_at: string; updated_at: string; }): [any, any] {
  throw new Error('Function not implemented.');
}

