import { Injectable } from'@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
    providedIn:'root'
})
export class ApiService
{
    private usersURL="https://panorbit.in/api/users.json";

    constructor(private httpclient: HttpClient) { }

    getAPI(): Observable<any>
    {
       return this.httpclient.get(this.usersURL);
    }

}