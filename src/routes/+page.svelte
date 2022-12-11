<script>
  import Access from "$lib/Access.svelte";
  import RoosterContainer from "$lib/RoosterContainer.svelte";
  import Rooster from "$lib/Rooster.svelte";
  import LeerlingNummer from "$lib/LeerlingNummer.svelte";
  import WeekSelector from "$lib/WeekSelector.svelte";
  import InvalidateChaches from "$lib/InvalidateChaches.svelte";
</script>

<h1>Coornhert Rooster App</h1>
<InvalidateChaches />
<LeerlingNummer />
<br />
<Access />
<br />
<WeekSelector />
<br />
<RoosterContainer>
  <Rooster />
</RoosterContainer>

<style lang="scss">
  h1 {
    @include text;
  }
</style>
