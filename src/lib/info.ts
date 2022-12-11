import { get, writable } from "svelte/store";

type Token = {
  access_token: string;
  expires: number;
  leerling_nummer: number;
};

export const access_token = writable(
  (function () {
    const tokenString = localStorage.getItem("token");
    if (tokenString == null) return "";
    const token: Token = JSON.parse(tokenString);
    if (token.expires < Number(new Date())) return "";
    console.log(token.access_token);
    return token.access_token;
  })()
);

export const leerlingNummer = writable(
  (function () {
    const tokenString = localStorage.getItem("token");
    if (tokenString == null) return 0;
    const token: Token = JSON.parse(tokenString);
    return token.leerling_nummer;
  })()
);

export const expires = writable(0);

access_token.subscribe((access_token) => {
  localStorage.setItem(
    "token",
    JSON.stringify({
      access_token: access_token,
      expires: Number(new Date()) + get(expires) * 1000,
      leerling_nummer: get(leerlingNummer)
    })
  );
});

export const selectedWeek = writable(
  (function () {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
    const week1 = new Date(date.getFullYear(), 0, 4);
    return (
      1 +
      Math.round(
        ((date.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7
      )
    );
  })()
);

export const selectedYear = writable(
  (function () {
    const date = new Date();
    date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
    return date.getFullYear();
  })()
);
