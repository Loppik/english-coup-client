export type Word = {
  wordId: number;
  original: string;
  translation: string;
  custom: boolean;
}

export type Status = {
  statusId: number;
  name: string;
}

export type User = {
  userId: number;
  email: string;
  password: string;
  refreshToken: string;
}