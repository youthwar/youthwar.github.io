import { useState } from "react";
import { BlogLayout, Section, LeftSection } from "@components/layout";
import Editor from "@components/editor";
import questions from "@interviewQuestions/index";
const InterviewPrep = () => {
  function generateRandomInteger(): number {
    return Math.floor(Math.random() * questions.length);
  }
  const [randomIndex, setRandomIndex] = useState<number>(
    generateRandomInteger()
  );
  const [usedIntegers, setUsedIntegers] = useState<number[]>([randomIndex]);

  const setNextQuestion = (potentialIdx: number) => {
    if (usedIntegers.length === questions.length) return;
    if (!usedIntegers.includes(potentialIdx)) {
      setUsedIntegers([...usedIntegers, potentialIdx]);
      return setRandomIndex(potentialIdx);
    }

    setNextQuestion(generateRandomInteger());
  };
  const randomQuestion = questions[randomIndex];
  return (
    <BlogLayout meta={{ title: "Interview prep" }}>
      <Section>
        <LeftSection size={10}>
          <div onClick={() => setNextQuestion(randomIndex)}>nextQuestion</div>
          <h1>{randomQuestion.title}</h1>
          <h2>Prompt: </h2>
          <p>{randomQuestion.prompt}</p>
          <hr />
          <Editor height={"500px"} code={randomQuestion.boilerPlate} test />

        </LeftSection>
      </Section>
    </BlogLayout>
  );
};

export default InterviewPrep;
