import {backendServiceSingleton, HttpService} from "@features/common/services/http/http.service"
import {
  MemesResponse,
  RateRequest,
  NextQueryParams,
} from "@features/discoverer/services/memes/memes.types"

export class MemesService {
  constructor(private readonly httpService: HttpService = backendServiceSingleton) {}

  async next(payload: NextQueryParams): Promise<MemesResponse> {
    const {totalCount, offset} = payload

    const response = await this.httpService.get<MemesResponse>(
      `/memes/next?total=${totalCount}&offset=${offset}`,
    )
    return response.data
  }

  async rate(payload: RateRequest) {
    const response = await this.httpService.post("/memes/rate", payload)
    return response
  }
}

export const memesServiceSingleton = new MemesService()
