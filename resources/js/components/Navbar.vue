<template>
  <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
    <div class="container">
      <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Start Bootstrap</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav mx-auto">
          <router-link class="nav-item px-lg-4" tag="li" to="/" exact activeClass="active">
            <a class="nav-link text-uppercase text-expanded">Home
              <span class="sr-only">(current)</span>
            </a>
          </router-link>
          <router-link to="/about" class="nav-item px-lg-4" tag="li" exact activeClass="active">
            <a class="nav-link text-uppercase text-expanded">About</a>
          </router-link>
          <router-link class="nav-item px-lg-4" to="/products" tag="li" exact activeClass="active">
            <a class="nav-link text-uppercase text-expanded">Products</a>
          </router-link>
          <router-link class="nav-item px-lg-4" to="/store" tag="li" exact activeClass="active">
            <a class="nav-link text-uppercase text-expanded">Store</a>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>