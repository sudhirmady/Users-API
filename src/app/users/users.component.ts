import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/APIcall.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public usersData = 
  {
    "users":{}
  };

   constructor(private _ApiService: ApiService, private router:Router){}

  ngOnInit(): void {
    this._ApiService.getAPI()
    .subscribe(data=>{ this.usersData = data; 
      console.log(data);
    }
   )
  }

}
