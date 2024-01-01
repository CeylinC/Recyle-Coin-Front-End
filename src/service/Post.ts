import {
  addDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { IWork, Work } from "../model";
import { db, workRef } from "../util/firebase";

export const createWork = async (work: IWork) => {
  let lastID = await getLastId();
  const docRef = await addDoc(workRef, {
    name: work.name,
    description: work.description,
    amount: work.amount,
    start: work.start,
    finish: work.finish,
    state: work.state,
    isActive: work.isActive,
    freelancer: work.freelancer || "",
    id: ++lastID,
  });
  console.log("Document written with ID: ", docRef.id);
};

export const getWorksData = async (page: number) => {
  const works: IWork[] = [];
  const q = query(workRef, orderBy("id"), limit(10), startAfter(10 * (page - 1)));
  console.log(q);
  const docs = await getDocs(q);
  docs.forEach((doc) => {
    works.push(new Work({ ...doc.data(), workId: doc.id }));
  });
  console.log(works);
  return works;
};

export const getLastId = async () => {
  let lastID = 0;
  const q = query(workRef, orderBy("id", "desc"), limit(1));
  console.log(q);
  const docs = await getDocs(q);
  docs.forEach((doc) => {
    const zaa = doc.data();
    console.log(zaa.id);
    lastID = zaa.id;
  });
  return lastID;
};
