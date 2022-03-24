import { IPostRepository } from "../../repositories/IPostRepository";
import { ICreatePostRequestDTO } from "./CreatePostDTO";
import { Post } from "../../entities/Post";

export class CreatePostUseCase {

  constructor(
    private postRepository: IPostRepository,
  ) { }

  async execute(data: ICreatePostRequestDTO) {

    const postTitleAlreadyExist = await this.postRepository.findByTitle(data.title);
    if (postTitleAlreadyExist) {
      throw new Error('Already exists a post with title');
    }

    const post = new Post(data);
    await this.postRepository.save(post);

  }

}