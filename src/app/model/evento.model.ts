export class Evento{

    constructor(
        public id_evento:number,
        public descripcion:string,
        public fecha_inicio:Date,
        public fecha_fin:Date,
        public id_grupo:number
        ){}
    
}