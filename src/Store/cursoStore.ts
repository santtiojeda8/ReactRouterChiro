import { create } from "zustand";
import { ICursos } from "../types/ICursos";

interface ICursoStore{
    cursos:ICursos[];
    cursoActivo: ICursos | null;
    setCursoActivo:(cursoActivo: ICursos | null) => void  
}
export const tareaStore=create<ICursoStore>((set)=>({
    cursos:[],
    cursoActivo:null,

    setCursoActivo: (cursoActivaIn) =>
        set(() => ({ cursoActivo: cursoActivaIn })),
}))