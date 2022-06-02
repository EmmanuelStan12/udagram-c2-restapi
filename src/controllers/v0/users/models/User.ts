import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from 'sequelize-typescript'

@Table
export class User extends Model {
    @Column({ type: DataType.DATE })
    public email: string;

    @Column({ type: DataType.STRING })
    public password_hash: string;

    @Column({ type: DataType.DATE })
    @CreatedAt
    public createdAt: Date = new Date();

    @Column({ type: DataType.DATE })
    @UpdatedAt
    public updatedAt: Date = new Date();

    short() {
        return {
            email: this.email
        }
    }
}