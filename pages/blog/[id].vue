<script setup lang="ts">
import { DBBlogData } from '~/DB/blog';

const route = useRoute();
const blogId = computed(() => route.params.id);
const RefBlogData = computed(() => {
    for (const key in DBBlogData) {
        if (Number(DBBlogData[key].id) == Number(blogId.value)) {
            return DBBlogData[key];
        }
    }
});

</script>

<template>
    <div class="w-[100%] h-auto bg-_black flex justify-center">
        <div class="w-[1024px] h-[300vh]">
            <div class="w-[95%] h-[60px] fixed bg-_black py-[10px] z-[11]">
                <div class="w-[100%] h-[40px] flex items-center">
                    <div @click="navigateTo('/blog')" class="w-[100px] h-[40px] rounded-[4px] bg-_gray_5 flex items-center justify-center shadow-lg hover:bg-_lRed hover:shadow-xl transform transition">
                        <SvgIconsBackIcon></SvgIconsBackIcon>
                    </div>
                </div>
            </div>
            <div class="w-[100%] h-[70px]"></div>
            <div class="w-[100%] h-auto p-[4px]">
                <div class="w-[100%] h-auto p-[20px] bg-_gray_5 text-_white rounded-[4px] shadow-lg z-[10]">
                    <!-- タイトルエリア -->
                    <div class="w-[100%] h-[50px] flex items-center">
                        <div class="text-[24px] font-bold text-_white">{{ RefBlogData?.title}}</div>
                    </div>
                    <div class="w-[100%] h-[30px] flex items-center">
                        <div class="pr-[20px] flex">
                            <h4 class="text-_white">作成日：</h4>
                            <h4 class="text-_white">{{ RefBlogData?.date.published }}</h4>   
                        </div>
                    </div>
                    <div class="w-[100%] h-[40px] py-[6px] flex">
                        <div
                            v-for="technology in RefBlogData?.technologies" :key="technology"
                            class="w-[30px] h-[30px] flex items-center justify-center"
                        >
                            <ProgramIconsHtml v-if="technology === 'HTML'" />
                            <ProgramIconsCss v-if="technology === 'CSS'" />
                            <ProgramIconsJavascript v-if="technology === 'JavaScript'" />
                            <ProgramIconsTypescript v-if="technology === 'TypeScript'" />
                            <ProgramIconsNuxtjs v-if="technology === 'Nuxt.js'" />
                            <ProgramIconsReact v-if="technology === 'React'" />
                            <ProgramIconsFlutter v-if="technology === 'Flutter'" />
                            <ProgramIconsPython v-if="technology === 'Python'" />
                            <ProgramIconsFirebase v-if="technology === 'Firebase'" />
                            <ProgramIconsAws v-if="technology === 'AWS'" />
                        </div>
                    </div>
                    <div class="w-[100%] h-[20px]"></div>
                    <!-- contents -->
                    <div v-for="blog in RefBlogData?.content" class="w-[100%] h-auto">
                        <div v-if="blog.type === 'sectionTitle'"class="pt-[30px] pb-[10px] text-[24px] font-bold">
                            {{ blog.data }}
                            <div class="w-[100%] h-[1px] mt-[2px] bg-_gray_2"></div>
                        </div>
                        <div v-if="blog.type === 'text'"class="py-[6px] text-[16px]">
                            {{ blog.data }}
                        </div>
                        <div v-if="blog.type === 'image'"class="w-[100%] h-[500px] py-[10px]">
                            <img :src="blog.data" class="w-[100%] h-[100%] object-cover">
                        </div>
                        <div v-if="blog.type === 'link'"class="py-[6px]">
                            <a :href="blog.data.url" target="_blank" class="text-[16px] text-_lRed cursor-pointer hover:underline">{{ work.data.text }}</a>
                        </div>
                        <div v-if="blog.type === 'codes'" class="py-[6px]">
                            <div class="p-[10px] text-[14px] bg-_black text-_gray_1 rounded-[4px]">
                                <div v-for="code in blog.data">
                                    <p class="font-bold">{{ code }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>