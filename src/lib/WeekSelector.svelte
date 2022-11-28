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
</script>

<div>
  <button on:click={decrementWeek}><p>vorige week</p></button>
  <button on:click={incrementWeek}><p>volgende week</p></button>
</div>
