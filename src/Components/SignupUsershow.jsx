import React, { useEffect, useState } from 'react';
import { db } from '../Firebase/Firebaseconfig';
import { collection, getDocs } from 'firebase/firestore';
import SignupUserTable from './SignupUserTable';

function SignupUsershow() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const signupData = await getDocs(collection(db, 'Users'));
        const usersData = signupData.docs.map(doc => ({
            id: doc.id,
          ...doc.data()
        }));
        setUserData(usersData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <SignupUserTable
        usersData={userData}
        columns = {[
            {
                key: "userName",
                label: "User Name"
            },
            {
                key: "email",
                label: "Email"
            },
            {
                key: "password",
                label: "Password"
            }
            ]}
    />
);
}

export default SignupUsershow;