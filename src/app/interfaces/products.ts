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