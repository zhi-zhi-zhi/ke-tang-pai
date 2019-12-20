<template>
  <div class="logo">
    <router-link :to="{name:'home-page'}">
      <img src="@/assets/ktp-logo-mainblue.png" style="width: 96px; height: 28px"/>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Logo',
};
</script>
