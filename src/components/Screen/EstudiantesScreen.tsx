import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { ICursos } from "../../types/ICursos";
import { getAllCursos } from "../../https/api";
import { CursoCard } from "../ui/CursoCard";

export const EstudiantesScreen = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const curso = searchParams.get("curso");

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

  const cursoSeleccionado = cursos.find((el) => el.id.toString() === curso);

  return (
    <>
      <div>
        {cursoSeleccionado ? (
          <CursoCard curso={cursoSeleccionado} />
        ) : (
          <p>Curso no encontrado</p>
        )}
      </div>
    </>
  );
};
