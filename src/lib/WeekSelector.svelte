<script>
  import { selectedWeek, selectedYear } from "./info.ts";

  let week = 0;
  selectedWeek.subscribe((v) => (week = v));

  function incrementWeek() {
    if (week == 53) {
      selectedYear.update((y) => {
        return y + 1;
      });
      selectedWeek.set(0);
    } else {
      selectedWeek.set(week + 1);
    }
  }
  function decrementWeek() {
    if (week == 1) {
      selectedYear.update((y) => {
        return y - 1;
      });
      selectedWeek.set(53);
    } else {
      selectedWeek.set(week - 1);
    }
  }
  function setCurrentWeek() {
    selectedWeek.set(
      (() => {
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
    selectedYear.set(
      (() => {
        const date = new Date();
        date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
        return date.getFullYear();
      })()
    );
  }
</script>

<div>
  <button on:click={decrementWeek}><p>vorige week</p></button>
  <button on:click={setCurrentWeek}><p>deze week</p></button>
  <button on:click={incrementWeek}><p>volgende week</p></button>
</div>
