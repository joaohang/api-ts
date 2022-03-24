import { PostRepository } from "../../repositories/implementations/PostRepository";
import { FindPostUseCase } from "./FindPostUseCase";
import { FindPostController } from "./FindPostController";

const postRepository = new PostRepository();

const findPostUseCase = new FindPostUseCase(
  postRepository
);

const findPostController = new FindPostController(
  findPostUseCase
);

export { findPostUseCase, findPostController }
