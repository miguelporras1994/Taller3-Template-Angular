import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() book:{
    _id: '',
    cover: '',
    name: '',
    unitValue: 0,
    description: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
