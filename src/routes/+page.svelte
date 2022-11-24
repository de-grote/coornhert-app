<script>
  import Access from "$lib/Access.svelte";
  import RoosterContainer from "$lib/RoosterContainer.svelte";
  import Rooster from "$lib/Rooster.svelte";
  import LeerlingNummer from "$lib/LeerlingNummer.svelte";
</script>

<h1>Coornhert Rooster App</h1>
<LeerlingNummer />
<br />
<Access />
<br />
<RoosterContainer>
  <Rooster />
</RoosterContainer>

<style lang="scss">
  h1 {
    @include text;
  }
</style>
