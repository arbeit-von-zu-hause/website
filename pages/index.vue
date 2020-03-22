<template>
  <main class="homepage container py-4">
    <section class="hero row py-4">
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
        <p class="lead font-weight-bold">
          Bist du bereit deine eigene Home Office Geschichte zu schreiben?
        </p>
        <nuxt-link to="/app/" class="btn btn-outline-success btn-lg">
          Hey-ho let's go!
        </nuxt-link>
      </div>
    </section>
    <section class="row py-4">
      <h2>Erfahre mehr über das Projekt</h2>
      <div class="embed-responsive embed-responsive-16by9 my-4">
        <iframe
          class="embed-responsive-item"
          src="https://www.youtube-nocookie.com/embed/bq6I62oNwLM"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <p>
        Hier findest uns im Netz:
      </p>
      <ul>
        <li>
          <b-link
            href="https://github.com/arbeit-von-zuhaus/arbeit-von-zuhaus.github.io"
            >GitHub
          </b-link>
          – hier kannst du Beiträge zum Projekt leisten.
        </li>
        <li>
          <b-link
            href="https://devpost.com/software/26_homeoffice_softskill_challenge"
            >DevPost
          </b-link>
          – hier findest unsere Hackathon-Planungsseite.
        </li>
      </ul>
      <p>
        Zur Zeit ist die Anwendung ein Prototyp und wir laden gern ein uns via
        DevPost oder GitHub zu kontaktieren und das Projekt voranzutreiben.
      </p>
    </section>
    <Article class="row" article="willkommen-im-home-office" />
    <nuxt-link to="/app/" class="btn btn-outline-success btn-lg">
      Auf jeden Fall!
    </nuxt-link>
  </main>
</template>

<script>
import Article from '../components/Article'

export default {
  components: { Article }
}
</script>

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
