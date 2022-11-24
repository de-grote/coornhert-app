<script lang="ts">
  import { leerlingNummer } from "./info";

  let nummer = "";
  $: leerlingNummer.set(+nummer);
</script>

<input id="greet-input" placeholder="Vul uw leerlingnummer in..." bind:value={nummer} />
