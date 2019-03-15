import { Component, OnInit } from '@angular/core';
import { MoedaService } from '../moeda.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { NgForm } from '@angular/forms';
import {Conversao} from 'src/app/conversor/models/conversao.model';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  moedas: Array<any[]>;
  private conversao: Conversao;

  constructor(private moedaService: MoedaService) { }

  ngOnInit() {
    this.listar();
    this.init();
  }

  listar(){
    this.moedaService.listar().subscribe(dados => this.moedas = dados)
  }

  init(){
    this.conversao = new Conversao(null);
  }
}
