"use client";
import Swal from "sweetalert2";
import { useState } from "react";
import { cargarTarea, ObjetModeling } from "@/app/data/addTarea.js";
import { info } from "../data/emula";

export const CrearTarea__Cliente = ({ title }) => {
  const client = "User Final";

  const [infoForm, setInfoForm] = useState({
    concepto: "",
    detalles: "",
    importancia: "No",
    urgencia: "No",
    active: true,
    createdBy: client,
  });

  const objetoRecever = infoForm;

  const CargarInfo = () => {
    Swal.fire({
      title: "Desear Crear la Tarea?",
      text: "Sera Cargada en tu tablero!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Crear Tarea!",
    }).then((result) => {
      if (result.isConfirmed) {
        cargarTarea("Tareas", infoForm);
        Swal.fire({
          title: "Tarea Creada!",
          text: "La tarea Fue creada y Categorizada en tu Tablero.",
          icon: "success",
        });
      }
    });
  };

  const HandleChange__Concepto = (e) => {
    setInfoForm({ ...infoForm, concepto: e.target.value });
  };

  const HandleChange__Detalles = (e) => {
    setInfoForm({ ...infoForm, detalles: e.target.value });
  };

  const HandleChange__Urgente = (e) => {
    setInfoForm({ ...infoForm, urgencia: e.target.value });
  };

  const HandleChange__Importante = (e) => {
    setInfoForm({ ...infoForm, importancia: e.target.value });
  };

  return (
    <>
      <h2>{title}</h2>

      <div className="CreaCliente__container">
        <form>
          <label htmlFor="">Concepto: </label>
          <input type="text" onChange={HandleChange__Concepto} />
          <label htmlFor="">Detalles: </label>
          <textarea name="" onChange={HandleChange__Detalles}></textarea>
          <label htmlFor="">Urgente</label>
          <select onChange={HandleChange__Urgente}>
            <option value={"Si"}>Si</option>
            <option value={"No"}>No</option>
          </select>
          <label htmlFor="">Importante</label>
          <select onChange={HandleChange__Importante}>
            <option value={"Si"}>Si</option>
            <option value={"No"}>No</option>
          </select>
        </form>

        <div className="buttoner">
          <button onClick={CargarInfo}>Enviar</button>
          <button>Limpiar</button>
        </div>
      </div>
    </>
  );
};
