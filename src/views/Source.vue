<template>
  <div>
    <h4>Available News Source List</h4>
    <div>
      <Newsprovider :sourcesData="sourcePlace" />
    </div>
  </div>
</template>

<script>
import { GET_SOURCES } from "../API/index";
import Newsprovider from "../components/NewsProvider";

export default {
  name: "Sources",
  components: {
    Newsprovider,
  },
  data() {
    return {
      sourcePlace: [],
    };
  },
  methods: {
      async getNewsSource(){
          await GET_SOURCES()
            .then((res) => {
                console.log(res)
                this.sourcePlace = res.data;
            })
            .catch(err => console.error(err))
      }
  },
  created() {
      this.getNewsSource();
  },
};
</script>

<style></style>
