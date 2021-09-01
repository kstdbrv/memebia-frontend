import {makeObservable, observable, runInAction} from "mobx"
import {
  MemesService,
  memesServiceSingleton,
} from "@features/discoverer/services/memes/memes.service"
import {MemeResponse} from "@features/discoverer/services/memes/memes.types"

export class MemesStore {
  @observable
  memes: MemeResponse[] = []

  isNewMemesUploaded = false

  private likedMemes: string[] = []

  private dislikedMemes: string[] = []

  constructor(private readonly memesService: MemesService = memesServiceSingleton) {
    makeObservable(this)
  }

  async requestNewMemes(): Promise<void> {
    this.isNewMemesUploaded = false
    const newTenMemes = await this.memesService.next()

    runInAction(() => {
      this.memes = newTenMemes.memes
      this.isNewMemesUploaded = true
    })
  }

  submitRatedMemes = async (): Promise<void> => {
    await this.memesService.rate({
      likedMemes: this.likedMemes,
      dislikedMemes: this.dislikedMemes,
    })

    this.cleanAllCategories()
  }

  addMemeToLikedCategory = (id: string): void => {
    this.likedMemes.push(id)
  }

  addMemeToDislikedCategory = (id: string): void => {
    this.dislikedMemes.push(id)
  }

  private cleanAllCategories = (): void => {
    this.likedMemes = []
    this.dislikedMemes = []
  }
}

export const memesStoreSingleton = new MemesStore()
