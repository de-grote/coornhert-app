<script lang="ts">
  import { invoke } from "@tauri-apps/api/tauri";
  import { get } from "svelte/store";
  import { access_token, leerlingNummer, selectedWeek, selectedYear } from "./info";
  import RoosterItem from "./RoosterItem.svelte";
  import type { Rooster } from "./roosterType";

  let week = 0;
  let year = 0;
  let token = "";
  selectedWeek.subscribe((v) => (week = v));
  selectedYear.subscribe((v) => (year = v));
  access_token.subscribe((v) => (token = v));

  async function getRooster(week: number, year: number): Promise<Rooster> {
    const r: string = await invoke("get_rooster", {
      accessToken: token,
      week,
      year,
      leerlingNummer: get(leerlingNummer)
    });
    return JSON.parse(r);
  }
</script>

<table id="rooster">
  {#if token}
    {#await getRooster(week, year)}
      <p>laden...</p>
    {:then rooster}
      {#if Math.floor(rooster.response.status / 100) === 2}
        <RoosterItem {rooster} />
      {:else}
        <p>
          <details>
            <summary>{rooster.response.message}</summary>
            {rooster.response.details}
          </details>
        </p>
      {/if}
    {:catch err}
      <p>
        <details>
          <summary>iets ging fout...</summary>
          {err}
        </details>
      </p>
    {/await}
  {:else}
    <p>link de app om jouw rooster te zien</p>
  {/if}
</table>

<style lang="scss">
  p {
    @include text;
  }
  table {
    border: 1px solid black;
  }
</style>
