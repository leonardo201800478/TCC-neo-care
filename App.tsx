import React from 'react';
import { useEffect } from 'react';
import Router from './app/navigators/AppNavigator';
import { initializeDatabase } from './app/services/database/localDatabase';

const App = () => {
  useEffect(() => {
    initializeDatabase();
  }, []);

  return <Router />;
};

export default App;
