import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chase',
  templateUrl: './chase.component.html',
  styleUrl: './chase.component.css'
})
export class ChaseComponent {
  @Input () name: string
  @Input() chase : string;
  @Input() NBA : string;
  @Input() curBal : string;
}
