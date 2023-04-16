import "./App.css";
import Quiz from "./Quiz";

const App = () => {

  const theData = {
    questions: [
    {
        "id": 1,
        "question": "Who is the longest reigning WWE Champion?",
        "answers": ["Roman Reigns", "CM Punk", "Bruno Sammartino", "Jimmy Snuka"],
        "correct": "Bruno Sammartino"
      },
      {
        "id": 2,
        "question": "Who was the first ever Royal Rumble Match Winner?",
        "answers": ["Hacksaw Jim Duggan", "Hulk Hogan" , "The Rock", "Shawn Michaels"],
        "correct": "Hacksaw Jim Duggan"
      },
      {
        "id": 3,
        "question": "Who had the most WWE Championship reigns?",
        "answers": ["Ric Flair", "Triple H", "Brock Lesnar", "John Cena"],
        "correct": "John Cena"
      },
      {
        "id": 4,
        "question": "Who broke The Undertaker streak?",
        "answers": ["Edge", "Randy Orton", "Bray Wyatt", "Brock Lesnar"],
        "correct": "Brock Lesnar"
      },
      {
        "id": 5,
        "question": "Who did John Cena had his debut against?",
        "answers": ["Buddy Rodgers", "Kurt Angle", "Shane Mcmahon", "Batista"],
        "correct": "Kurt Angle"
      },
      {
        "id": 6,
        "question": "What year did Triple H make his debut?",
        "answers": [1995, 1990, 2000, 1998],
        "correct": 1995
      },
      {
        "id": 7,
        "question": "When did The Undertaker had his first Wrestlemania Match?",
        "answers": [1986, 1998, 1991, 1989],
        "correct": 1991
      },
      {
        "id": 8,
        "question": "Who had the most ECW Championship reigns?",
        "answers": ["Bobby Lashley", "Tommy Dreamer", "CM Punk", "The Sandman"],
        "correct": "The Sandman"
      }
    ]};

    const questions = theData.questions;

  return (
    <div>
      <main className="main-ui">
      <Quiz questions={questions} />
      </main>
    </div>
  );
};

export default App;