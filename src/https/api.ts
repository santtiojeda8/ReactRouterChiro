import axios from "axios";
import { ICursos } from "../types/ICursos";

const API_URL = "http://localhost:3000/cursos";

export const getAllCursos = async (): Promise<ICursos[]> => {
  try {
    const response = await axios.get(API_URL);
    console.log("Cursos recibidos:", response.data); // debería ser el array

    if (!Array.isArray(response.data)) {
      throw new Error("La respuesta no es un array");
    }

    return response.data;
  } catch (error) {
    console.error("Error en getAllCursos:", error);
    throw error;
  }
}
