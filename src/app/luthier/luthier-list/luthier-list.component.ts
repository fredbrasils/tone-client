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

  luthiers : Luthier[]; 

  constructor(private luthierService : LuthierService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getAllLuthiers();
  }

  getAllLuthiers() {
    this.luthiers = this.luthierService.getAllLuthiers();
  }

  getBackground(img){
    return this._sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

}
