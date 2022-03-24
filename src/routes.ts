import { Router } from "express";
import { createPostController } from "./useCases/CreatePost";
import { findAllPostsController } from "./useCases/FindAllPosts";
import { findPostController } from "./useCases/FindPost";
import { deletePostController } from "./useCases/DeletePost";
import { updatePostController } from "./useCases/UpdatePost";

const router = Router()

router.post('/post', (request, response) => {
  return createPostController.handle(request, response);
});

router.put('/post/:id', (request, response) => {
  return updatePostController.handle(request, response);
});

router.get('/post', (request, response) => {
  return findAllPostsController.handle(request, response);
});

router.get('/post/:id', (request, response) => {
  return findPostController.handle(request, response);
});

router.delete('/post/:id', (request, response) => {
  return deletePostController.handle(request, response);
});

export { router }