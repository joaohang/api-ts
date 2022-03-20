import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";


export class CreatePostController {

  constructor(
    private createPostUseCase: CreatePostUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { title, content } = request.body;
    try {
      await this.createPostUseCase.execute({
        title,
        content
      });

      return response.status(201).send();

    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}