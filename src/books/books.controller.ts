import { Body, Controller, Get, Param, Post, Put , Delete} from '@nestjs/common';
import { BookService } from './book.service';
// import { Book } from './Book.dto';
import { CreateBookDto } from './dto/create-book.dto'

@Controller('books')
export class BooksController {
  constructor(private readonly BookServices: BookService) {}
  @Post()
  async addBooks(@Body() book: CreateBookDto) {
    
    return this.BookServices.addBook(book);
  }
  @Delete(':id')
  async deleteBooks(@Param('id') id: number) {
    return this.BookServices.deleteBooks(id);
  }

  @Get()
  async getBooks() {
    return this.BookServices.getBooks();
  }

  @Get(':id')
  async getBooksById(@Param('id') id: number) {
    return this.BookServices.getBooksById(id);
  }

  @Put(':id')
  async updateBooksById(@Param('id')  id: number, @Body() book: CreateBookDto) {
    return this.BookServices.updateBooksById(id, book);
  }

  // async findAllBooks() {
  //     return this.BooksService.addBooks()
  // }
}
