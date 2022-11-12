<script>
  import Picture from "$lib/Picture.svelte";
  import Access from "$lib/Access.svelte";
  import RoosterContainer from "$lib/RoosterContainer.svelte";
  import Rooster from "$lib/Rooster.svelte";
</script>

<h1>Welcome to SvelteKit</h1>
<Access />
<br />
<RoosterContainer>
  <Rooster />
</RoosterContainer>
<br />
<Picture />
