import { Navigate, Route, Routes } from "react-router";
import { CursosScreen } from "../components/Screen/CursosScreen";
import { EstudiantesScreen } from "../components/Screen/EstudiantesScreen";


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/CursoScreen" />} />
        <Route path="/CursoScreen" element={<CursosScreen />} />
        <Route path="/estudiantes" element={<EstudiantesScreen />} />
      </Routes>
    </>
  );
};
