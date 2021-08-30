import {makeObservable, observable, runInAction} from "mobx"
import {
  MemesService,
  memesServiceSingleton,
} from "@features/discoverer/services/memes/memes.service"
import {MemeResponse} from "@features/discoverer/services/memes/memes.types"

export class MemesStore {
  @observable
  memes: MemeResponse[] | [] = []

  likedMemes: number[] | [] = []

  dislikedMemes: number[] | [] = []

  constructor(private readonly memesService: MemesService = memesServiceSingleton) {
    makeObservable(this)
  }

  async requestNewMemes(): Promise<void> {
    const newTenMemes = await this.memesService.next()
    runInAction(() => {
      this.memes = newTenMemes.memes
    })
  }

  addMemeToLikedCategory(id: number) {
    this.likedMemes.push(id)
  }

  addMemeToDislikedCategory(id: number) {
    this.dislikedMemes.push(id)
  }

  cleanAllCategories() {
    this.likedMemes = []
    this.dislikedMemes = []
  }
}

export const memesStoreSingleton = new MemesStore()
