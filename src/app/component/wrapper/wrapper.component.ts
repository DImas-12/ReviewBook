import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-item-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {
  @Input() public title: any;
  @Input() public title2: any;
  constructor() {}

  ngOnInit() {}
}
