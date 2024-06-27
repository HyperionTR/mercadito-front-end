export interface Order {
	id_pedido: string;
	lugar_entrega: string;
	fecha_pedido: string;
	comprador: string;
	notas: string;
	detalles: OrderDetails[];
}

export interface OrderDetails {
	id_producto: number;
	vendedor: string;
	nombre: string;
	imagen: string;
	placeholder: boolean;
	precio: string;
	estado: string;
}