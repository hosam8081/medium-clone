import React, { useContext, useState, useEffect } from "react";
import { collection, getDocs, setDoc, doc} from "firebase/firestore";
import { signInWithPopup} from "firebase/auth";
import { db , provider, auth} from "../firebase/firebase";
const MediumContext = React.createContext();

const MediumProvider = ({ children }) => {
  const [posts, setPosts] = useState();
  const [users, setUsers] = useState();
  const [currentUser, setCurrentUser] = useState(null);

  // GET All Posts
  let getPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "article"));
    const list = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      list.push({ id: doc.id, ...doc.data() });
    });
    setPosts(list);
  };
  useEffect(() => {
    getPosts();
  }, [posts]);

  // GET All Posts
  let getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const list = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      list.push({ id: doc.id, ...doc.data() });
    });
    setUsers(list);
  };
  useEffect(() => {
    getUsers();
  }, []);


  // add user to firebase store
  const saveUser = async user => {
    await setDoc(doc(db, 'users', user.email), {
      email: user.email,
      name: user.displayName,
      imageUrl: user.photoURL,
      followerCount: 0,
      content:`My name is ${user.displayName} and I am a Junior self taught Web Developer. I enjoy using my skills to contribute to the exciting technological advances.`
    })
  }

  // Handle Click : sign in
  const handleUserAuth = async () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user

        setCurrentUser(user)
        saveUser(user)
      })
      .catch(error => {
        console.error(error.message)
      })
  }

  return (
    <MediumContext.Provider value={{ posts, users, handleUserAuth, currentUser}}>
      {children}
    </MediumContext.Provider>
  );
};

const useMediumContext = () => {
  return useContext(MediumContext);
};
export { MediumProvider, useMediumContext };
