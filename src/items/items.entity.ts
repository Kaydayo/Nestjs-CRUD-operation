import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EachItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column()
  price: number;
}
