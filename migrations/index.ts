import * as migration_20260918_164819_initial from './20260918_164819_initial';
import * as migration_20260924_120000_lead_demo_fields from './20260924_120000_lead_demo_fields';

export const migrations = [
  {
    up: migration_20260918_164819_initial.up,
    down: migration_20260918_164819_initial.down,
    name: '20260918_164819_initial'
  },
  {
    up: migration_20260924_120000_lead_demo_fields.up,
    down: migration_20260924_120000_lead_demo_fields.down,
    name: '20260924_120000_lead_demo_fields'
  },
];
