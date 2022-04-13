import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1649837480210 implements MigrationInterface {
    name = 'migration1649837480210'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "email" character varying NOT NULL,
                "name" character varying NOT NULL,
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "reservation" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "userId" uuid,
                "timeslotId" uuid,
                CONSTRAINT "REL_d72875813eaeb20134be293388" UNIQUE ("timeslotId"),
                CONSTRAINT "PK_48b1f9922368359ab88e8bfa525" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "time_slot" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "startTime" date NOT NULL,
                "endTime" date NOT NULL,
                "isReserved" boolean NOT NULL,
                "spaceId" uuid,
                "reservationId" uuid,
                CONSTRAINT "REL_c5fdb94287f402eda7aef081a9" UNIQUE ("reservationId"),
                CONSTRAINT "PK_03f782f8c4af029253f6ad5bacf" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "space" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "identifier" character varying NOT NULL,
                CONSTRAINT "PK_094f5ec727fe052956a11623640" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "entry" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "text" character varying NOT NULL,
                CONSTRAINT "PK_a58c675c4c129a8e0f63d3676d6" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "reservation"
            ADD CONSTRAINT "FK_529dceb01ef681127fef04d755d" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "reservation"
            ADD CONSTRAINT "FK_d72875813eaeb20134be2933889" FOREIGN KEY ("timeslotId") REFERENCES "time_slot"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "time_slot"
            ADD CONSTRAINT "FK_be9c159547cba7dac6c89bd2e5c" FOREIGN KEY ("spaceId") REFERENCES "space"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "time_slot"
            ADD CONSTRAINT "FK_c5fdb94287f402eda7aef081a94" FOREIGN KEY ("reservationId") REFERENCES "reservation"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "time_slot" DROP CONSTRAINT "FK_c5fdb94287f402eda7aef081a94"
        `);
        await queryRunner.query(`
            ALTER TABLE "time_slot" DROP CONSTRAINT "FK_be9c159547cba7dac6c89bd2e5c"
        `);
        await queryRunner.query(`
            ALTER TABLE "reservation" DROP CONSTRAINT "FK_d72875813eaeb20134be2933889"
        `);
        await queryRunner.query(`
            ALTER TABLE "reservation" DROP CONSTRAINT "FK_529dceb01ef681127fef04d755d"
        `);
        await queryRunner.query(`
            DROP TABLE "entry"
        `);
        await queryRunner.query(`
            DROP TABLE "space"
        `);
        await queryRunner.query(`
            DROP TABLE "time_slot"
        `);
        await queryRunner.query(`
            DROP TABLE "reservation"
        `);
        await queryRunner.query(`
            DROP TABLE "user"
        `);
    }

}
