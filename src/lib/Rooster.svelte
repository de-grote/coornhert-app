<script lang="ts">
  import { invoke } from "@tauri-apps/api/tauri";

  let rooster = getRooster();

  async function getRooster(): Promise<string[][]> {
    return await invoke("get_rooster", {});
  }
</script>

<table>
  {#await rooster}
    <p>laden...</p>
  {:then r}
    {#each r as row}
      <tr>
        {#each row as item}
          <td>
            {item}
          </td>
        {/each}
      </tr>
    {/each}
  {:catch err}
    <p>
      <details>
        <summary>iets ging fout...</summary>
        {err}
      </details>
    </p>
  {/await}
</table>

<style>
  table,
  tr,
  td {
    border: 1px solid black;
  }
  td {
    padding: 8px;
  }
</style>
