export interface MemeResponse {
  id: number
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

export interface RateRequest {
  likedMemes: number[]
  dislikedMemes: number[]
}
