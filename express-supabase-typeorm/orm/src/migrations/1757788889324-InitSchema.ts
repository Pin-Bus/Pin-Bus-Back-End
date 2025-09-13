import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1757788889324 implements MigrationInterface {
    name = 'InitSchema1757788889324'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parents" ADD "user_id" integer`);
        await queryRunner.query(`ALTER TABLE "parents" ADD CONSTRAINT "UQ_c94c3cea9b43a18c81269ded41d" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "parents" ADD CONSTRAINT "FK_c94c3cea9b43a18c81269ded41d" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parents" DROP CONSTRAINT "FK_c94c3cea9b43a18c81269ded41d"`);
        await queryRunner.query(`ALTER TABLE "parents" DROP CONSTRAINT "UQ_c94c3cea9b43a18c81269ded41d"`);
        await queryRunner.query(`ALTER TABLE "parents" DROP COLUMN "user_id"`);
    }

}
