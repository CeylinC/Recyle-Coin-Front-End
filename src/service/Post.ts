import {
  addDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  updateDoc,
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
  return docRef.id;
};

export const getWorksData = async (page: number) => {
  const works: IWork[] = [];
  const q = query(
    workRef,
    orderBy("id"),
    limit(10),
    startAfter(10 * (page - 1))
  );
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
    const lastWork = doc.data();
    console.log(lastWork.id);
    lastID = lastWork.id;
  });
  return lastID;
};

export const setAvailableWork = async (
  userId: string,
  availableWorks: string[]
) => {
  const docRef = doc(db, "User", userId);
  await updateDoc(docRef, { availableWorks: availableWorks });
};

export const getAvailableWorkDatas = async (
  availableWorksID: string[],
  page: number
) => {
  const workList: IWork[] = [];
  for (
    let index = (page - 1) * 10;
    index < availableWorksID.length && index < page * 10;
    index++
  ) {
    const docSnap = await getDoc(doc(db, "Work", availableWorksID[index]));
    const work = docSnap.data();
    if (work) {
      workList.push(new Work({ ...work, workId: docSnap.id }));
    }
  }
  return workList;
};
