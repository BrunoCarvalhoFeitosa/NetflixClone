import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUsers1604099623155 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'email',
          type: 'varchar',
        },
        {
          name: 'password',
          type: 'varchar',
        },
        {
          name: 'cpf',
          type: 'varchar',
        },
        {
          name: 'postal_code',
          type: 'varchar',
        },
        {
          name: 'neighborhood',
          type: 'varchar',
        },
        {
          name: 'street',
          type: 'varchar',
        },
      ],
    }))
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
