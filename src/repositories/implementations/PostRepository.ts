import { Post } from "../../entities/Post";
import { UpdatePost } from "../../entities/UpdatePost";
import { IPostRepository } from "../IPostRepository";
import { database } from "../../external/Database";

export class PostRepository implements IPostRepository {

  async findAll(): Promise<Post[]> {
    const posts = await database.select('*').from('post');
    return posts;
  }

  async findById(id: string): Promise<any> {
    const post = await database.select('*').from('post').where({ id: id });
    return post.length > 0 ? post[0] : undefined;
  }

  async findByTitle(title: string): Promise<any> {
    const post = await database.select('*').from('post').where({ title: title });
    return post.length > 0 ? post[0] : undefined;
  }

  async save(post: Post): Promise<void> {
    await database('post').insert(post);
  }

  async update(post: UpdatePost): Promise<void> {
    console.log(post);
    await database('post').where({ id: post.id }).update(post);
  }
  async deleteById(id: string): Promise<void> {
    await database('post').where({ id: id }).del();
  }

}