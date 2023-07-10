import React from 'react';
import AppRouter from './AppRouter';
import NavigationBar from './components/NavigationBar';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <AppRouter />
    </div>
  );
};

export default App;
