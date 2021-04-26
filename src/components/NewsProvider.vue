<template>
  <div>
    <h2>Sources</h2>
    <div class="catagories">
      <div v-for="(source, index) of sourcesData.sources" :key="index">
        <div class="catagory">
          {{ source.name }}
          {{ source.language }}
          {{ source.country }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsProvider",
  props: ["sourcesData"],
  methods: {},
  mounted() {
    console.log("==================---------=========");
    console.log(this.sourcesData);
  },
};
</script>

<style scoped>
.catagories {
  display: flex;
  gap: 5px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 5rem;
}
.catagory {
  width: 150px;
  height:80px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  padding: 2rem;
}
</style>
