import {backendServiceSingleton, HttpService} from "@features/common/services/http/http.service"
import {MemesResponse, RateRequest} from "@features/discoverer/services/memes/memes.types"

export class MemesService {
  constructor(private readonly httpService: HttpService = backendServiceSingleton) {}

  async next(): Promise<MemesResponse> {
    const response = await this.httpService.get<MemesResponse>("/memes/next")
    return response.data
  }

  async rate(payload: RateRequest) {
    const response = await this.httpService.post("/memes/rate", payload)
    return response
  }
}

export const memesServiceSingleton = new MemesService()
