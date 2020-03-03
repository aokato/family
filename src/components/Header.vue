<template>
  <header>
    <div id="logo-container">
      <a href="https://geek-salon.com/">
        <img src="@/assets/geeksalon_icon_white.png" />
      </a>
    </div>
    <router-link to="/">
      <div class="header-component">
        Top
      </div>
    </router-link>
    <router-link to="/events">
      <div class="header-component">
        Events
      </div>
    </router-link>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  header {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    a {
      text-decoration: none;
      color: #2b546a;
      display: inline-block;
    }

    .header-component {
      width: 150px;
      height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      font-weight: bold;
      position: relative;
    }
    .header-component:hover {
      background: rgba(0, 0, 0, 0.1);

      cursor: pointer;
    }
    .header-component::after {
      position: absolute;
      content: "";
      display: block;
      width: 0;
      top: 50px;
      transition: width 0.3s;

      border-bottom: 2px solid #2b546a;
    }

    .header-component:hover::after {
      width: 100%;
    }
    #logo-container {
      width: 70px;
      height: 50px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #40b883;

      img {
        display: inline-block;
        width: 35px;
        height: 35px;
        margin-top: 5px;
        margin-right: 3px;
      }
    }
    #logo-container:hover {
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  header {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    background: red;
    .header-component {
      width: 150px;
      height: 70px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .header-component:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
}
@media screen and (min-width: 350px) and (max-width: 768px) {
  header {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    background: yellow;
    .header-component {
      width: 150px;
      height: 70px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .header-component:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
