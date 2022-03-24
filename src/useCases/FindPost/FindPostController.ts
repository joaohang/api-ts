import { Request, Response } from "express";
import { FindPostUseCase } from "./FindPostUseCase";

export class FindPostController {

  constructor(
    private findPostUseCase: FindPostUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    try {
      const post = await this.findPostUseCase.execute({ id });
      return response.status(201).json(post);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}
