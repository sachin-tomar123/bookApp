
import { Module } from '@nestjs/common';
import {  Column, } from 'typeorm';

@Module({})
export class Book {
    id: number;

    @Column()
    name: string;

    @Column()
    isbn: string;

    @Column()
    status: string;

}
