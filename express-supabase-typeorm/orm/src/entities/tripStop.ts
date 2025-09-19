import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  ManyToOne, 
  JoinColumn 
} from "typeorm";
import { Trip } from "./trips";
import { Student } from "./Student";

@Entity("trip_stops")
export class TripStop {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Trip, (trip) => trip.stops, { onDelete: "CASCADE" })
  @JoinColumn({ name: "trip_id" })
  trip!: Trip;

  @ManyToOne(() => Student)
  @JoinColumn({ name: "student_id" })
  student!: Student;

  @Column()
  stop_order!: number;

  // Runtime data
  @Column("decimal", { precision: 10, scale: 6, nullable: true })
  current_lat!: number;

  @Column("decimal", { precision: 10, scale: 6, nullable: true })
  current_long!: number;

  @Column({ type: "timestamptz", nullable: true })
  arrival_time!: Date;

  @Column({ type: "timestamptz", nullable: true })
  board_time!: Date;

  @Column({ type: "enum", enum: ["pending", "arriving", "waiting", "boarded", "skipped"], default: "pending" })
  status!: "pending" | "arriving" | "waiting" | "boarded" | "skipped";

  @Column({ type: "timestamptz", default: () => "now()" })
  updated_at!: Date;
}
