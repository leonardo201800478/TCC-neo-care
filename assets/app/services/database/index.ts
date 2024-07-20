// app/services/database/index.ts
import { Database, SQLError, SQLResultSet } from 'expo-sqlite'
import { QueryResponse, TableName } from './types'

const database = new Database('postgres.db')

const databaseService = {
  executeQuery: async <T>(query: string): Promise<QueryResponse<T>> => {
    try {
      const result = await database.executeSqlAsync(query)
      return { data: result.rows._array as T[], error: null }
    } catch (error) {
      return { data: [], error: error as SQLError }
    }
  },
  insert: async (tableName: TableName, data: any): Promise<SQLResultSet> => {
    const columns = Object.keys(data).join(', ')
    const values = Object.values(data).map((v) => `'${v}'`).join(', ')
    const query = `INSERT INTO ${tableName} (${columns}) VALUES (${values})`
    return await database.executeSqlAsync(query)
  },
  // Adicione outros métodos de banco de dados aqui
}

export default databaseService