<template>
  <main class="homepage container py-6">
    <section class="hero row">
      <img
        src="/images/undraw_remotely.svg"
        class="homepage-image col img-fluid"
      />
      <div class="col">
        <h1 class="display-4">Arbeit von Zuhaus</h1>
        <p class="font-weight-normal">
          Arbeit von Zuhaus ist eine App, die dir helfen kann in den Home Office
          Alltag einzusteigen. Wir haben dir Inhalte zusammengesucht und
          erstellt, welche dir helfen aus dir einen Home Office Helden zu
          machen.
        </p>
      </div>
    </section>
    <section class="m-4">
      <p class="lead font-weight-bold">
        Bist du bereit deine eigene Home Office Geschichte zu schreiben?
      </p>
      <nuxt-link to="/app/" class="btn btn-outline-success btn-lg">
        Hey-ho let's go!
      </nuxt-link>
    </section>
  </main>
</template>

<script></script>

<style scoped lang="scss">
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';

.hero {
  align-items: center;
  flex-direction: column;

  @include media-breakpoint-up(lg) {
    flex-direction: row;
  }
}

.hero img {
  max-width: 40rem;
}
</style>
