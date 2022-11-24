<script lang="ts">
  import { invoke } from "@tauri-apps/api/tauri";
  import { get } from "svelte/store";
  import { access_token, leerlingNummer } from "./info";
  import RoosterItem from "./RoosterItem.svelte";
  import type { Rooster } from "./roosterType";

  let now = new Date();

  let week = (function () {
    const date = new Date(now.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
    const week1 = new Date(date.getFullYear(), 0, 4);
    return (
      1 +
      Math.round(
        ((date.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7
      )
    );
  })();

  let year = (function () {
    const date = new Date(now.getTime());
    date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
    return date.getFullYear();
  })();

  let token = "";
  access_token.subscribe((v) => (token = v));

  async function getRooster(): Promise<Rooster> {
    const r: string = await invoke("get_rooster", {
      accessToken: token,
      week,
      year,
      leerlingNummer: get(leerlingNummer)
    });
    return JSON.parse(r);
  }
</script>

<table>
  {#if token}
    {#await getRooster()}
      <p>laden...</p>
    {:then rooster}
      <RoosterItem {rooster} />
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
  @import "../global";
  p {
    @include text;
  }
  table {
    border: 1px solid black;
  }
</style>
