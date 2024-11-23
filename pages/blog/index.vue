<script setup lang="ts">
import { DBBlogData } from '~/DB/blog';

useHead({
  title: 'ブログ画面',
  meta: [
    { name: 'fwefrfr', content: 'Nuxt 3' }
  ]
});

onMounted(() => {
    sortProjects("降順");
});

const blogData = ref(Object.values(DBBlogData));
const sortProjects = (property) => {
    let sortedData = [...blogData.value];  // 新しい配列を作成（元のデータを変更しないように）

    if (property === "降順") {
        sortedData.sort((a, b) => new Date(b.date.published) - new Date(a.date.published));  // 降順ソート
    } else if (property === "昇順") {
        sortedData.sort((a, b) => new Date(a.date.published) - new Date(b.date.published));  // 昇順ソート
    }
    // ソートされたデータをrefに再代入
    blogData.value = sortedData;
};

</script>

<template>
    <div class="w-[100%] h-auto bg-_black text-_white flex flex-col items-center">
        <div class="w-[1024px] h-auto">
            <div class="w-[95%] h-[300px] flex justify-center flex-col space-y-[20px]">
                <h2 class="text-[100px] h-[100px] text-_white font-bold">Blog</h2>
                <h2 class="text-[15px] text-_dBlue font-bold">このページでは、これまで学んだ技術や開発経験、実際のプロジェクトで得た知見をシェアしています。フロントエンドからバックエンド、さらには起業時代に培ったビジネス視点を交えながら、エンジニアとしての成長や課題解決のプロセスを記録しています。</h2>
            </div>
            <div class="w-[95%] h-[2px] bg-_gray_4"></div>
            <div class="w-[95%] h-auto py-[50px] px-[4px] space-y-[20px]">
                <div v-for="blog in blogData" :key="blog.id" class="w-[100%] h-[120px] px-[20px] py-[15px] rounded-[6px] bg-_gray_5 transform transition-transform duration-300 ease-in-out hover:scale-110">
                    <NuxtLink :to="{name: 'blog-id' , params: {id: blog.id}}">
                        <div class="w-[100%] h-[100%] flex ">
                            <div class="w-[80%] h-[90px]">
                                <h3 class="text-[30px] text-white font-bold">{{ blog.title }}</h3>
                                <p class="text-[15px]">{{ blog.subtitle }}</p>
                            </div>
                            <div class="w-[20%] h-[90px] pt-[16px] flex flex-col items-end ">
                                <p>作成日：{{ blog.date.published }}</p>
                                <div class="w-[100%] h- flex items-center justify-end">
                                    <div v-for="technology in blog.technologies" :key="blog.id" class="flex items-end">
                                        <div v-if="technology === 'HTML'" class="w-[30px] h-[30px]">
                                            <ProgramIconsHtml />
                                        </div>
                                        <div v-if="technology === 'CSS'" class="w-[30px] h-[30px]">
                                            <ProgramIconsCss />
                                        </div>
                                        <div v-if="technology === 'JavaScript'" class="w-[30px] h-[30px]">
                                            <ProgramIconsJavascript />
                                        </div>
                                        <div v-if="technology === 'TypeScript'" class="w-[30px] h-[30px]">
                                            <ProgramIconsTypescript />
                                        </div>
                                        <div v-if="technology === 'Nuxt.js'" class="w-[30px] h-[30px]">
                                            <ProgramIconsNuxtjs />
                                        </div>
                                        <div v-if="technology === 'React'" class="w-[30px] h-[30px]">
                                            <ProgramIconsReact />
                                        </div>
                                        <div v-if="technology === 'Flutter'" class="w-[30px] h-[30px]">
                                            <ProgramIconsFlutter />
                                        </div>
                                        <div v-if="technology === 'Python'" class="w-[30px] h-[30px]">
                                            <ProgramIconsPython />
                                        </div>
                                        <div v-if="technology === 'Firebase'" class="w-[30px] h-[30px]">
                                            <ProgramIconsFirebase />
                                        </div>
                                        <div v-if="technology === 'AWS'" class="w-[30px] h-[30px]">
                                            <ProgramIconsAws />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>