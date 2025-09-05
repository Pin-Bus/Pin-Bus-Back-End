import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1757083657126 implements MigrationInterface {
    name = 'InitSchema1757083657126'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "drivers" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "licenseNumber" character varying NOT NULL, "phone" character varying NOT NULL, CONSTRAINT "PK_92ab3fb69e566d3eb0cae896047" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "monitors" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "phone" character varying NOT NULL, CONSTRAINT "PK_193902e2013887310490284cdbe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "buses" ("id" SERIAL NOT NULL, "plateNumber" character varying NOT NULL, "capacity" integer NOT NULL, "driver_id" integer, "monitor_id" integer, CONSTRAINT "REL_7a66b8ebba688cdbfb27b19ed3" UNIQUE ("driver_id"), CONSTRAINT "REL_4fdcc246e0c6cf9322ac53601d" UNIQUE ("monitor_id"), CONSTRAINT "PK_ddebc0eeba64a019ae072975947" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "students" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "grade" character varying NOT NULL, "address" character varying NOT NULL, "latitude" numeric(10,6), "longitude" numeric(10,6), "bus_id" integer, "mother_id" integer, "father_id" integer, CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "parents" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "phone" character varying NOT NULL, "type" character varying NOT NULL, "address" character varying NOT NULL, "latitude" numeric(10,6), "longitude" numeric(10,6), CONSTRAINT "PK_9a4dc67c7b8e6a9cb918938d353" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('parent', 'monitor')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" "public"."users_role_enum" NOT NULL, "parentId" integer, "monitorId" integer, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_8110309ac51ed55a91d28625b8" UNIQUE ("parentId"), CONSTRAINT "REL_8667ac43d10bb6b0194297a459" UNIQUE ("monitorId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "buses" ADD CONSTRAINT "FK_7a66b8ebba688cdbfb27b19ed36" FOREIGN KEY ("driver_id") REFERENCES "drivers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "buses" ADD CONSTRAINT "FK_4fdcc246e0c6cf9322ac53601d6" FOREIGN KEY ("monitor_id") REFERENCES "monitors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_286b7b251c5757c2d84d81d42de" FOREIGN KEY ("bus_id") REFERENCES "buses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_f5e991e1b7d8204ca2a81c8303b" FOREIGN KEY ("mother_id") REFERENCES "parents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_b9ca23fc9a39c1b4066ac2dbfbb" FOREIGN KEY ("father_id") REFERENCES "parents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_8110309ac51ed55a91d28625b88" FOREIGN KEY ("parentId") REFERENCES "parents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_8667ac43d10bb6b0194297a459d" FOREIGN KEY ("monitorId") REFERENCES "monitors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_8667ac43d10bb6b0194297a459d"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_8110309ac51ed55a91d28625b88"`);
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_b9ca23fc9a39c1b4066ac2dbfbb"`);
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_f5e991e1b7d8204ca2a81c8303b"`);
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_286b7b251c5757c2d84d81d42de"`);
        await queryRunner.query(`ALTER TABLE "buses" DROP CONSTRAINT "FK_4fdcc246e0c6cf9322ac53601d6"`);
        await queryRunner.query(`ALTER TABLE "buses" DROP CONSTRAINT "FK_7a66b8ebba688cdbfb27b19ed36"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
        await queryRunner.query(`DROP TABLE "parents"`);
        await queryRunner.query(`DROP TABLE "students"`);
        await queryRunner.query(`DROP TABLE "buses"`);
        await queryRunner.query(`DROP TABLE "monitors"`);
        await queryRunner.query(`DROP TABLE "drivers"`);
    }

}
