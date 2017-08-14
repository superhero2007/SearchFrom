<template>
    <v-container>
      <v-layout row wrap class="py-4">
          <v-flex xs12>
              <SearchBox></SearchBox>
          </v-flex>
      </v-layout>
      <GalleryBar></GalleryBar>
      <v-layout row class="py-4">
        <div>
          <SearchOption />
        </div>
      </v-layout>
    </v-container>
</template>

<script>
import SearchBox from '../atoms/SearchBox';
import GalleryBar from '../atoms/GalleryBar';
import SearchOption from '../atoms/SearchOption';

export default {
  components: {
    SearchBox,
    GalleryBar,
    SearchOption,
  },
  data() {
    return {};
  },
  methods: {
  },
};
</script>

<style scoped>


</style>
