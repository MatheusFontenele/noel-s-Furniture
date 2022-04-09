import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    console.log(users);
    getUsers();
  }, []);

  const createUser = async () => {
    await addDoc(usersCollectionRef, { email: email, name: name });
  };

  const updateUser = async (id, name) => {
    console.log(id, name);
  };

  return (
    <div id="container" className="container">
      <form action="" onSubmit={createUser}>
        <input
          type="text"
          placeholder="Insira seu email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          placeholder="Insira seu nome"
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Criar</button>
      </form>
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <h1>Name: {user.name}</h1>
              <h1>email: {user.email}</h1>
              <button
                onClick={() => {
                  updateUser(user.id, user.name);
                }}
              >
                Editar usuario
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
