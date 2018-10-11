export class RegistraAcceso{

    constructor(
        public descripcion:string,
        public dni:number,
        public apellido:string,
        public nombre:string,
        public id_evento:number,
        public id_usuario:number,
        public id_estado:number,
        public id_grupo:number
    ) { }
}