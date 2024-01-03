import { NavigateFunction } from "react-router-dom";
import { ErrorCode, IUser, loginUserErrorMessage } from "../model";
import {
  User,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../util/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

let uc: User;

const createUser = (user: IUser, navigate: NavigateFunction) => {
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      if (user.password !== undefined) {
        createUserWithEmailAndPassword(auth, user.email, user.password)
          .then(async (userCredential) => {
            uc = userCredential.user;
            await setUserData({
              firstName: user.firstName,
              lastName: user.lastName,
              role: user.role,
              email: user.email,
              location: user.location,
              availableWorks: [],
            });
            navigate("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            alert(
              loginUserErrorMessage[errorCode as ErrorCode] ??
                "Unexpected Error"
            );
          });
      }
    })
    .catch((error) => {
      console.log(error.code + " " + error.message);
    });
};

const loginUser = (
  email: string,
  password: string,
  navigate: NavigateFunction
) => {
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          uc = userCredential.user;
          const userData = await getUserData();
          if (userData) {
            userData.role === "admin"
              ? navigate("/admin/movie-list")
              : navigate("/");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          alert(
            loginUserErrorMessage[errorCode as ErrorCode] ?? "Unexpected Error"
          );
        });
    })
    .catch((error) => {
      console.log(error.code + " " + error.message);
    });
};

const getUserData = async () => {
  const userData = sessionStorage.getItem(
    "firebase:authUser:AIzaSyCDEZ6PISUyW3Pc_gVh7xYWhEqLjWdhd7w:[DEFAULT]"
  );
  if (userData) {
    const userId = JSON.parse(userData).uid;
    const docSnap = await getDoc(doc(db, "users", userId));
    const user = docSnap.data();
    if (user) {
      return user;
    }
  }
};

const setUserData = async (user: IUser) => {
  const docRef = doc(db, "users");
  await setDoc(docRef, {
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
    email: user.email,
    location: user.location,
    availableWorks: user.availableWorks,
  });
};

export { createUser, loginUser, getUserData };
