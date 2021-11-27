import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  getConnection,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import Url from './Url'

@Entity({ name: 'visits' })
export default class Visit extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  public id!: number;

  @ManyToOne((type) => Url)
  public url!: Url;

  @Column({ nullable: true })
  public referrer!: string;

  @Column({ length: '15' })
  public ip!: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date = new Date();

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date = new Date();
}

export const getVisitRepository = () =>
  getConnection().getRepository<Visit>(Visit)
