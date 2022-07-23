<template>
  <div class="loader">
    <div id="loader" />
  </div>
</template>

<script>
export default {
  name: "spinner"
}
</script>

<style scoped>


#loader {
  position: relative;
  left: calc(30px * -1);
  z-index: 100;
}

#loader:before,
#loader:after {
  content: " ";
  display: table-cell;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  animation-duration: 0.8s;
  animation-name: revolve;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  mix-blend-mode: darken;
}

#loader:before {
  background: hsl(var(--p))
}

#loader:after {
  background: hsl(var(--s));
  animation-delay: calc(0.8s / -2);
}

@keyframes revolve {
  0% {
    left: 0;
  }
  25% {
    transform: scale(calc(1 + 0.2));
  }
  50% {
    left: 30px;
  }
  75% {
    transform: scale(calc(1 - 0.2));
  }
  100% {
    left: 0;
  }
}

</style>
