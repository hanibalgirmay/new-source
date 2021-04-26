<template>
  <div class="home">
    <Articles :news="news" />
  </div>
</template>

<script>
// @ is an alias to /src
import { FETCH_TOP_NEWS } from "../API/index";
import Articles from "../components/Article";

export default {
  name: "Home",
  components: {
    Articles,
  },
  data() {
    return {
      news: [],
    };
  },
  methods: {
    async getNews() {
      await FETCH_TOP_NEWS()
        .then((res) => {
          this.news = res.data;
        })
        .catch((err) => console.error(err));
    },
  },
  created() {
    this.getNews();
  },
};
</script>
<style scp>

</style>
