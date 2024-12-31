import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserProfile = () => {
  // Step 3: Consume Context
  const { user, updateUser } = useContext(UserContext);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={() => updateUser({ age: user.age + 1 })}>
        Increase Age
      </button>
    </div>
  );
};

export default UserProfile;
