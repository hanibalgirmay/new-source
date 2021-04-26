<template>
  <div>
      <header>
          <div class="logo">My News</div>
          <nav>
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/sources">Sources</a></li>
                  <li><a href="/top-news">Top News</a></li>
                  <li><a href="/tranding">Tranding</a></li>
              </ul>
          </nav>
      </header>
  </div>
</template>

<script>
export default {

}
</script>

<style>
header{
    background:orange;
    display:flex;
    width:100%;
    position:absolute;
    top:0;
    left:0;
    /* align-items: center; */
    padding:1rem;
    justify-content: space-between;
}
nav ul {
    display:flex;
    gap:1.4rem;
    list-style: none;
}
nav ul li a{
       padding:1rem;
       transition: .2s ease-in-out;
}
ul li a:hover{
    background:rgb(55, 0, 255);
    color:#fff;
}
</style>