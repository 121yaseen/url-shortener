import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  getConnection,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity({ name: 'users' })
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer' })
  public id!: number;

  @Column({ nullable: false, unique: true, length: 50 })
  public username!: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date = new Date();

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date = new Date();

  // Temporary implementation of unique token
  // Later will be replaced by google OAuth2
  @Column({ generated: 'uuid' })
  public token!: string;
}

export const getUserRepository = () =>
  getConnection().getRepository<User>(User)
