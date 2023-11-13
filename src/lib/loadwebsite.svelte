<script>
</script>

<div id="loaderscreen">
  <div id="loaderindicator" />
</div>

<style>
  #loaderscreen {
    position: fixed;
    width: 100vw;
    height: 100vh;
  }
  #loaderindicator {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%, -50%);
    height: 2px;
    width: 0px;
    animation-name: load;
    animation-duration: 2.5s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    z-index: 2;
  }
  @keyframes load {
    0% {
      width: 0px;
    }
    50% {
      width: 40vw;
      left: 30vw;
      opacity: 1;
      top: 50%;
      height: 2px;
      border-radius: 100px;
    }
    100% {
      top: 0px;
      width: 100%;
      left: 0px;
      height: 100%;
      opacity: 1;
    }
  }
</style>
