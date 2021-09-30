import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public data: any;
  constructor() {}

  ngOnInit(): void {
    this.NewCardStatus = false;
    this.ReviewCardStatus = false;
    // this.getDataGroup();
  }

  public AddFrom: any = {};
  public RiviewFrom: any = {};
  public BookData: any;
  public DataReview: any = [];
  public curentStar: any;
  public ReviewCardStatus: boolean;
  public NewCardStatus: boolean;
  public MovieList: any = [
    { Name: 'Harry Potter', Year: '2010' },
    { Name: 'The Hungger Games', Year: '2012' },
  ];
  Add() {
    this.MovieList.push(this.AddFrom);
    console.log('data post', this.MovieList);
    alert('buku Berhasil di Buat');
  }
  AddRiview() {
    console.log('data post star', this.curentStar);

    console.log('data post', this.RiviewFrom);
    this.DataReview.push(this.RiviewFrom);
    console.log('database', this.DataReview);
    alert('Review Berhasil di Buat');
    this.ReviewCardStatus = true;
  }
  DetailCard(data: any) {
    this.BookData = data.Name;
    this.NewCardStatus = true;
  }
}
