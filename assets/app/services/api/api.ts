// app/services/api/api.ts
import { create } from 'apisauce'
import { ApiProblem, ApiResponse, ApiErrorType } from './apiProblem'

const api = create({
  baseURL: 'https://api.neocare.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

const apiService = {
  getData: async (): Promise<ApiResponse<any>> => {
    const response = await api.get('/data')
    return response
  },
  // Adicione outros métodos de API aqui
}

export default apiService