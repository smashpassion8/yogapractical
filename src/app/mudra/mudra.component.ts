import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsanaService } from '@app/_services';
import { AsanaCategory } from '@app/_models';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-mudra',
  templateUrl: './mudra.component.html',
  styleUrls: ['./mudra.component.css']
})
export class MudraComponent implements OnInit {
  asanaCat: Observable<AsanaCategory[]>;
  
  constructor(private asanaService: AsanaService, private appComp : AppComponent) {
    // this.asanaCat =[{"asanaCatId":1,"asanaCatName":"SNA","asanaDtos":[{"asanaId":1,"asanaName":"Urdhva Vriksasana"},{"asanaId":2,"asanaName":"Uttanasana [A]"},{"asanaId":3,"asanaName":"Uttanasana [B]"},{"asanaId":4,"asanaName":"Chaturanga Dandasana"},{"asanaId":5,"asanaName":"Urdhva-Mukha-Shvanasana"},{"asanaId":6,"asanaName":"Adho-Mukha-Shvanasana"},{"asanaId":7,"asanaName":"Uttanasana [B]"},{"asanaId":8,"asanaName":"Uttanasana [A]"},{"asanaId":9,"asanaName":"Urdhva Vriksasana"},{"asanaId":10,"asanaName":"Samasthitih"}]},{"asanaCatId":2,"asanaCatName":"SNB","asanaDtos":[{"asanaId":11,"asanaName":"Utkatasana"},{"asanaId":12,"asanaName":"Uttanasana [A]"},{"asanaId":13,"asanaName":"Uttanasana [B]"},{"asanaId":14,"asanaName":"Chaturanga Dandasana"},{"asanaId":15,"asanaName":"Urdhva-Mukha-Shvanasana"},{"asanaId":16,"asanaName":"Adho-Mukha-Shvanasana"},{"asanaId":17,"asanaName":"Virabhadrasana [A]"},{"asanaId":18,"asanaName":"Chaturanga Dandasana"},{"asanaId":19,"asanaName":"Urdhva-Mukha-Shvanasana"},{"asanaId":20,"asanaName":"Adho-Mukha-Shvanasana"},{"asanaId":21,"asanaName":"Virabhadrasana [A]"},{"asanaId":22,"asanaName":"Chaturanga Dandasana"},{"asanaId":23,"asanaName":"Urdhva-Mukha-Shvanasana"},{"asanaId":24,"asanaName":"Adho-Mukha-Shvanasana"},{"asanaId":25,"asanaName":"Uttanasana [B]"},{"asanaId":26,"asanaName":"Uttanasana [A]"},{"asanaId":27,"asanaName":"Utkatasana"},{"asanaId":28,"asanaName":"Samasthitih"}]}]
    appComp.title = "Mudra";
   }

   ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.asanaService.getMudraList().subscribe(
      data => {
        this.asanaCat = data;
        console.log(data);
        // console.log("I CANT SEE DATA HERE: ", data);
      }
    );
  }

}
