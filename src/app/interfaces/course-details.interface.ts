// course-details.interface.ts

export interface CourseDetails {
    id: string;
    nombre: string;
    descripcion: string;
    autor: string;
    id_categoria: string;
    status: string;
    intro: string;
    es_bienestar: string;
    imagen: string;
    modulos: Modulo[];
  }
  
  export interface Modulo {
    id: string;
    nombre: string;
    archivo: string;
    descripcion: string;
    descargable: string | null;
    imagen: string | null;
  }
  