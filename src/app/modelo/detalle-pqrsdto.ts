export class DetallePQRSDTO {
  codigo: number = 0;
  estadoPqrs: string = ""; //enum
  motivoPqrs: string = "";
  nombrePaciente: string = "";
  nombreMedico: string = "";
  especialidad: string = ""; //enum
  fecha: string = "";
  mensaje: string = ""; //List<RespuestaDTO>

}
