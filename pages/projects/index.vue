<script setup lang="ts">
import { DBProjectData } from '~/DB/projectes';
const { $gsap, $ScrollTrigger } = useNuxtApp();

// -----
// ライフサイクルフック
// -----

    onMounted(() => {
        nextTick(() => {
            $gsap.set(".cards", { y: 10, opacity: 0, });
            $ScrollTrigger.batch(".cards", {
                batchMax: 4,
                onEnter: batch => $gsap.to( batch, { y: 0, opacity: 2, stagger: 0.15, }),
                onLeaveBack: batch => $gsap.to( batch, { y: 10, opacity: 2, stagger: 0.15, }),
                start: 'top 75%',
                end: 'bottom 25%',
            });
        })
        sortProjects("降順");
    });

// -----
// ソートボタンのスタイル
// -----

    const selectedSortButtonStyle = reactive({
        button1: {
            enabled: true,
            color: computed(() => {
                return selectedSortButtonStyle.button1.enabled ? "#FF406E" : "#D0D0D0";
            }),
        },
        button2: {
            enabled: false,
            color: computed(() => {
                return selectedSortButtonStyle.button2.enabled ? "#FF406E" : "#D0D0D0";
            }),
        }
    })

    const selectedSortButtonHandler = (name: string) => {
        if (name === "降順") {
            selectedSortButtonStyle.button1.enabled = true;
            selectedSortButtonStyle.button2.enabled = false;
            sortProjects("降順");
        } else if (name === "昇順") {
            selectedSortButtonStyle.button1.enabled = false;
            selectedSortButtonStyle.button2.enabled = true;
            sortProjects("昇順");
        };
    };

// -----
// profileデータ
// -----

    // projectDataをrefでリアクティブに保持
    const projectData = ref(Object.values(DBProjectData));

    // ソート関数
    const sortProjects = (property) => {
        let sortedData = [...projectData.value];  // 新しい配列を作成（元のデータを変更しないように）

        if (property === "降順") {
            sortedData.sort((a, b) => new Date(b.date.start) - new Date(a.date.start));  // 降順ソート
        } else if (property === "昇順") {
            sortedData.sort((a, b) => new Date(a.date.start) - new Date(b.date.start));  // 昇順ソート
        }
        // ソートされたデータをrefに再代入
        projectData.value = sortedData;
    };
    
</script>

<template>
    <div class="w-[100%] h-auto flex flex-col items-center">
        <div class="w-[1024px] h-auto">
            <div class="w-[100%] h-[50px] px-[10px] fixed flex items-center bg-_bgWhite z-[10] space-x-[10px]">
                <div class="text-_gray_4">参画時期：</div>
                <button @click="selectedSortButtonHandler('降順');" 
                    class="w-[100px] h-[30px] border-solid border-2 rounded-[4px] border-_gray_2" 
                    :style="{
                        color: selectedSortButtonStyle.button1.color,
                        borderColor: selectedSortButtonStyle.button1.color,
                        }">降順
                </button>
                <button @click="selectedSortButtonHandler('昇順');" 
                    class="w-[100px] h-[30px] border-solid border-2 rounded-[4px] border-_gray_2 text-_gray_2 hover:border-_lRed hover:text-_lRed"
                    :style="{
                        color: selectedSortButtonStyle.button2.color,
                        borderColor: selectedSortButtonStyle.button2.color,
                        }">昇順
                </button>
            </div>
            <div class="w-[100%] pt-[40px] h-auto">
                <div class="container mx-auto p-[10px]">
                    <!-- カードを等間隔で配置するグリッド -->
                    <div class="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- カード -->
                        <div v-for="project in projectData" :key="project.id">
                            <NuxtLink :to="{name: 'projects-id' , params: {id: project.id}}">
                                <div  class="p-[14px] w-[320px] h-[250px] text-_black rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-110">
                                    <div class="w-[100%] h-[80px]">
                                        <img class="w-[100%] h-[80px] object-cover" :src="project.images[0].src">
                                    </div>
                                    <div class="w-[100%] h-[30px] flex items-center justify-start">
                                        <div class="text-[14px] font-bold">{{ project.title }}</div>
                                    </div>
                                    <div class="w-[100%] h-[20px] flex items-center justify-start">
                                        <div class="text-[12px] text-_gray_4">企業名：{{ project.companyname }}</div>
                                    </div>
                                    <div class="w-[100%] h-[20px] flex items-center justify-start">
                                        <div class="w-[60%] h-[20px] flex items-center justify-start">
                                            <div class="text-[12px] text-_gray_4">参画開始日：{{ project.date.start }}</div>
                                        </div>
                                        <div class="w-[40%] h-[20px] flex items-center justify-start">
                                            <div class="text-[12px] text-_gray_4">期間：{{ project.date.duration }}</div>
                                        </div>
                                    </div>
                                    <div class="w-[100%] h-[20px] flex items-center justify-start">
                                        <div class="w-[60%] h-[20px] flex items-center justify-start">
                                            <div class="text-[12px] text-_gray_4">社員規模：{{ project.teamSize }}</div>
                                        </div>
                                        <div class="w-[40%] h-[20px] flex items-center justify-start">
                                            <div class="text-[12px] text-_gray_4">技術度：{{ project.impactLevel }}</div>
                                        </div>
                                    </div>
                                    <div class="w-[100%] h-[20px] flex items-center justify-start">
                                        <div class="w-[65px] h-[20px]">
                                            <div class="text-[12px] text-_gray_4">フェーズ：</div>
                                        </div>
                                        <div v-for="phase in project.phases" class="pr-[10px]">
                                            <div class="whitespace-nowrap text-[12px] text-_gray_4">{{ phase }}</div>
                                        </div>
                                    </div>
                                    <div class="w-[100%] h-[40px] flex items-center justify-start">
                                        <div v-for="technology in project.technologies">
                                            <div class="w-[100%] h-[30px] flex items-center justify-start">
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
        </div>
    </div>
</template>