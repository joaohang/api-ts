import { IPostRepository } from "../../repositories/IPostRepository";

export class FindAllPostsUseCase {

  constructor(
    private postRepository: IPostRepository
  ) { }

  async execute() {

    const posts = await this.postRepository.findAll();
    return posts;

  }

}
