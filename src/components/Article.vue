<template>
  <div class="news">
    <div v-for="(article,index) of news.articles" :key="index" class="card">
      <div class="image-container">
        <img :src="article.urlToImage" alt="article image" />
      </div>
      <div class="card-content">
        <span class="tag">{{ article.source.name }}</span>
        <div class="title"><a target="_blank" :href="article.url">{{ article.title }}</a></div>
        <p>
          {{article.description}}
        </p>
        <div class="user">
          <div class="user-img">
            <!--         <img src="" alt=""> -->
          </div>
          <div class="user-info">
            <span>{{article.author}} </span>
            <small>{{$moment(article.publishedAt).format('LL')}}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: ["news"],
  mounted() {
      console.log("==================---------=========")
      console.log(this.news.articles);
  },
};
</script>

<style>
@import url('../assets/article.css');

.news{
    display:flex;
    gap:20px;
    margin-top: 7rem;
    justify-content: center;
    flex-wrap:wrap;
}
a{
    text-decoration: none;
}
</style>
