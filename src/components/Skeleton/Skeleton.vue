<template>
    <span
      :style="{ height, width: computedWidth }"
      class="SkeletonBox"
    />
 </template>

 
<script lang="ts">
import SkeletonComponent from './SkeletonComponent';
export default SkeletonComponent;
</script>

<style lang="scss">
@import "./Skeleton.scss";
</style>
