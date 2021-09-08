export interface MemeResponse {
  id: string
  createdAt: string
  updatedAt: string
  imageId: string
  text: string
  source: "TELEGRAM"
  sourceId: "channels/1307403887"
  imageUrl: string
}

export interface MemesResponse {
  memes: MemeResponse[]
}

export type NextQueryParams = {
  totalCount: number
  offset: number
}

export interface RateRequest {
  likedMemes: string[]
  dislikedMemes: string[]
}
