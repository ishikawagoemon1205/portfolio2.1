<script lang="ts">

useHead({
  title: 'テスト完了',
  meta: [
    { name: 'fwefrfr', content: 'Nuxt 3' }
  ]
});

</script>

<template>
  <div>
    <main class="w-full h-hull">
      <!-- スマートフォンで表示しているときに、画面を表示する -->
      <div class="hidden lg:block font-Kosugi w-screen h-screen bg-_bgWhite">
        <NuxtLayout>
          <NuxtPage></NuxtPage>
        </NuxtLayout>
      </div>
      <!-- スマートフォン以外で表示しているとき、エラー文章を表示する -->
      <div class="block lg:hidden font-Kosugi">
        <div class="relative w-screen h-screen">
          <div class="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
            <a-result status="warning" title="このサービスはスマートフォンでは利用できず、PC専用です。スマートフォンにも順次対応予定です。"></a-result>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style>

.font-Kosugi {
  font-family: 'Noto Sans JP', sans-serif;
}

</style>
