import { Injectable } from '@angular/core';
import { ItemPQRSDTO } from '../modelo/item-pqrsdto';
import { CrearPQRSDTO } from '../modelo/crear-pqrsdto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PqrsService {
  pqrs: ItemPQRSDTO[];
constructor(private http: HttpClient) {
this.pqrs = [];
this.pqrs.push({ codigo: 1, estadoPqrs: 'ACTIVO', motivo: 'Solicitud de información', fecha:
'2023-10-12' });
this.pqrs.push({ codigo: 2, estadoPqrs: 'ACTIVO', motivo: 'Solicitud de cambio de fecha',
fecha: '2023-09-29' });
this.pqrs.push({ codigo: 3, estadoPqrs: 'CERRADO', motivo: 'Solicitud de información', fecha:
'2023-11-01' });
this.pqrs.push({ codigo: 4, estadoPqrs: 'ACTIVO', motivo: 'Queja sobre médico', fecha:
'2023-09-07' });
}
public listar(): ItemPQRSDTO[] {
return this.pqrs;
}
public obtener(codigo: number): ItemPQRSDTO | undefined{
return this.pqrs.find(pqrs => pqrs.codigo == codigo);
}
public crear(pqrs: CrearPQRSDTO){
let codigo = this.pqrs.length + 1;
this.pqrs.push({ codigo: codigo, estadoPqrs: 'ACTIVO', motivo: pqrs.motivo, fecha: new
Date().toISOString() });
}

}
