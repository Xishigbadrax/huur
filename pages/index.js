import { useState } from "react";
import css from "../styles/Home.module.css";

const aimags = [
  {
    id: 1,
    name: "Аймаг-1",
  },
  {
    id: 2,
    name: "Аймаг-2",
  },
];

const sums = [
  {
    id: 1,
    name: "А1-Сум1",
    aimagName: "Аймаг-1",
  },
  {
    id: 2,
    name: "А1-Сум2",
    aimagName: "Аймаг-1",
  },

  {
    id: 3,
    name: "А2-Сум1",
    aimagName: "Аймаг-2",
  },
  {
    id: 4,
    name: "А2-Сум2",
    aimagName: "Аймаг-2",
  },
];

const bags = [
  {
    id: 1,
    name: "А1-С1-Баг1",
    sumName: "А1-Сум1",
  },
  {
    id: 2,
    name: "А1-С1-Баг2",
    sumName: "А1-Сум1",
  },
  {
    id: 3,
    name: "А1-С1-Баг3",
    sumName: "А1-Сум1",
  },
  {
    id: 4,
    name: "А1-С2-Баг1",
    sumName: "А1-Сум2",
  },
  {
    id: 5,
    name: "А1-С2-Баг2",
    sumName: "А1-Сум2",
  },
  {
    id: 6,
    name: "А1-С2-Баг3",
    sumName: "А1-Сум2",
  },
  {
    id: 7,
    name: "А2-С1-Баг1",
    sumName: "А2-Сум1",
  },
  {
    id: 8,
    name: "А2-С1-Баг2",
    sumName: "А2-Сум1",
  },
  {
    id: 9,
    name: "А2-С1-Баг3",
    sumName: "А2-Сум1",
  },
  {
    id: 10,
    name: "А2-С2-Баг1",
    sumName: "А2-Сум2",
  },
  {
    id: 11,
    name: "А2-С2-Баг2",
    sumName: "А2-Сум2",
  },
  {
    id: 12,
    name: "А2-С2-Баг3",
    sumName: "А2-Сум2",
  },
];

export default function Home() {
  const [AimagNer, setAimagNer] = useState();
  const [SumNer, setSumNer] = useState();
  const [BagNer, setBagNer] = useState();

  function review() {
    alert("Аймаг: " + AimagNer + ", Сум: " + SumNer + ", Баг: " + BagNer);
  }
  return (
    <div className={css.container}>
      <form>
        <label>Аймаг:</label>
        <select onChange={(e) => setAimagNer(e.target.value)}>
          <option></option>

          {aimags.map((aimag) => {
            return <option key={aimag.id}>{aimag.name}</option>;
          })}
        </select>
        <label>Сум:</label>
        <select onChange={(e) => setSumNer(e.target.value)}>
          <option></option>

          {sums
            .filter((su) => su.aimagName === AimagNer)
            .map((sum) => {
              return <option key={sum.id}>{sum.name}</option>;
            })}
        </select>
        <label>Баг:</label>
        <select onChange={(e) => setBagNer(e.target.value)}>
          <option></option>

          {bags
            .filter((ba) => ba.sumName === SumNer)
            .map((bag) => {
              return <option key={bag.id}>{bag.name}</option>;
            })}
        </select>
        <button type="submit" onClick={review}>
          Сонгох
        </button>
      </form>
    </div>
  );
}
