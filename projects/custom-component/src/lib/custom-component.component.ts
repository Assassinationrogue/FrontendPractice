import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-custom-component',
  template: `
    <p>
      custom-component works!
    </p>
  `,
  styles: [
  ]
})
export class CustomComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
