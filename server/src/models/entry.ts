import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Entry {

  @PrimaryGeneratedColumn('uuid')
    id: number;

  @Column()
    text: string;
}