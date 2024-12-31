import React from 'react';
import { UserProvider } from './context/UserContext';
import UserProfile from './components/Userprofile';


const App = () => {
  return (
    // Step 4: Wrap Component Tree with Provider
    <UserProvider>
      <UserProfile/>
    </UserProvider>
  );
};

export default App;
