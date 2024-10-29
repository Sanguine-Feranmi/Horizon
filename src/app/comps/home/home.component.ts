import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  details : any=
  {
    name: "Sanguine",
    fullname : "Sanguine Feranmi",
    mail : "feranmibayeri@gmail.com"
  }
  bankD: any=
  {
    name:'',
    NBA: 2,
    curBal: 2698.12
  }
  bank: any =
  {
    chase: 'Chase Bank'
  }
  chase: string = 'Chase Bank'
  NBA: number = 2;
  curBal: string = "2,698.12";


  banks: any [] = [
  'Chase Banks', 'Bank of America', 'First Platypus Bank'
 ]

 selectedBankIndex: number | null = 0;

 setActiveBank(index: number): void {
   this.selectedBankIndex = index;
 }

 selectedTab: string = 'chase'; // Default to Chase Bank tab

 selectTab(tab: string) {
   this.selectedTab = tab;
 }
}
