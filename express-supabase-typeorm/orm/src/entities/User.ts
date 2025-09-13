import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Parent } from "./Parent";
import { Monitor } from "./Monitor";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ type: "enum", enum: ["parent", "monitor"] })
  role!: "parent" | "monitor";

  @OneToOne(() => Parent, (parent) => parent.user, { nullable: false, cascade: true })
  @JoinColumn()
  parent!: Parent;

  @OneToOne(() => Monitor, (monitor) => monitor.user, { nullable: true })
  @JoinColumn()
  monitor!: Monitor;
}
