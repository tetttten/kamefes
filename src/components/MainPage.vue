<script setup lang="ts">
</script>

<template>
    <header class="header">
      <div class="header-left">
        <h2>
          <router-link to="/">🐢亀フェスポータルサイト</router-link>
        </h2>
      </div><!-- /.header-left -->
      <div class="header-right">
        <div class="hader-right-menu">
          <a href="#" class="header-right-menu-item">🐢menu1</a>
        </div><!-- /.hader-right-menu -->
        <div class="hader-right-menu">
          <a href="#" class="header-right-menu-item">🐢menu1</a>
        </div><!-- /.hader-right-menu -->
        <div class="hader-right-menu">
          <a href="#" class="header-right-menu-item">🐢menu1</a>
        </div><!-- /.hader-right-menu -->
        <div class="hader-right-menu">
          <a href="#" class="header-right-menu-item">🐢menu1</a>
        </div><!-- /.hader-right-menu -->
        <div class="hader-right-menu">
          <a href="#" class="header-right-menu-item">🐢menu1</a>
        </div><!-- /.hader-right-menu -->
      </div><!-- /.header-right -->
    </header>
    <section class="main">
      <div class="top">
        <div class="top-image">
          <img src="../assets/MicrosoftTeams-image (5).png" alt="">
        </div><!-- /.top-image -->
        <div class="score">
          <h2 class="main-title">Score</h2><!-- /.main-title -->
          <div class="score-menu">
            <router-link to="/band" class="score-menu-item">
              <img src="../assets/imageshaiiro.jpg" alt="">
              <h3>band</h3>
            </router-link><!-- /.score-menu-item -->
            <a href="./Band.vue" class="score-menu-item">
              <img src="../assets/imageshaiiro.jpg" alt="">
              <h3>band</h3>
            </a><!-- /.score-menu-item -->
            <a href="./Band.vue" class="score-menu-item">
              <img src="../assets/imageshaiiro.jpg" alt="">
              <h3>band</h3>
            </a><!-- /.score-menu-item -->
            <a href="./Band.vue" class="score-menu-item">
              <img src="../assets/imageshaiiro.jpg" alt="">
              <h3>band</h3>
            </a><!-- /.score-menu-item -->
            <a href="./Band.vue" class="score-menu-item">
              <img src="../assets/imageshaiiro.jpg" alt="">
              <h3>band</h3>
            </a><!-- /.score-menu-item -->
            <a href="./Band.vue" class="score-menu-item">
              <img src="../assets/imageshaiiro.jpg" alt="">
              <h3>band</h3>
            </a><!-- /.score-menu-item -->
            <a href="./Band.vue" class="score-menu-item">
              <img src="../assets/imageshaiiro.jpg" alt="">
              <h3>band</h3>
            </a><!-- /.score-menu-item -->
            <a href="./Band.vue" class="score-menu-item">
              <img src="../assets/imageshaiiro.jpg" alt="">
              <h3>band</h3>
            </a><!-- /.score-menu-item -->
            <a href="./Band.vue" class="score-menu-item">
              <img src="../assets/imageshaiiro.jpg" alt="">
              <h3>band</h3>
            </a><!-- /.score-menu-item -->
          </div><!-- /.score-menu -->
        </div><!-- /.score -->
      </div><!-- /.top -->
      <div class="top">
      <div class="news">
        <div class="news-item">
          <ul>
            <li>
              <a href="#">
                <span>ラベル</span>
                <time datetime="2019-01-01">[ 2019.01.01 ]</time>
                <p class="new">ニュースニュースニュースニュースニュース</p>
              </a>
            </li>
            <li>
              <a href="#">
                <span>ラベル</span>
                <time datetime="2019-01-01">[ 2019.01.01 ]</time>
                <p class="new">ニュースニュースニュースニュースニュース</p>
              </a>
            </li>
            <li>
              <a href="#">
                <span>ラベル</span>
                <time datetime="2019-01-01">[ 2019.01.01 ]</time>
                <p>ニュースニュースニュースニュースニュース</p>
              </a>
            </li>
            <li>
              <a href="#">
                <span>ラベル</span>
                <time datetime="2019-01-01">[ 2019.01.01 ]</time>
                <p>ニュースニュースニュースニュースニュース</p>
              </a>
            </li>
            <li>
              <a href="#">
                <span>ラベル</span>
                <time datetime="2019-01-01">[ 2019.01.01 ]</time>
                <p>ニュースニュースニュースニュースニュース</p>
              </a>
            </li>
            <li>
              <a href="#">
                <span>ラベル</span>
                <time datetime="2019-01-01">[ 2019.01.01 ]</time>
                <p>ニュースニュースニュースニュースニュース</p>
              </a>
            </li>
            <li>
              <a href="#">
                <span>ラベル</span>
                <time datetime="2019-01-01">[ 2019.01.01 ]</time>
                <p>ニュースニュースニュースニュースニュース</p>
              </a>
            </li>
            <li>
              <a href="#">
                <span>ラベル</span>
                <time datetime="2019-01-01">[ 2019.01.01 ]</time>
                <p>ニュースニュースニュースニュースニュース</p>
              </a>
            </li>
            <li>
              <a href="#">
                <span>ラベル</span>
                <time datetime="2019-01-01">[ 2019.01.01 ]</time>
                <p>ニュースニュースニュースニュースニュース</p>
              </a>
            </li>
          </ul>
        </div><!-- /.news-item -->
      </div><!-- /.news -->
      <div class="top-image2">
        <img src="../assets/MicrosoftTeams-image (6).png" alt="">
      </div><!-- /.top-image -->
    </div><!-- /.top -->
    <div class="form">
      <form id="contact">
        <div class="container">
          <div class="head">
            <h2 class="main-title">Contact</h2>
          </div>
          <input type="text" name="name" placeholder="Name" /><br />
          <input  type="email" name="email" placeholder="Email" /><br />
          <textarea type="text" name="message" placeholder="Message"></textarea><br />
          <div class="message">Message Sent</div>
          <button id="submit" type="submit">
            Send!
          </button>
        </div>
      </form>
      </div><!-- /.form -->
    </section><!-- /.main -->
</template>


<style scoped>
    @import '../assets/main.css';
</style>