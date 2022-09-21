import warmup from './warmup';
import warmup2 from './warmup2';
export type Question = {
  title: string;
  prompt: string;
  boilerPlate: string;
}

const questions = [warmup, warmup2];
export default questions;
