import  { FC } from "react";
import { ICursos } from "../../types/ICursos";
import { Link } from "react-router";

interface Props {
  curso: ICursos;
}

export const CursoCard: FC<Props> = ({ curso }) => {
  
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <Link to={`/estudiantes?curso=${curso.id}`}>{curso.nombre}</Link>
      <p><strong>Estudiantes:</strong></p>
      <ul>
        {curso.estudiantes.map(est => (
          <li key={est.id}>{est.nombre} (Edad: {est.edad})</li>
        ))}
      </ul>
    </div>
  );
};
