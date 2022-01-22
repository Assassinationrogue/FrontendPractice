import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sb-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  @Input() set age(player: Object) {}
  constructor() {}

  ngOnInit(): void {}

  disableState(){
    console.log("Was called on hover")
  }
}
