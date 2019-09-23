import { Component, OnInit } from '@angular/core';
import {InstrumentService} from '../../../shared/service/instrument.service';
import { Instrument } from '@src/app/shared/model/instrument';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css'],
  providers: [InstrumentService]
})
export class InstrumentComponent implements OnInit {

  instruments : Instrument[] = []; 
  instrument : Instrument = new Instrument();

  constructor(private instrumentService : InstrumentService) { }

  ngOnInit() {
    this.getInstruments();
  }

  getInstruments(): void {
    this.instruments = this.instrumentService.getAllInstrument();
  }

  getStatus(status:number){
    if(status === 0){
      return 'Active';
    }else{
      return 'Inactive';
    }
  }

  add(){
    this.instrumentService.add(this.instrument);
    this.instrument = new Instrument(); 
    this.getInstruments();
  }

  activeOrInactive(instrument:Instrument){
    this.instrumentService.activeOrInactive(instrument);
    this.getInstruments();
  }

  remove(instrument:Instrument){
    this.instrumentService.remove(instrument);
    this.getInstruments();
  }
}
