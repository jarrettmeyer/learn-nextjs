import { Client, QueryResultRow } from "pg";

export class DatabaseAdapter {
  private client: Client;
  private isConnected = false;

  constructor() {
    this.client = new Client({
      user: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD,
      host: process.env.PG_HOST,
      port: +(process.env.PG_PORT ?? 5432),
      database: process.env.PG_DATABASE,
    });
  }

  async connect(): Promise<void> {
    if (this.isConnected) {
      return;
    }
    return this.client.connect();
  }

  async disconnect(): Promise<void> {
    if (!this.isConnected) {
      return;
    }
    return this.client.end();
  }

  async query<T extends QueryResultRow>(text: string, values?: any[] | undefined): Promise<T[]> {
    if (!this.isConnected) {
      await this.connect();
    }
    console.log(`sending database query:`, { text, values });
    const result = await this.client.query<T>(text, values);
    return result.rows;
  }
}
