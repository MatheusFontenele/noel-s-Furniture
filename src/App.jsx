import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    console.log(users);
    getUsers();
  }, []);

  return (
    <div id="container" className="container">
      <div className="div1"> hello world</div>
    </div>
  );
}

export default App;
