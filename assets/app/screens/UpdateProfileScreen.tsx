import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { supabase } from '../services/supabaseClient';

const UpdateProfileScreen = () => {
  const [profile, setProfile] = useState({
    nomeUser: '',
    emailUser: '',
    // outros campos...
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data) {
        setProfile(data.user);
      } else {
        console.error(error.message);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdateProfile = async () => {
    const { error } = await supabase.auth.updateUser(profile);
    if (!error) {
      console.log('Profile updated successfully');
    } else {
      console.error(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={profile.nomeUser}
        onChangeText={(value) => setProfile({ ...profile, nomeUser: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={profile.emailUser}
        onChangeText={(value) => setProfile({ ...profile, emailUser: value })}
      />
      {/* Outros campos... */}
      <Button title="Atualizar Perfil" onPress={handleUpdateProfile} />
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

export default UpdateProfileScreen;
