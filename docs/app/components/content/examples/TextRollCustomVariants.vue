<template>
  <div class="p-4">
    <MTextRoll 
      children="Custom Roll"
      :variants="{
        enter: { initial: { rotateX: 0 }, animate: { rotateX: 180 } },
        exit: { initial: { rotateX: 180 }, animate: { rotateX: 0 } }
      }"
    />
  </div>
</template>