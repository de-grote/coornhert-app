<script lang="ts">
  import { invoke } from "@tauri-apps/api/tauri";
  import { access_token } from "./info";

  let code = "";
  let success: boolean | null = null;

  async function getAccessToken() {
    let response: string = await invoke("get_access_token", { code });
    if (response == "") return (success = false);
    const json = JSON.parse(response);
    access_token.set(json.access_token);
    success = true;
  }
</script>

<input id="greet-input" placeholder="Vul uw koppelingscode in..." bind:value={code} />
<button on:click={getAccessToken}>Verstuur</button>
<p>
  {#if success === null}
    <br />
  {:else if success}
    <span class="success">Uw koppelingscode is succesvol aangepast! gefeliciteerd</span>
    <br />
  {:else}
    <span class="fail">Uw koppelingscode is ongeldig.</span>
    <br />
  {/if}
</p>

<style lang="scss">
  p {
    @include text
  }
  .fail {
    color: red;
  }
  .success {
    color: green;
  }
</style>
