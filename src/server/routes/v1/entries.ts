import { Entry } from './../../../Entries/models/entries.models';
import { defineEventHandler } from 'h3';

const entries: Entry[] = [
  { id: 1, name: 'entry1' },
  { id: 2, name: 'entry2' },
];

export default defineEventHandler(() => entries);
