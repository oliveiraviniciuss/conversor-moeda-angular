import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  contatosUrl = 'https://forex.1forge.com/1.0.3/quotes?pairs=USDEUR,USDGBP,USDJPY,USDCNH&api_key=15imqzjvSj2bd9LcvHgszLmAwUTAh148';

  constructor(private http: HttpClient) { }

  listar(){
  return this.http.get<any[]>(`${this.contatosUrl}`);
  }
}
