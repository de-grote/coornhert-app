<script lang="ts">
  import { get } from "svelte/store";
  import { leerlingNummer } from "./info";

  const placeholder = get(leerlingNummer).toString();
  let nummer = placeholder === "0" ? "" : placeholder
  $: nummer !== "" ? leerlingNummer.set(+nummer) : null;
</script>

<input id="greet-input" placeholder="Vul uw leerlingnummer in..." bind:value={nummer} />
