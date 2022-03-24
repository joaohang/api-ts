import { Request, Response } from "express";
import { FindAllPostsUseCase } from "./FindAllPostsUseCase";

export class FindAllPostsController {

  constructor(
    private findAllPostsUseCase: FindAllPostsUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {

    try {
      const allPosts = await this.findAllPostsUseCase.execute();
      return response.status(201).json(allPosts);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }

}
