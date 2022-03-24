import { PostRepository } from "../../repositories/implementations/PostRepository";
import { CreatePostUseCase } from "./CreatePostUseCase";
import { CreatePostController } from "./CreatePostController";

const postRepository = new PostRepository();

const createPostUseCase = new CreatePostUseCase(
  postRepository
);

const createPostController = new CreatePostController(
  createPostUseCase
);

export { createPostUseCase, createPostController }
