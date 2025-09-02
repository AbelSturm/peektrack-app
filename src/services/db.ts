import * as SQLite from 'expo-sqlite';
import { Ascent } from '../models/Ascent';

const DB_NAME = 'peektrack.db';

// Open the database
const db = SQLite.openDatabaseSync(DB_NAME);

/**
 * Initialize the database and create tables if they don't exist
 */
export const initDb = (): void => {
  try {
    db.execSync(`
      CREATE TABLE IF NOT EXISTS ascents (
        id TEXT PRIMARY KEY,
        peak_name TEXT NOT NULL,
        date_utc TEXT NOT NULL,
        lat REAL NOT NULL,
        lon REAL NOT NULL,
        notes TEXT
      );
    `);
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error creating ascents table:', error);
    throw error;
  }
};

/**
 * Insert a new ascent into the database
 */
export const insertAscent = (ascent: Ascent): void => {
  try {
    db.runSync(
      `INSERT INTO ascents (id, peak_name, date_utc, lat, lon, notes)
       VALUES (?, ?, ?, ?, ?, ?);`,
      [
        ascent.id,
        ascent.peakName,
        ascent.date,
        ascent.latitude,
        ascent.longitude,
        ascent.notes || null
      ]
    );
    console.log('Ascent inserted successfully');
  } catch (error) {
    console.error('Error inserting ascent:', error);
    throw error;
  }
};

/**
 * Get all ascents from the database
 */
export const getAscents = (): Ascent[] => {
  try {
    const result = db.getAllSync('SELECT * FROM ascents ORDER BY date_utc DESC;');
    const ascents: Ascent[] = result.map((row: any) => ({
      id: row.id,
      peakName: row.peak_name,
      date: row.date_utc,
      latitude: row.lat,
      longitude: row.lon,
      notes: row.notes
    }));
    console.log(`Retrieved ${ascents.length} ascents`);
    return ascents;
  } catch (error) {
    console.error('Error retrieving ascents:', error);
    throw error;
  }
};
