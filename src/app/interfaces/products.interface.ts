import { Timestamp } from "rxjs";

export interface OrderDetail {
	id_producto: number;
	vendedor: string;
	nombre: string;
	imagen: string | null;
	precio: string;
	estado: string;
  }
  
  export interface Order {
	id_pedido: string;
	lugar_entrega: string;
	fecha_pedido: string;
	detalles: OrderDetail[];
  }
  
  // Interfaz para los producots
  export interface Product {
	nombre_de_usuario: string,
	boleta_vendedor: number,
	id_producto: number,
	nombre: string,
	imagen: string | null,
	descripcion: string,
	precio: number,
	disponibilidad: boolean,
	fecha_creacion: string,
	placeholder: boolean
  }