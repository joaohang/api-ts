import { Request, Response } from "express";
import { UpdatePostUseCase } from "./UpdatePostUseCase";

export class UpdatePostController {

  constructor(
    private updatePostUseCase: UpdatePostUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title, content } = request.body;

    try {
      await this.updatePostUseCase.execute({
        id,
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
