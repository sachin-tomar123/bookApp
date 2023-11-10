import { Module } from '@nestjs/common';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Module({})  
@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null, nullable: true })
  title: string;

  @Column({ default: null, nullable: true })
  isbn: string;

  @Column({ default: 'active', nullable: true })
  status: string;
}
