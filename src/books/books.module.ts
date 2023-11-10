import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './Book.dto'; // Assuming 'Book' is your entity, not DTO


// @Module({
//   providers: [BookService],
//   controllers: [BooksController],
//   exports: [BookService],
// })
@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BooksController],
  providers: [BookService],
})
export class BooksModule {

}
