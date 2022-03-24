import { PostRepository } from "../../repositories/implementations/PostRepository";
import { FindAllPostsUseCase } from "./FindAllPostsUseCase";
import { FindAllPostsController } from "./FindAllPostsController";

const postRepository = new PostRepository();

const findAllPostsUseCase = new FindAllPostsUseCase(
  postRepository
);

const findAllPostsController = new FindAllPostsController(
  findAllPostsUseCase
);

export { findAllPostsUseCase, findAllPostsController }
