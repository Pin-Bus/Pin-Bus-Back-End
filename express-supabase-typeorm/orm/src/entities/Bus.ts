import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Driver } from "./Driver";
import { Monitor } from "./Monitor";
import { Student } from "./Student";

@Entity("buses")
export class Bus {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  plateNumber!: string;

  @Column()
  capacity!: number;

  @OneToOne(() => Driver, (driver) => driver.bus, { eager: true })
  @JoinColumn({ name: "driver_id" })
  driver!: Driver;

  @OneToOne(() => Monitor, (monitor) => monitor.bus, { eager: true })
  @JoinColumn({ name: "monitor_id" })
  monitor!: Monitor;

  @OneToMany(() => Student, (student) => student.bus)
  students!: Student[];
}
