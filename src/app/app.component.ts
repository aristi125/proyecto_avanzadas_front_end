import { Component, OnInit } from '@angular/core';
import { TokenService } from './servicios/token.service';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
title = "Clinica UQ";
isLogged = false;
email:string = "";
constructor(private tokenService:TokenService) { }
ngOnInit(): void {
this.isLogged = this.tokenService.isLogged();
if(this.isLogged){
this.email = this.tokenService.getEmail();
}
}
public logout(){
this.tokenService.logout();
}
}
