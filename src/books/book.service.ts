import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository, Not } from 'typeorm';
import { Book } from './Book.dto'; // Assuming 'Book' is your entity, not DTO

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async addBook(data: any) {
    const newBook = this.bookRepository.create(data);
    return this.bookRepository.save(newBook);
  }

  async deleteBooks(id: any) {
    const book = await this.bookRepository.findOne({ where: { id: id } });
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    book.status = 'deleted';
    return this.bookRepository.save(book);
  }

  async getBooks() {
    return this.bookRepository.find({ where: { status: Not('deleted') } });
  }

  async getBooksById(id: any) {
    const book = await this.bookRepository.findOne({ where: { id: id } });
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  async updateBooksById(id: any, data) {
    const book = await this.bookRepository.findOne({ where: { id: id } });
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    if (data?.title) {
      book.title = data.title;
      this.bookRepository.save(book);
    }
    return {
      message: 'updated successfully',
      status: '200',
    };
  }
}
