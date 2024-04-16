import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firestoreConfig";

export const obtenerDatos = async (colleccion, propiedadID, usuario) => {
  const q = query(
    collection(db, colleccion),
    where(propiedadID, "==", usuario)
  );
  const querySnapshot = await getDocs(q);
  const arrayInfo = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    arrayInfo.push(doc.data());
    //console.log(doc.data());
  });
  return arrayInfo;
};
