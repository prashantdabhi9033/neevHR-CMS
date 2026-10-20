import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// The Leads "intent" field (demo / quote, added 19 Sep 2026) shipped without a migration, so on the
// server every demo / quote submission failed with a missing "intent" column. Idempotent: safe where
// the column already exists (e.g. a dev database that auto-pushed the schema).
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DO $$ BEGIN
    CREATE TYPE "public"."enum_leads_intent" AS ENUM('demo', 'quote');
  EXCEPTION WHEN duplicate_object THEN NULL; END $$;
  ALTER TABLE "leads" ADD COLUMN IF NOT EXISTS "intent" "enum_leads_intent" DEFAULT 'demo';`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "leads" DROP COLUMN IF EXISTS "intent";
  DROP TYPE IF EXISTS "public"."enum_leads_intent";`)
}
