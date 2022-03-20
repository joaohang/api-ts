import { Post } from "../../entities/Post";
import { IPostRepository } from "../IPostRepository";

export class PostRepository implements IPostRepository {

  private posts: Post[] = [];

  async findAll(): Promise<Post[]> {
    return this.posts;
  }

  async findById(id: string): Promise<Post> {
    return this.posts.filter(post => post.id == id)[0];
  }

  async findByTitle(title: string): Promise<Post> {
    return this.posts.filter(post => post.title == title)[0];
  }

  async save(post: Post): Promise<void> {
    this.posts.push(post);
  }
  //Como fazer isso ? Ele recebe post ou id e outras variaveis
  // fazer um IPostUpdate
  async update(post: Post): Promise<void> {

  }
  async deleteById(id: string): Promise<void> {
    this.posts.filter(post => post.id != id)[0];
  }

}