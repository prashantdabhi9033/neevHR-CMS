import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Demo form (SEO spec §26): wider company-size options and three new
// optional lead fields. ADD VALUE is idempotent with IF NOT EXISTS.
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_leads_size" ADD VALUE IF NOT EXISTS 'Under 100' BEFORE '500 - 1,000';
  ALTER TYPE "public"."enum_leads_size" ADD VALUE IF NOT EXISTS '100 - 500' BEFORE '500 - 1,000';
  ALTER TYPE "public"."enum_leads_size" ADD VALUE IF NOT EXISTS '5,000+' BEFORE 'Other';
  ALTER TABLE "leads" ADD COLUMN IF NOT EXISTS "current_hrms" varchar;
  ALTER TABLE "leads" ADD COLUMN IF NOT EXISTS "requirement" varchar;
  ALTER TABLE "leads" ADD COLUMN IF NOT EXISTS "preferred_date" varchar;`)
}

// Postgres cannot drop enum values; the down migration removes the columns only.
export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "leads" DROP COLUMN IF EXISTS "current_hrms";
  ALTER TABLE "leads" DROP COLUMN IF EXISTS "requirement";
  ALTER TABLE "leads" DROP COLUMN IF EXISTS "preferred_date";`)
}
