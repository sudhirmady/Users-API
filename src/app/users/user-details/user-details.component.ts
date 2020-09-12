import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/APIcall.service';





@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public usersData = 
  {
    "users":[]
  };

  constructor(private router:Router,private _ApiService: ApiService) { }

  ngOnInit(): void {
    this._ApiService.getAPI()
    .subscribe(data=>{ this.usersData= data; 
    }
   )
  }

}
