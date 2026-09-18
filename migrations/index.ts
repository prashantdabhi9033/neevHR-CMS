import * as migration_20260918_164819_initial from './20260918_164819_initial';

export const migrations = [
  {
    up: migration_20260918_164819_initial.up,
    down: migration_20260918_164819_initial.down,
    name: '20260918_164819_initial'
  },
];
