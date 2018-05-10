import { Skill } from "./skill";

export class Skillset {
  private name: string;
  private type: string;
  private skills: Skill[];

  constructor(name: string, type: string, skills: Skill[]) {
    this.name = name;
    this.type = type;
    this.skills = skills;
  }
}
