interface IUpdatePost {
  title: string;
  content: string;
}

export class UpdatePost {

  public title: string;
  public content: string;

  constructor(
    public readonly id: string,
    props: Partial<IUpdatePost>
  ) {
    Object.assign(this, props);
  }

}