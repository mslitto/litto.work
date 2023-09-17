<script>
  /** @type string */
  export let id
  /** @type string | number */
  export let height
  /** @type string | number */
  export let width
  /** @type string */
  export let title
</script>

<div class="YoutubeWrapper">
  <iframe
    {title}
    {width}
    {height}
    src={`https://www.youtube.com/embed/${id}`}
    frameborder="0"
    allowfullscreen
  />
</div>

<style lang="scss">
  .YoutubeWrapper {
    margin: 2.5% 0;
    height: 0;
    position: relative;
    padding-bottom: 56.25%;
  }

  iframe {
    background-color: var(--video-background-color);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
</style>
