import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookFragmentFragment, GetBooksGQL } from '../services/myproject.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-graphql-apollo';

  books:BookFragmentFragment[] = [];

  constructor(private getBooksGQL : GetBooksGQL) {
    this.getBooks();
  }

  getBooks(){
    this.getBooksGQL.fetch().subscribe(res => {
      this.books.length = 0;
      this.books = (res.data.books ?? []) as BookFragmentFragment[];
    })
  }
}
