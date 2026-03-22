import mysql from 'mysql2/promise'

function parseDbUrl(url: string) {
  const u = new URL(url)
  return {
    host: u.hostname,
    port: u.port ? parseInt(u.port) : 3306,
    user: decodeURIComponent(u.username),
    password: decodeURIComponent(u.password),
    database: u.pathname.slice(1),
  }
}

const globalForPool = globalThis as unknown as { dbPool: mysql.Pool }

if (!globalForPool.dbPool) {
  globalForPool.dbPool = mysql.createPool({
    ...parseDbUrl(process.env.DATABASE_URL!),
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
    timezone: '+00:00',
  })
}

export const pool = globalForPool.dbPool
export default pool
