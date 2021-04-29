import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-route',
  templateUrl: './login-route.component.html',
  styleUrls: ['./login-route.component.scss']
})
export class LoginRouteComponent implements OnInit {

  constructor(private router: Router) { }

  joinSession(ID: number){
    if(isNaN(ID) || !ID) return alert("Invalid ID");
    this.router.navigate(['/click/'], {queryParams: {"sessionID": ID}});
  }

  ngOnInit(): void {
  }

}
