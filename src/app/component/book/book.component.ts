import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'book-wrapper',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() public title: any;
  @Output() public DetailCard = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  BookDetail(data: any) {
    console.log('datanya', data);
    this.DetailCard.emit(data);
  }
}
