import { useEffect, useState } from "react";
import { getAllCursos } from "../../../https/api"; // Ajustá el path según tu estructura
import { ICursos } from "../../../types/ICursos";
import { CursoCard } from "../CursoCard"; // Asegurate de tener este componente
import styles from './cursoList.module.css'

export const CursoList = () => {
  const [cursos, setCursos] = useState<ICursos[]>([]);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const data = await getAllCursos();
        console.log(" Cursos en el componente:", data); // DEBUG
        if (Array.isArray(data)) {
          setCursos(data);
        } else {
          console.error("La respuesta no es un array:", data);
          setCursos([]);
        }
      } catch (error) {
        console.error("Error al obtener cursos:", error);
        setCursos([]);
      }
    };
    fetchCursos();
  }, []);
  

  return (
    <>
      <div className={styles.container}>
        {Array.isArray(cursos) && cursos.length > 0 ? (
          cursos.map((curso) => <CursoCard key={curso.id} curso={curso} />)
        ) : (
          <p>No hay cursos disponibles.</p>
        )}
      </div>
    </>
  );
};
