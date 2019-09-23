import { Injectable } from '@angular/core';
import { Instrument } from '../model/instrument';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  instruments: Instrument[] = [];
  
  constructor() { 
    var instrument1: Instrument = {
      id: 1,
      name: "Guitar",
      status: 0
    };

    var instrument2: Instrument = {
      id: 2,
      name: "Bass",
      status: 1
    };

    var instrument3: Instrument = {
      id: 3,
      name: "Drum",
      status: 0
    };

    var instrument4: Instrument = {
      id: 4,
      name: "Violino",
      status: 1      
    };

    var instrument5: Instrument = {
      id: 5,
      name: "Teclado",
      status: 0      
    };

    this.instruments.push(instrument1,instrument2,instrument3,instrument4,instrument5);
  }

  getAllInstrument():Instrument[] {
    return this.instruments;
  }

  add(instrument:Instrument){
    instrument.status = 1;
    instrument.id = this.instruments.length+1;
    this.instruments.push(instrument);
  }

  activeOrInactive(instrument:Instrument){
    this.instruments.forEach((obj, key) => {
      if(obj.id === instrument.id){
        obj.status = (obj.status === 0) ? 1 : 0;
      }
    });
  }

  remove(instrument:Instrument){
    this.instruments.forEach((obj, key) => {
      if(obj.id === instrument.id){
        this.instruments.splice(key,1);
      }
    });
  }

}
