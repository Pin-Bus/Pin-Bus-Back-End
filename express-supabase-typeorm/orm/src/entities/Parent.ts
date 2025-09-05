import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from "typeorm";
import { Student } from "./Student";
import { User } from "./User";

@Entity("parents")
export class Parent {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  phone!: string;

  @Column()
  type!: "mother" | "father"; // differentiate role

  @Column()
  address!: string;

  @Column("decimal", { precision: 10, scale: 6, nullable: true })
  latitude!: number;

  @Column("decimal", { precision: 10, scale: 6, nullable: true })
  longitude!: number;

  @OneToMany(() => Student, (student) => student.mother)
  childrenAsMother!: Student[];

  @OneToMany(() => Student, (student) => student.father)
  childrenAsFather!: Student[];

  @OneToOne(() => User, (user) => user.parent)
  user!: User;
}
