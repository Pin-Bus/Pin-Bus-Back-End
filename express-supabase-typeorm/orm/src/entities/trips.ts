import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Monitor } from "./Monitor";
import { Driver } from "./Driver";
import { Bus } from "./Bus";
import { TripStop } from "./tripStop";

@Entity("trips")
export class Trip {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Monitor)
  @JoinColumn({ name: "monitor_id" })
  monitor!: Monitor;

  @ManyToOne(() => Driver)
  @JoinColumn({ name: "driver_id" })
  driver!: Driver;

  @ManyToOne(() => Bus)
  @JoinColumn({ name: "bus_id" })
  bus!: Bus;

  @Column({ type: "enum", enum: ["scheduled", "in_progress", "completed", "cancelled"], default: "scheduled" })
  status!: "scheduled" | "in_progress" | "completed" | "cancelled";

  @Column({ type: "timestamptz" })
  scheduled_start_time!: Date;

  @Column({ type: "timestamptz", nullable: true })
  actual_start_time!: Date;

  @Column({ type: "timestamptz", nullable: true })
  completed_at!: Date;

  @OneToMany(() => TripStop, (stop) => stop.trip, { cascade: true })
  stops!: TripStop[];
}
