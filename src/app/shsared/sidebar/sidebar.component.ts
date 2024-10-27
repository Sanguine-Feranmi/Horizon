import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  activePath: string = '';
path: any;
  constructor (private router: Router){
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationEnd){
        this.activePath = event.urlAfterRedirects;
      }
    })
  }
  setActivePath(path: string): void{
    this.activePath = path;
  }
}
