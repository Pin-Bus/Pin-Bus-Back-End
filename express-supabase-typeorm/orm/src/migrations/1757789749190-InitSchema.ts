import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1757789749190 implements MigrationInterface {
    name = 'InitSchema1757789749190'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "monitors" ADD "user_id" integer`);
        await queryRunner.query(`ALTER TABLE "monitors" ADD CONSTRAINT "UQ_e14d6e8ea5eb39ace280a3b7c23" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_8110309ac51ed55a91d28625b88"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "parentId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_8110309ac51ed55a91d28625b88" FOREIGN KEY ("parentId") REFERENCES "parents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "monitors" ADD CONSTRAINT "FK_e14d6e8ea5eb39ace280a3b7c23" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "monitors" DROP CONSTRAINT "FK_e14d6e8ea5eb39ace280a3b7c23"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_8110309ac51ed55a91d28625b88"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "parentId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_8110309ac51ed55a91d28625b88" FOREIGN KEY ("parentId") REFERENCES "parents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "monitors" DROP CONSTRAINT "UQ_e14d6e8ea5eb39ace280a3b7c23"`);
        await queryRunner.query(`ALTER TABLE "monitors" DROP COLUMN "user_id"`);
    }

}
