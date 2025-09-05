import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Bus } from "./Bus";

@Entity("drivers")
export class Driver {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  licenseNumber!: string;

  @Column()
  phone!: string;

  @OneToOne(() => Bus, (bus) => bus.driver)
  bus!: Bus;
}
