import { Component, OnInit, Input } from '@angular/core';
import {LuthierService} from '../shared/service/luthier.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Luthier } from '../shared/model/luthier';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-luthier',
  templateUrl: './luthier.component.html',
  styleUrls: ['./luthier.component.css'],
  providers: [LuthierService]
})
export class LuthierComponent implements OnInit {

  luthier:Luthier;

  constructor(private route: ActivatedRoute,
              private luthierService : LuthierService,
              private location: Location,
              private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getLuthier();
  }

  getLuthier(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.luthierService.getAllLuthiers().forEach((obj, key) => {
      if(obj.id === id){
        this.luthier = obj;
      }
    });
  }

  getBackground(img){
    return this._sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

}
