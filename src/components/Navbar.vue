<template>
  <b-navbar type="light" variant="light">
    <b-container>
      <b-navbar-brand href="https://aloftdata.eu">
        Aloft
      </b-navbar-brand>
      <span class="navbar-text">Visualize bird movement data from European weather radars</span>
      <b-navbar-nav class="ml-auto">
        <!-- <language-selector /> -->
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script lang="ts">

import { LangCode, MultilanguageStringContainer } from "@/CrowTypes";
import LanguageSelector from "@/components/LanguageSelector.vue";
import helpers from "@/helpers";
import { UserChoicesStoreModule } from "@/store/UserChoicesStore";
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  components: {
    // LanguageSelector
  },
  data: function () {
    return {
      texts: {
        "Title": {
          en: "Birds detected by weather radars",
          fr: "Détection des oiseaux via les radars météo",
          nl: "Vogels gedetecteerd door weerradars"
        },
      } as MultilanguageStringContainer
    }
  },
  computed: {
    selectedLanguageCode(): LangCode {
      return UserChoicesStoreModule.selectedLanguageCode;
    },
  },
  methods: {
    t(stringId: string) {
      return helpers.translateString(stringId, this.selectedLanguageCode, this.texts);
    },
  }
});
</script>
