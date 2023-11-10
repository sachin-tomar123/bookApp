import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Book } from './Book.dto'; // Assuming 'Book' is your entity, not DTO

@Injectable()
export class BookService {
  constructor(
    // @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async addBook(data: any) {
    const newBook = this.bookRepository.create(data);
    return this.bookRepository.save(newBook);
  }
}
