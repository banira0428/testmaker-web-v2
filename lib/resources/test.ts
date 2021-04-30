export class Test {
  documentId: string;
  name: string;
  userId: string;
  questions: any;
  isPublic: boolean;
  created_at: Date;
  color: number;

  constructor(
    documentId: string,
    name: string,
    userId: string,
    questions: any,
    isPublic: boolean,
    created_at: Date,
    color: number
  ) {
    this.documentId = documentId;
    this.name = name;
    this.userId = userId;
    this.questions = questions;
    this.isPublic = isPublic;
    this.created_at = created_at;
    this.color = color;
  }
}
