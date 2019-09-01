import { Injectable } from '@angular/core';
import { Luthier } from '../model/luthier';

@Injectable({
  providedIn: 'root'
})
export class LuthierService {

  constructor() { }

  getAllLuthiers():Luthier[] {

    let luthiers: Luthier[] = [];

    var luthier1: Luthier = {
      id: 1,
      name: "Jerry Muricy",
      instruments: ["../../../assets/img/guitar.svg","../../../assets/img/electric-guitar.svg","../../../assets/img/bass.svg"],
      followers: 3500,
      photos: 950,
      imgProfile: "../../../assets/img/background/profile2.jpg",
      imgBackground: "../../../assets/img/background/4.jpg"
    };

    var luthier2: Luthier = {
      id: 2,
      name: "Diogo Uebbe",
      instruments: ["../../../assets/img/guitar.svg","../../../assets/img/electric-guitar.svg","../../../assets/img/bass.svg","../../../assets/img/sitar.svg"],
      followers: 864,
      photos: 674,
      imgProfile: "../../../assets/img/background/profile.jpg",
      imgBackground: "../../../assets/img/background/3.jpg"
    };

    var luthier3: Luthier = {
      id: 3,
      name: "Jonh Trump",
      instruments: ["../../../assets/img/guitar.svg"],
      followers: 300,
      photos: 50,
      imgProfile: "../../../assets/img/background/profile3.jpg",
      imgBackground: "../../../assets/img/background/2.jpg"
    };

    var luthier4: Luthier = {
      id: 4,
      name: "Daniel Piça",
      instruments: ["../../../assets/img/guitar.svg","../../../assets/img/electric-guitar.svg"],
      followers: 951,
      photos: 238,
      imgProfile: "../../../assets/img/background/profile.jpg",
      imgBackground: "../../../assets/img/background/5.jpg"
    };

    luthiers.push(luthier1,luthier2,luthier3,luthier4);

    return luthiers;
  }

}
