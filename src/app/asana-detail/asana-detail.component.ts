import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsanaService } from '@app/_services';
import { Asana } from '@app/_models';

@Component({
  selector: 'app-asana-detail',
  templateUrl: './asana-detail.component.html',
  styleUrls: ['./asana-detail.component.css']
})
export class AsanaDetailComponent implements OnInit {
  id: number;
  asana: Asana;

  constructor(private route: ActivatedRoute,private router: Router,
    private asanaService: AsanaService) { }

  ngOnInit() {
    this.asana = new Asana();

    this.id = this.route.snapshot.params['id'];

    this.asanaService.getAsana(this.id)
    .subscribe(data => {
      console.log(data)
      this.asana = data;
    }, error => console.log(error));

  }

}
