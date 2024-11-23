<script setup lang="ts">
import { DBProjectData } from '~/DB/projectes';

const route = useRoute();
const projectId = computed(() => route.params.id);
const RefProjectData = computed(() => {
    for (const key in DBProjectData) {
        if (Number(DBProjectData[key].id) == Number(projectId.value)) {
            return DBProjectData[key];
        }
    }
});


</script>

<template>
    <div class="w-[100%] h-auto bg-_bgWhite flex justify-center">
        <div class="w-[1024px] h-auto">
            <div class="w-[95%] h-[60px] fixed bg-_bgWhite py-[10px] z-[11]">
                <div class="w-[100%] h-[40px] flex items-center">
                    <div @click="navigateTo('/projects')" class="w-[100px] h-[40px] rounded-[4px] flex items-center justify-center shadow-lg hover:bg-_lRed hover:shadow-xl transform transition">
                        <SvgIconsBackIcon></SvgIconsBackIcon>
                    </div>
                </div>
            </div>
            <div class="w-[100%] h-[70px]"></div>
            <div class="w-[100%] h-auto p-[4px]">
                <div class="w-[100%] h-auto p-[20px] bg-_white rounded-[4px] shadow-lg z-[10]">
                    <!-- タイトルエリア -->
                    <div class="w-[100%] h-[20px]">
                        <div class="text-[12px] font-bold">{{ RefProjectData?.companyname }}</div>
                    </div>
                    <div class="w-[100%] h-[50px] flex items-center">
                        <div class="text-[24px] font-bold">{{ RefProjectData?.title}}</div>
                    </div>
                    <div class="w-[100%] h-[30px] flex items-center">
                        <div class="pr-[20px] flex">
                            <h4 class="text-_gray_4">開始日：</h4>
                            <h4 class="text-_gray_4">{{ RefProjectData?.date.start }}</h4>   
                        </div>
                        <div class="pr-[20px] flex">
                            <h4 class="text-_gray_4">終了日：</h4>
                            <h4 class="text-_gray_4">{{ RefProjectData?.date.end }}</h4>   
                        </div>
                        <div class="pr-[20px] flex">
                            <h4 class="text-_gray_4">期間：</h4>
                            <h4 class="text-_gray_4">{{ RefProjectData?.date.duration }}</h4>   
                        </div>
                    </div>
                    <div class="w-[100%] h-[30px] flex items-center">
                        <div class="pr-[20px] flex">
                            <h4 class="text-_gray_4">社員規模：</h4>
                            <h4 class="text-_gray_4">{{ RefProjectData?.teamSize }}</h4>   
                        </div>
                        <div class="pr-[20px] flex">
                            <h4 class="text-_gray_4">技術度：</h4>
                            <h4 class="text-_gray_4">{{ RefProjectData?.impactLevel }}</h4>   
                        </div>
                    </div>
                    <div class="w-[100%] h-[30px] flex items-center">
                        <div class="pr-[20px] flex">
                            <h4 class="text-_gray_4">フェーズ：</h4>
                            <div v-for="phase in RefProjectData?.phases">
                                <h4 class="text-_gray pr-[10px]">{{ phase }}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="w-[100%] h-[40px] py-[6px] flex">
                        <div
                            v-for="technology in RefProjectData?.technologies" :key="technology"
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
                    <div v-for="content in RefProjectData?.content" class="w-[100%] h-auto">
                        <div v-if="content.type === 'sectionTitle'"class="pt-[30px] pb-[10px] text-[24px] font-bold">
                            {{ content.data }}
                            <div class="w-[100%] h-[1px] mt-[2px] bg-_gray_2"></div>
                        </div>
                        <div v-if="content.type === 'text'"class="py-[6px] text-[16px]">
                            {{ content.data }}
                        </div>
                        <div v-if="content.type === 'image'"class="w-[100%] h-[500px] py-[10px]">
                            <img :src="content.data" class="w-[100%] h-[100%] object-cover">
                        </div>
                        <div v-if="content.type === 'link'"class="py-[6px]">
                            <a :href="content.data" target="_blank" class="text-[16px] text-_lRed cursor-pointer hover:underline">{{ content.alt }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
