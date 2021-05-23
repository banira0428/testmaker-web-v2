export class Test {
  documentId: string;
  name: string;
  userId: string;
  userName: string;
  questions: any;
  public: boolean;
  created_at: Date;
  color: number;

  constructor(
    documentId: string,
    name: string,
    userId: string,
    userName: string,
    questions: any,
    isPublic: boolean,
    created_at: Date,
    color: number
  ) {
    this.documentId = documentId;
    this.name = name;
    this.userId = userId;
    this.userName = userName;
    this.questions = questions;
    this.public = isPublic;
    this.created_at = created_at;
    this.color = color;
  }

  getData(): object {
    const result = {};
    Object.keys(this).map(key => result[key] = this[key]);
    return result;
  }
}
