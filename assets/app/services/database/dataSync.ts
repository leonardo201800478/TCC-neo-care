import { supabase } from './supabaseClient';
import { DatabaseSync } from 'powersync';
import { AsyncStorage } from 'react-native';

export const syncData = async () => {
  const localData = await AsyncStorage.getItem('patients');
  const { data: remoteData, error } = await supabase.from('patients').select('*');

  if (!error) {
    const resolvedData = resolveConflicts(localData, remoteData);
    await AsyncStorage.setItem('patients', JSON.stringify(resolvedData));
    await supabase.from('patients').upsert(resolvedData);
    console.log('Data synchronized successfully');
  } else {
    console.error(error.message);
  }
};

const resolveConflicts = (localData, remoteData) => {
  // Implement conflict resolution logic
  return remoteData; // Example simple resolution
};
