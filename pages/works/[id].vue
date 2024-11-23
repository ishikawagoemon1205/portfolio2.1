<script setup lang="ts">
import { DBWorkesDate } from '~/DB/works';

const route = useRoute();
const workId = computed(() => route.params.id);
const RefWorkData = computed(() => {
    for (const key in DBWorkesDate) {
        if (Number(DBWorkesDate[key].id) == Number(workId.value)) {
            return DBWorkesDate[key];
        }
    }
});


</script>

<template>
    <div class="w-[100%] h-auto bg-_bgWhite flex justify-center">
        <div class="w-[1024px] h-auto">
            <div class="w-[95%] h-[60px] fixed bg-_bgWhite py-[10px] z-[11]">
                <div class="w-[100%] h-[40px] flex items-center">
                    <div @click="navigateTo('/works')" class="w-[100px] h-[40px] rounded-[4px] flex items-center justify-center shadow-lg hover:bg-_lRed hover:shadow-xl transform transition">
                        <SvgIconsBackIcon></SvgIconsBackIcon>
                    </div>
                </div>
            </div>
            <div class="w-[100%] h-[70px]"></div>
            <div class="w-[100%] h-auto p-[4px]">
                <div class="w-[100%] h-auto p-[20px] bg-_white rounded-[4px] shadow-lg z-[10]">
                    <!-- タイトルエリア -->
                    <div class="w-[100%] h-[50px] flex items-center">
                        <div class="text-[24px] font-bold">{{ RefWorkData?.title}}</div>
                    </div>
                    <div class="w-[100%] h-[30px] flex items-center">
                        <div class="pr-[20px] flex">
                            <h4 class="text-_gray_4">開始日：</h4>
                            <h4 class="text-_gray_4">{{ RefWorkData?.date.start }}</h4>   
                        </div>
                        <div class="pr-[20px] flex">
                            <h4 class="text-_gray_4">終了日：</h4>
                            <h4 class="text-_gray_4">{{ RefWorkData?.date.end }}</h4>   
                        </div>
                        <div class="pr-[20px] flex">
                            <h4 class="text-_gray_4">期間：</h4>
                            <h4 class="text-_gray_4">{{ RefWorkData?.date.duration }}</h4>   
                        </div>
                    </div>
                    <div class="w-[100%] h-[40px] py-[6px] flex">
                        <div
                            v-for="technology in RefWorkData?.technologies" :key="technology"
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
                    <div v-for="work in RefWorkData?.content" class="w-[100%] h-auto">
                        <div v-if="work.type === 'sectionTitle'"class="pt-[30px] pb-[10px] text-[24px] font-bold">
                            {{ work.data }}
                            <div class="w-[100%] h-[1px] mt-[2px] bg-_gray_2"></div>
                        </div>
                        <div v-if="work.type === 'text'"class="py-[6px] text-[16px]">
                            {{ work.data }}
                        </div>
                        <div v-if="work.type === 'image'"class="w-[100%] h-[500px] py-[10px]">
                            <img :src="work.data" class="w-[100%] h-[100%] object-cover">
                        </div>
                        <div v-if="work.type === 'link'"class="py-[6px]">
                            <a :href="work.data.url" target="_blank" class="text-[16px] text-_lRed cursor-pointer hover:underline">{{ work.data.text }}</a>
                        </div>
                        <div v-if="work.type === 'codes'" class="py-[6px]">
                            <div class="p-[10px] text-[14px] bg-_gray_1 rounded-[4px]">
                                <div v-for="code in work.data">
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
