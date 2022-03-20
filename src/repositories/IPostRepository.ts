import { Post } from "../entities/Post";

export interface IPostRepository {
  findAll(): Promise<Post[]>;
  findById(id: string): Promise<Post>;
  findByTitle(title: string): Promise<Post>;
  save(post: Post): Promise<void>;
  //Como fazer isso ? Ele recebe post ou id e outras variaveis
  update(post: Post): Promise<void>;
  deleteById(id: string): Promise<void>;
}