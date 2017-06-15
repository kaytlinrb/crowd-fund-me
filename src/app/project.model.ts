export class Project {
  public favorite:boolean = false;
  constructor (
    public title:string,
    public category:string,
    public author:string,
    public goal:number,
    public description:string) {}
}
