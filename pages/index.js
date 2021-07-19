import { useState } from "react";
import css from "../styles/Home.module.css";

const medeelel = [
  {
    isAimag: true,
    id: 1,
    name: "Аймаг-1",
  },
  {
    isAimag: true,
    id: 2,
    name: "Аймаг-2",
  },

  {
    isSum: true,
    id: 3,
    name: "А1-Сум1",
    aimagName: "Аймаг-1",
  },
  {
    isSum: true,
    id: 4,
    name: "А1-Сум2",
    aimagName: "Аймаг-1",
  },

  {
    isSum: true,
    id: 5,
    name: "А2-Сум1",
    aimagName: "Аймаг-2",
  },
  {
    isSum: true,
    id: 6,
    name: "А2-Сум2",
    aimagName: "Аймаг-2",
  },

  {
    isBag: true,
    id: 7,
    name: "А1-С1-Баг1",
    sumName: "А1-Сум1",
  },
  {
    isBag: true,
    id: 8,
    name: "А1-С1-Баг2",
    sumName: "А1-Сум1",
  },
  {
    isBag: true,
    id: 9,
    name: "А1-С1-Баг3",
    sumName: "А1-Сум1",
  },
  {
    isBag: true,
    id: 10,
    name: "А1-С2-Баг1",
    sumName: "А1-Сум2",
  },
  {
    isBag: true,
    id: 11,
    name: "А1-С2-Баг2",
    sumName: "А1-Сум2",
  },
  {
    isBag: true,
    id: 12,
    name: "А1-С2-Баг3",
    sumName: "А1-Сум2",
  },
  {
    isBag: true,
    id: 13,
    name: "А2-С1-Баг1",
    sumName: "А2-Сум1",
  },
  {
    isBag: true,
    id: 14,
    name: "А2-С1-Баг2",
    sumName: "А2-Сум1",
  },
  {
    isBag: true,
    id: 15,
    name: "А2-С1-Баг3",
    sumName: "А2-Сум1",
  },
  {
    isBag: true,
    id: 16,
    name: "А2-С2-Баг1",
    sumName: "А2-Сум2",
  },
  {
    isBag: true,
    id: 17,
    name: "А2-С2-Баг2",
    sumName: "А2-Сум2",
  },
  {
    isBag: true,
    id: 18,
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

          {medeelel
            .filter((aimag) => aimag.isAimag)
            .map((aimag) => {
              return <option key={aimag.id}>{aimag.name}</option>;
            })}
        </select>
        <label>Сум:</label>
        <select onChange={(e) => setSumNer(e.target.value)}>
          <option></option>

          {medeelel
            .filter((sum) => sum.aimagName === AimagNer && sum.isSum === true)
            .map((sum) => {
              return <option key={sum.id}>{sum.name}</option>;
            })}
        </select>
        <label>Баг:</label>
        <select onChange={(e) => setBagNer(e.target.value)}>
          <option></option>

          {medeelel
            .filter((bag) => bag.sumName === SumNer && bag.isBag === true)
            .map((bag) => {
              return <option key={bag.id}>{bag.name}</option>;
            })}
        </select>
        <button type="submit" onClick={review}>
          Сонгох
        </button>
      </form>
    </div>
    // <div>
    // {medeelel
    //   .filter((ba) => ba.isAimag === true && ba.id === 1 )
    //   .map((bag) => {
    //     return <option key={bag.id}>{bag.name}</option>;
    //   })}
    // </div>
  );
}
