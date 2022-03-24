import { IPostRepository } from "../../repositories/IPostRepository";
import { IFindPostDTO } from "./FindPostDTO";
import { Post } from "../../entities/Post";

export class FindPostUseCase {

  constructor(
    private postRepository: IPostRepository
  ) { }

  async execute(data: IFindPostDTO) {
    const post = await this.postRepository.findById(data.id);
    if (!post) {
      throw new Error('Not exists post with this id');
    }

    return new Post(post, data.id);

  }
}
