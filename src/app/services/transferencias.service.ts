import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';



@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }


  adicionar(transferencia: any) {
    this.hydratar(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  private hydratar(transferencia: any) {
    transferencia.data = new Date();
  }

}
