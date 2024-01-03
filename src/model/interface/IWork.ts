export interface IWork {
  name: string;
  description: string;
  amount: string;
  start: string;
  finish: string;
  freelancer?: string;
  state: number;
  isActive?: boolean;
}
