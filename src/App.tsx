import React from 'react';
import FlashMessage from 'react-native-flash-message';

import { Routes } from './routes';

const App = () => (
  <>
    <Routes />
    <FlashMessage position="top" />
  </>
);

export default App;
