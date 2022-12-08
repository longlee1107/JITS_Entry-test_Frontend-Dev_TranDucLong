<template>
  <a-carousel class="w-[95%] mx-auto" autoplay>
    <div v-for="item in imgList" :key="item.id">
      <img :src="item.download_url" />
    </div>
  </a-carousel>
</template>
<script>
export default {
  props: {
    imgList: {
      type: Array,
      default: null,
    },
  },
  mounted() {
    console.log(this.imgList)
  },
};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 200px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
