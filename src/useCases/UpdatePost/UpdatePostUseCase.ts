import { IPostRepository } from "../../repositories/IPostRepository";
import { IUpdatePostDTO } from "./UpdatePostDTO";
import { UpdatePost } from "../../entities/UpdatePost";

export class UpdatePostUseCase {

  constructor(
    private postRepository: IPostRepository
  ) { }

  async execute(data: IUpdatePostDTO) {

    const postAlreadyExist = await this.postRepository.findById(data.id);

    if (!postAlreadyExist) {
      throw new Error('This post not exists.');
    }

    const updatePost = new UpdatePost(data.id, data);
    await this.postRepository.update(updatePost);
  }

}
