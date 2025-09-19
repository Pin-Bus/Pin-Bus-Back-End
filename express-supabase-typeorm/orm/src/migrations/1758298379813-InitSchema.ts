import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1758298379813 implements MigrationInterface {
    name = 'InitSchema1758298379813'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."trip_stops_status_enum" AS ENUM('pending', 'arriving', 'waiting', 'boarded', 'skipped')`);
        await queryRunner.query(`CREATE TABLE "trip_stops" ("id" SERIAL NOT NULL, "stop_order" integer NOT NULL, "current_lat" numeric(10,6), "current_long" numeric(10,6), "arrival_time" TIMESTAMP WITH TIME ZONE, "board_time" TIMESTAMP WITH TIME ZONE, "status" "public"."trip_stops_status_enum" NOT NULL DEFAULT 'pending', "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "trip_id" integer, "student_id" integer, CONSTRAINT "PK_876633f878970267cb0dc525984" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."trips_status_enum" AS ENUM('scheduled', 'in_progress', 'completed', 'cancelled')`);
        await queryRunner.query(`CREATE TABLE "trips" ("id" SERIAL NOT NULL, "status" "public"."trips_status_enum" NOT NULL DEFAULT 'scheduled', "scheduled_start_time" TIMESTAMP WITH TIME ZONE NOT NULL, "actual_start_time" TIMESTAMP WITH TIME ZONE, "completed_at" TIMESTAMP WITH TIME ZONE, "monitor_id" integer, "driver_id" integer, "bus_id" integer, CONSTRAINT "PK_f71c231dee9c05a9522f9e840f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "students" ADD "class" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "students" ADD "dateOfBirth" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "students" ADD "parentsNotes" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "parents" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "trip_stops" ADD CONSTRAINT "FK_5cb5ec6432abdf6f1e1c3a0970c" FOREIGN KEY ("trip_id") REFERENCES "trips"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "trip_stops" ADD CONSTRAINT "FK_56d25f3d7b41fed907ce29ce309" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "trips" ADD CONSTRAINT "FK_504eda73c7eabb0390770d2c649" FOREIGN KEY ("monitor_id") REFERENCES "monitors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "trips" ADD CONSTRAINT "FK_44d36110fb38f45c2f15c946ddb" FOREIGN KEY ("driver_id") REFERENCES "drivers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "trips" ADD CONSTRAINT "FK_de94f3218372c5bdfe1638c07c3" FOREIGN KEY ("bus_id") REFERENCES "buses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "trips" DROP CONSTRAINT "FK_de94f3218372c5bdfe1638c07c3"`);
        await queryRunner.query(`ALTER TABLE "trips" DROP CONSTRAINT "FK_44d36110fb38f45c2f15c946ddb"`);
        await queryRunner.query(`ALTER TABLE "trips" DROP CONSTRAINT "FK_504eda73c7eabb0390770d2c649"`);
        await queryRunner.query(`ALTER TABLE "trip_stops" DROP CONSTRAINT "FK_56d25f3d7b41fed907ce29ce309"`);
        await queryRunner.query(`ALTER TABLE "trip_stops" DROP CONSTRAINT "FK_5cb5ec6432abdf6f1e1c3a0970c"`);
        await queryRunner.query(`ALTER TABLE "parents" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "parentsNotes"`);
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "dateOfBirth"`);
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "class"`);
        await queryRunner.query(`DROP TABLE "trips"`);
        await queryRunner.query(`DROP TYPE "public"."trips_status_enum"`);
        await queryRunner.query(`DROP TABLE "trip_stops"`);
        await queryRunner.query(`DROP TYPE "public"."trip_stops_status_enum"`);
    }

}
