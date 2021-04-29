export class Test {
  documentId: string;
  name: string;
  userId: string;
  questions: any;
  isPublic: boolean;

  constructor(
    documentId: string,
    name: string,
    userId: string,
    questions: any,
    isPublic: boolean
  ) {
    this.documentId = documentId;
    this.name = name;
    this.userId = userId;
    this.questions = questions;
    this.isPublic = isPublic;
  }
}
