import { collection, addDoc } from "firebase/firestore";
import { db } from "./firestoreConfig";

export const ObjetModeling = (
  concepto,
  detalles,
  importancia,
  urgencia,
  active,
  createdBy
) => {
  const objetUse = {
    concepto: String(concepto),
    detalles: String(detalles),
    importancia: Boolean(importancia),
    urgencia: Boolean(urgencia),
    active: Boolean(active),
    createdBy: String(createdBy),
  };
  return objetUse;
};

export const cargarTarea = async (coleccion, objetInfo) => {
  const docRef = await addDoc(collection(db, coleccion), objetInfo);
  console.log("Document written with ID: ", docRef.id);
};
