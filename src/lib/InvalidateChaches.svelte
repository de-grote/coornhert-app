<script lang="ts">
  import { access_token, expires, leerlingNummer } from "./info";
  function invalidate() {
    leerlingNummer.set(0);
    expires.set(0);
    access_token.set("");
    localStorage.clear();
  }
</script>

<button on:click={invalidate}><p>Invalidate Chaches</p></button>

<style lang="scss">
  p {
    @include text
  }
  button {
    float: right;
    margin: auto;
  }
</style>