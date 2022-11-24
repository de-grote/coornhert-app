<script lang="ts">
  import { onMount } from "svelte";
  import type { Rooster } from "./roosterType";

  export let rooster: Rooster;

  onMount(() => { // replace this code when I know how to manipulte DOM using svelte instead of vanilla js
    for (let i of rooster.response.data[0].appointments.filter((x) => x.status.length)) {
      const id = i.startTimeSlotName + new Date(i.start * 1000).getDay().toString();
      let grid = document.getElementById(id)!;
      grid.innerHTML = `<p><details><summary>${i.subjects.map((x) =>
        x.replace("_", " ")
      )}<br>lokaal ${i.locations}</summary>${JSON.stringify(i)}</details></p>`;
      if (i.status[0].code == 4007) {
        grid.classList.add("uitval");
      }
    }
  });
</script>

{#each Array(10) as _, hour}
  <tr>
    {#each Array(5) as _, day}
      <td id={(hour + 1).toString(16).toUpperCase() + (day + 1).toString()} />
    {/each}
  </tr>
{/each}

<style>
  td {
    padding: 8px;
  }
  tr,
  td {
    border: 1px solid black;
  }
  :global(.uitval) {
    background-color: rgba(255, 0, 0, 0.6);
  }
</style>
