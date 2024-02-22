/* user.entity.ts */
/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'employees' })
export class EmployeeEntity {


    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    Nid_id : number;

    @Column({ unique: true })
    phone_number: number;

    @Column({ unique: true })
    email: string;

    @Column({  })
    Address : string;

    @Column({ })
    picture: string;

    @Column({  })
    Age : number;

    @Column()
    Birth_of_date: string;

    @Column()
    Gender: string;

    @Column()
    Nationality: string;

    @Column()
    Marital_status: string;

    @Column()
    password: string;



    @Column()
    Employee_position : string;



    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

}
