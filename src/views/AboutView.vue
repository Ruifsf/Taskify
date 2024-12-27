<script setup lang="ts">
import Typed from 'typed.js';
import { onBeforeMount, onMounted } from 'vue';
import Granim from "granim";

onMounted(() => {
  document.querySelectorAll('.typed').forEach(function (el) {
    new Typed(el, {
      strings: el.getAttribute('data-content') ? [el.getAttribute('data-content')] : [''],
      typeSpeed: 25,
      showCursor: false,
    })
  });

  var granimInstance = new Granim({
    element: '#canvas-complex',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states: {
      "default-state": {
        gradients: [
          [{ color: '#eae8eb', pos: 0 }, { color: '#eae8eb', pos: 0 }, { color: '#eae8eb', pos: 0 }],
          [
            { color: '#e2c6f5', pos: .2 },
            { color: '#f0afaf', pos: .8 },
            { color: '#c7f0d6', pos: 1 }
          ], [
            { color: '#b9ede8', pos: 0 },
            { color: '#f7c588', pos: .2 },
            { color: '#f5bad8', pos: .75 }
          ],
        ]
      }
    }
  });
})

onBeforeMount(() => {

})

</script>

<template>
  <canvas id="canvas-complex"></canvas>
  <div>
    <h1>Who I am:</h1>
    <p><b>Name:</b> <span class="typed" data-content="Rui Ferreira"></span></p>
    <p><b>Age:</b> <span class="typed" data-content="29"></span></p>
    <p><b>Country:</b> <span class="typed" data-content="Portugal"></span></p>
    <p><b>Experience:</b> <span class="typed" data-content="4 years as Frontend Developer"></span></p>
    <p><b>Studies:</b> <span class="typed" data-content="Masters in Computer Engineering, University of Lisbon `(<a
        href='https://edurank.org/uni/university-of-lisbon/' target='_blank'>Top 80 in Europe</a>)` "></span></p>
    <p><b>Main Technologies:</b> <span class="typed" data-content="JavaScript, TypeScript, React, Vue"></span></p>
    <p><b>Hobbies:</b> <span class="typed" data-content="Climbing, Running"></span></p>
    <p><b>LinkedIn:</b> <span class="typed" data-content="`<a class='link-wide' href='https://linkedin.com/in/Ruifsferreira'
        target='_blank'>linkedin.com/in/Ruifsferreira</a>`"></span></p>
    <div class="spacer"></div>
    <h2>About this Website:</h2>
    <p>This is my first simple project with Vue (3).</p>
    <p>The goal was to create a simple Task List in order to learn and practice Vue.</p>
  </div>
</template>

<style>
.spacer {
  height: 40px;
}

#canvas-complex {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: #eae8eb;
}

.link-wide {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
