import React, { useState, createContext, useEffect } from 'react';

export const AuthenticatedUserContext = createContext({});

export const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(null)
  const [inbox, setInbox] = useState(null)
  const [register, setRegister] = useState(false);
  const [contacts, setContacts] = useState(null)
  const [friends, setFriends] = useState([]);
  const [friendRequests, setFriendRequests] = useState([])
  const [shcoolFriends, setShcoolFriends] = useState([]);
  const [price, setPrice] = useState(null)
  const [isSuperSpill, setIsSuperSpill] = useState(false)
  // const [shcool, setShcool] = useState(null);
  // const [grade, setGrade] = useState(null);
  // const [gender, setGender] = useState(null);

  return (
    <AuthenticatedUserContext.Provider 
      value={{ 
        auth, setAuth, user, setUser, register, setRegister, contacts, setContacts, inbox, setInbox,
        friends, setFriends, friendRequests, setFriendRequests, shcoolFriends, setShcoolFriends, 
        price, setPrice, isSuperSpill, setIsSuperSpill
        // shcool, setShcool, grade, setGrade, gender, setGender
      }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
