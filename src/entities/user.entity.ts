/* user.entity.ts */
/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class UserEntity {

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

    @Column({ })
    picture: string;
    
    @Column({  })
    Address : string;

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
    Room_number: string;

    @Column()
    Token_no: string;

    @Column({ unique: true })
    Credit_card_no: string;

    @Column()
    Floor_no: string;

    @Column()
    Member_status: string;

    @Column()
    Check_in_date : Date;

    @Column()
    Check_out_date: Date;

    @Column()
    Room_status : string;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

}

