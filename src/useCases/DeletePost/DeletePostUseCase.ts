import { IPostRepository } from "../../repositories/IPostRepository";
import { IDeletePostDTO } from "./DeletePostDTO";
import { Post } from "../../entities/Post";

export class DeletePostUseCase {

  constructor(
    private postRepository: IPostRepository
  ) { }

  async execute(data: IDeletePostDTO) {
    await this.postRepository.deleteById(data.id);
  }

}
