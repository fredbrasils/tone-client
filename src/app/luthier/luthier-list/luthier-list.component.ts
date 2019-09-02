import { Component, OnInit } from '@angular/core';
import {LuthierService} from '../../shared/service/luthier.service';
import {Luthier} from '../../shared/model/luthier';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-luthier-list',
  templateUrl: './luthier-list.component.html',
  styleUrls: ['./luthier-list.component.css'],
  providers: [LuthierService]
})
export class LuthierListComponent implements OnInit {

  luthiers : LuthierList[] = []; 
  detail:boolean;

  constructor(private luthierService : LuthierService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getAllLuthiers();
  }

  getAllLuthiers() {
    this.luthierService.getAllLuthiers().forEach((obj, key) => {
      let luthier = new LuthierList();
      luthier.luthier = obj;
      this.luthiers.push(luthier);
    });
  }

  getBackground(img){
    return this._sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

  showDetail(lut:LuthierList){
    lut.detail=!lut.detail;
  }
}

class LuthierList{
    luthier:Luthier;
    detail:boolean;
}