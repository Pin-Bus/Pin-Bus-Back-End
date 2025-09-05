import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Bus } from "./Bus";
import { User } from "./User";

@Entity("monitors")
export class Monitor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  phone!: string;

  @OneToOne(() => Bus, (bus) => bus.monitor)
  bus!: Bus;

  @OneToOne(() => User, (user) => user.monitor)
  user!: User;
}
