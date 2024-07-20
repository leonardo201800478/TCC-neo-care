import React, { useEffect } from 'react';
import { Router } from 'expo-router';
import { initializeDatabase } from './services/localDatabase';

const App = () => {
  useEffect(() => {
    initializeDatabase();
  }, []);

  return <Router />;
};

export default App;
