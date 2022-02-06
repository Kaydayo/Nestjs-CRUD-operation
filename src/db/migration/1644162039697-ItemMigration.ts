import {MigrationInterface, QueryRunner} from "typeorm";

export class ItemMigration1644162039697 implements MigrationInterface {
    name = 'ItemMigration1644162039697'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "each_item" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "quantity" integer NOT NULL, "price" integer NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "each_item"`);
    }

}
