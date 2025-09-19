import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Bus } from "./Bus";
import { Parent } from "./Parent";

@Entity("students")
export class Student {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  grade!: string;
  
  @Column()
  class!:string;
  
  @Column()
  dateOfBirth!: Date;

  @Column()
  parentsNotes : string;
  
  @Column()
  address!: string;

  @Column("decimal", { precision: 10, scale: 6, nullable: true })
  latitude!: number;

  @Column("decimal", { precision: 10, scale: 6, nullable: true })
  longitude!: number;

  @ManyToOne(() => Bus, (bus) => bus.students)
  @JoinColumn({ name: "bus_id" })
  bus!: Bus;

  @ManyToOne(() => Parent, (parent) => parent.childrenAsMother)
  @JoinColumn({ name: "mother_id" })
  mother!: Parent;

  @ManyToOne(() => Parent, (parent) => parent.childrenAsFather)
  @JoinColumn({ name: "father_id" })
  father!: Parent;
}
