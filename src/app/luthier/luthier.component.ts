import { Component, OnInit, Input } from '@angular/core';
import {LuthierService} from '../shared/service/luthier.service';

@Component({
  selector: 'app-luthier',
  templateUrl: './luthier.component.html',
  styleUrls: ['./luthier.component.css'],
  providers: [LuthierService]
})
export class LuthierComponent implements OnInit {

  @Input() 
  plataformName:String;
  msg:String;
  
  constructor(private luthierService : LuthierService) { }

  ngOnInit() {
   // this.plataform();
  }
/*
  plataform() {
    this.msg = this.luthierService.getPlataform(this.plataformName);
  }*/
 
}
