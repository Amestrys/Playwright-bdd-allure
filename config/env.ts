import dotenv from 'dotenv';
import path from 'path';

// Charge le fichier .env selon la variable ENV (défaut: local)
const envName = process.env['ENV'] || 'local';
dotenv.config({ path: path.resolve(__dirname, `../env/.env.${envName}`) });

export const ENV = (process.env['ENV'] ?? 'local') as string; // Par défaut local
export const BASE_URL = process.env['BASE_URL'] as string;
export const USER_NAME = process.env['USER_NAME'] as string;
export const PASSWORD = process.env['PASSWORD'] as string;
