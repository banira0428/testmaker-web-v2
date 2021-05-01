export class Question {
  id: string;
  question: string;
  answer: string;
  answers: string[];
  others: string[];
  auto: boolean;
  checkOrder: boolean;
  created_at: Date;
  explanation: string;
  order: number;
  type: number;
  imageRef: string;

  constructor(
    id: string,
    question: string,
    answer: string,
    answers: string[],
    others: string[],
    auto: boolean,
    checkOrder: boolean,
    created_at: Date,
    explanation: string,
    order: number,
    type: number,
    imageRef: string
  ) {
    this.id = id;
    this.question = question;
    this.answer = answer;
    this.answers = answers;
    this.others = others;
    this.auto = auto;
    this.checkOrder = checkOrder;
    this.created_at = created_at;
    this.explanation = explanation;
    this.order = order;
    this.type = type;
    this.imageRef = imageRef;
  }

  getData(): object {
    const result = {};
    Object.keys(this).map((key) => (result[key] = this[key]));
    return result;
  }
}
