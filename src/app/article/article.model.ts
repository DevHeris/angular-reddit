export class Article {
  constructor(
    public title: string,
    public link: string,
    public votes?: number
  ) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }
  voteUp(): void {
    this.votes++;
  }

  voteDown(): void {
    this.votes--;
  }

  domain(): string {
    try {
      const domainAndPath = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch (error) {
      return null;
    }
  }
}
