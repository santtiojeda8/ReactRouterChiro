export interface ICursos{
    id:number,
    nombre:string
    estudiantes:IEstudiantes[]
}
export interface IEstudiantes{
    id: number, 
    nombre: string, 
    edad:number
}