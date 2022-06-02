import {Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt, ForeignKey, DataType} from 'sequelize-typescript';

@Table
export class FeedItem extends Model {
  @Column({ type: DataType.STRING })
  public caption: string;

  @Column({ type: DataType.STRING })
  public url: string;

  @Column({ type: DataType.DATE })
  @CreatedAt
  public createdAt: Date = new Date();

  @Column({ type: DataType.DATE })
  @UpdatedAt
  public updatedAt: Date = new Date();
}