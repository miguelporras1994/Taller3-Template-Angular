import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  @Input() book: {
    _id: '',
    cover: '',
    name: '',
    unitValue: 0,
    description: ''
  };

  id: any; 

  constructor(private bookId: ActivatedRoute, private bookService: BooksService) { }

  ngOnInit(): void {
    //Obtenemos el ID del libro que nos enviaron, y procedemos a consultar su info de la base de datos.
    this.bookId.queryParams.subscribe(
      () => {
        this.id = this.bookId.snapshot.params.id;
      }, (error) => {
        console.error('Error getting books: ', error)
      }
    )

    //Hacemos consulta a base de datos para obtener el libro seleccionado
    this.bookService.getByID(this.id)
      .subscribe((book: any) => {
        this.book = book
      }, (error) => {
        console.error('Error getting books: ', error)
      })
  }

}
