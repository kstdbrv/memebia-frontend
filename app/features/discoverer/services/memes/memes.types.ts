interface MemeResponse {
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
  memes?: Array<MemeResponse>
}
