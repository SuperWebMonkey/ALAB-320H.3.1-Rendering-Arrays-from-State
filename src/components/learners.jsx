function Learners({ learner }) {
  const scores = learner.scores;
  console.log(scores);

  return (
    <>
      <h1>{learner.name}</h1>
      <p>{learner.bio}</p>
      <p>Scores:</p>
      <ul>
        {scores.map((score, i) => (
          <li key={i}>
            Date is {score.date} and Score is ${score.score}
          </li>
        ))}
      </ul>
    </>
  );
}

function getScoreData(score) {
  return `Graded on ${score.date}, the score is ${score.score}`;
}

export default Learners;
