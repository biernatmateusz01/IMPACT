"use client";
import { useState } from "react";
import styles from "./Page.module.css";
type User = {
  id: number;
  name: string;
  shirtNumber: number;
  test: () => void;
  src: string;
};

export default function test() {
  const [data, setData] = useState<User | null>(null);

  const structure: User[] = [
    {
      id: 1,
      name: "Uros Korun",
      shirtNumber: 88,
      test: function () {
        console.log(this.shirtNumber);
      },
      src: "https://s1.tvp.pl/images2/1/0/3/uid_1031cfcfe7467a3e0848b51556fb7db21595526855691_width_200_play_0_pos_0_gs_0_height_240_uros-korun-fot-pap.jpg",
    },
    {
      id: 2,
      name: "Jakub Szmatuła",
      shirtNumber: 1,
      test: function () {
        console.log(this.shirtNumber);
      },
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHFTfehhhTluwhokcVzClzRkMCHJ9BURlRudE_clRIgD5rsUio99EYaELBe76Zs_TIEe27cLXZ_9S2DUb3W-7Oun5eYGNZnESqLMvaf7E&s=10",
    },
  ];

  const handleClick = (item: User) => {
    setData(item);
  };

  return (
    <>
      <ul>
        {data && <p>Wybrany: {data.name}</p>}

        {structure.map((el) => (
          <li key={el.id}>
            <button
              onClick={() => {
                handleClick(el);
              }}
            >
              <img src={el.src} alt="" />
            </button>
          </li>
        ))}
        <button
          onClick={() => {
            console.log("test");
          }}
          className={styles.button}
        >
          test
        </button>
      </ul>
    </>
  );
}
