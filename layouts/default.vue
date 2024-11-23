<script setup lang="ts">
import type { NavItemProperties } from './interface.ts';

const { $gsap , $ScrollTrigger } = useNuxtApp();


useHead({
  title: 'ブログ画面',
  meta: [
    { name: 'fwefrfr', content: 'Nuxt 3' }
  ]
});

// -----
// gsap
// -----

    const pagesContentsRef = ref();
    const pageNavigationWidthRef = ref(0); 

// -----
// useRouter
// -----

    const router = useRouter();

// -----
// ライフサイクルフック
// -----    

    onMounted( () => {
        initPosition();
        setupScrollTrigger();
    });

// -----
// スクロール時にスライドバーの設定を行う処理
// -----   

    const setupScrollTrigger = () => {
        $gsap.to(pageNavigationWidthRef, {
            // value: window.innerWidth,
            scrollTrigger: { //ここおかしい
                trigger: pagesContentsRef.value,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                onUpdate: (self) => {
                    const newWidth = (self.progress * (window.innerWidth));
                    pageNavigationWidthRef.value = newWidth;
                },
            }
        });
    };

// ページ切り替え時に、スライドバーの設定をリセットする処理
    router.beforeEach((to, from, next) => {
        $ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        pageNavigationWidthRef.value = 0;
        nextTick(() => {
            setupScrollTrigger();
        });
        next();
    });

// ページ遷移後にスクロール位置をリセットする処理
    router.afterEach(() => {
        window.scrollTo(0, 0);
    });

// pagesContentsRefの変更を監視してScrollTriggerを再設定
    watch(pagesContentsRef, () => {
        nextTick(() => {
            $ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            setupScrollTrigger();
        });
    });

// -----
// 画面読込時に、ブログ検索要素を画面の外側に配置する
// -----

    const initPosition = (): void => {
        $gsap.set('.searchItems', { x: window.innerWidth });
    }

// -----
// 虫眼鏡ボタンを押すとブログが検索機能が表示される機能
// -----

    const showSearch:Ref = ref(false);

    const enableSearch = ():void => {
        showSearch.value = !showSearch.value;
        $gsap.to('.searchItems' , {
            x: 0,
            duration: 0.5,
            ease: "power2.out"
        });
        $gsap.to('.navbarItems' , {
            x: window.innerWidth
        });
        nextTick(() => {
            document.getElementById('focusSearch')?.focus();
        });
    };

// -----
// 検索機能を閉じる機能
// -----

    const disabledSearch = ():void => {
        showSearch.value = false;
        searchInput.value = '';
        // $gsap.to('.navbarItems',{
        //     x:0,
        //     duration: 0.1,
        // });
        // $gsap.to('.searchItems' , {
        //     x: window.innerWidth
        // });
        $gsap.to('.searchItems', {
            x: window.innerWidth,
            duration: 0.5,
            ease: "power2.out"
        });
            $gsap.to('.navbarItems', {
            x: 0
        });
    }

// -----
// ブログ検索機能
// -----

    const searchInput:Ref = ref('')

// -----
// navbar内の各プロパティ
// -----

    const mouseoverNavItem = (navItemName:string) =>  {
        navItemProperties.navItems[navItemName].property.isHovered = true;
    };

    const mouseleaveNavItem = (navItemName:string) => {
        navItemProperties.navItems[navItemName].property.isHovered = false;
    }

    const navItemProperties:any = reactive<NavItemProperties>({
        mode: computed(() => {
            const arrayWhitePage:Array<string> = ['/home','/projects',"/works","/contact","/resume"];
            const arrayBlackPage:Array<string> = ['/profile','/blog'];
            const isPathMatch = (pathArray: Array<string>, currentPath: string): boolean => {
                return pathArray.some(path => currentPath.startsWith(path));
            }
            if (isPathMatch(arrayWhitePage, router.currentRoute.value.path as string)) {
                return "whitemode";
            } else if (isPathMatch(arrayBlackPage, router.currentRoute.value.path as string)) {
                return "darkmode";
            }
            return "whitemode";
        }),
        currentPage: computed(() => {
            return router.currentRoute.value.path;
        }),
        background: computed(() => {
            if(navItemProperties.mode === 'whitemode'){
                return "#ffffff";
            }else if(navItemProperties.mode === 'darkmode'){
                return "#000000";
            }
            return "#ffffff";
        }),
        searchArea: false,
        searchAreaBackground: computed(() => {
            if(navItemProperties.mode === 'whitemode'){
                return "#F2F2F2";
            }else if(navItemProperties.mode === 'darkmode'){
                return "#4E4E4E";
            }
            return "#ffffff";
        }),
        navbarAreaUnderbarBackground: computed(() => {
            if(navItemProperties.mode === 'whitemode'){
                return "#F2F2F2";
            }else if(navItemProperties.mode === 'darkmode'){
                return "#4E4E4E";
            }
            return "#ffffff";
        }),
        slidebarBackground:  computed(() => {
            if(navItemProperties.mode === 'whitemode'){
                return "#FF406E";
            }else if(navItemProperties.mode === 'darkmode'){
                return "#5CD8FF";
            }
            return "#ffffff";
        }),
        navItems: {
            home: {
                property: {
                    name: "ホーム",
                    path: "/home",
                    isSelected: computed(() => {
                        return router.currentRoute.value.path === '/home';
                    }),
                    isHovered: false,
                },
                style: {
                    text: computed(():string => {
                        if(navItemProperties.mode === 'whitemode'){
                            if(navItemProperties.navItems.home.property.isSelected){
                                return "#000000";
                            }else if(!navItemProperties.navItems.home.property.isSelected){
                                return navItemProperties.navItems.home.property.isHovered ? "#000000" : "#CDCDCD";
                            }
                        }else if(navItemProperties.mode === 'darkmode'){
                            if(navItemProperties.navItems.home.property.isSelected){
                                return "#ffffff";
                            }else if(!navItemProperties.navItems.home.property.isSelected){
                                return navItemProperties.navItems.home.property.isHovered ? "#ffffff" : "#7B7B7B";
                            }
                        }
                        return "#000000";
                    }),
                    underbar: computed(():any => {
                        if(navItemProperties.mode === 'whitemode'){
                            if(navItemProperties.navItems.home.property.isSelected){
                                return "#FF406E";
                            }else if(!navItemProperties.navItems.home.property.isSelected){
                                return navItemProperties.navItems.home.property.isHovered ? "#CDCDCD" : "#F2F2F2";
                            }
                        }else if(navItemProperties.mode === 'darkmode'){
                            if(navItemProperties.navItems.home.property.isSelected){
                                return "#ffffff";
                            }else if(!navItemProperties.navItems.home.property.isSelected){
                                return navItemProperties.navItems.home.property.isHovered ? "#D0D0D0" : "#7B7B7B";
                            }
                        }
                        return "#000000";
                    }),
                },
            },
            profile: {
                property: {
                    name: "プロフィール",  
                    path: "/profile",
                    isSelected: computed(() => {
                        return router.currentRoute.value.path === '/profile';
                    }),
                    isHovered: false,
                },
                style: {
                    text: computed(():string => {
                        if(navItemProperties.mode === 'whitemode'){
                            if(navItemProperties.navItems.profile.property.isSelected){
                                return "#000000";
                            }else if(!navItemProperties.navItems.profile.property.isSelected){
                                return navItemProperties.navItems.profile.property.isHovered ? "#000000" : "#CDCDCD";
                            }
                        }else if(navItemProperties.mode === 'darkmode'){
                            if(navItemProperties.navItems.profile.property.isSelected){
                                return "#ffffff";
                            }else if(!navItemProperties.navItems.profile.property.isSelected){
                                return navItemProperties.navItems.profile.property.isHovered ? "#ffffff" : "#7B7B7B";
                            }
                        }
                        return "#000000";
                    }),
                    underbar: computed(():string => {
                        if(navItemProperties.mode === 'whitemode'){
                            if(navItemProperties.navItems.profile.property.isSelected){
                                return "#5CD8FF";
                            }else if(!navItemProperties.navItems.profile.property.isSelected){
                                return navItemProperties.navItems.profile.property.isHovered ? "#CDCDCD" : "#F2F2F2";
                            }
                        }else if(navItemProperties.mode === 'darkmode'){
                            if(navItemProperties.navItems.profile.property.isSelected){
                                return "#5CD8FF";
                            }else if(!navItemProperties.navItems.profile.property.isSelected){
                                return navItemProperties.navItems.profile.property.isHovered ? "#D0D0D0" : "#7B7B7B";
                            }
                        };
                        return "#000000";
                    }),
                }
            },
            projects: {
                property: {
                    name: "プロジェクト",  
                    path: "/projects",
                    isSelected: computed(() => {
                        return router.currentRoute.value.path === '/projects';
                    }),
                    isHovered: false,
                },
                style: {
                    text: computed(():string => {
                        if(navItemProperties.mode === 'whitemode'){
                            if(navItemProperties.navItems.projects.property.isSelected){
                                return "#000000";
                            }else if(!navItemProperties.navItems.projects.property.isSelected){
                                return navItemProperties.navItems.projects.property.isHovered ? "#000000" : "#CDCDCD";
                            }
                        }else if(navItemProperties.mode === 'darkmode'){
                            if(navItemProperties.navItems.projects.property.isSelected){
                                return "#ffffff";
                            }else if(!navItemProperties.navItems.projects.property.isSelected){
                                return navItemProperties.navItems.projects.property.isHovered ? "#ffffff" : "#7B7B7B";
                            }
                        }
                        return "#000000";
                    }),
                    underbar: computed(():string => {
                        if(navItemProperties.mode === 'whitemode'){
                            if(navItemProperties.navItems.projects.property.isSelected){
                                return "#FF406E";
                            }else if(!navItemProperties.navItems.projects.property.isSelected){
                                return navItemProperties.navItems.projects.property.isHovered ? "#CDCDCD" : "#F2F2F2";
                            }
                        }else if(navItemProperties.mode === 'darkmode'){
                            if(navItemProperties.navItems.projects.property.isSelected){
                                return "#5CD8FF";
                            }else if(!navItemProperties.navItems.projects.property.isSelected){
                                return navItemProperties.navItems.projects.property.isHovered ? "#D0D0D0" : "#7B7B7B";
                            }
                        };
                        return "#000000";
                    }),
                }
            },
            works: {
                property: {
                    name: "制作物",
                    path: "/works",
                    isSelected: computed(() => {
                        return router.currentRoute.value.path === '/works';
                    }),
                    isHovered: false,
                },
                style: {
                    text: computed(():string => {
                        if(navItemProperties.mode === 'whitemode'){
                            if(navItemProperties.navItems.works.property.isSelected){
                                return "#000000";
                            }else if(!navItemProperties.navItems.works.property.isSelected){
                                return navItemProperties.navItems.works.property.isHovered ? "#000000" : "#CDCDCD";
                            }
                        }else if(navItemProperties.mode === 'darkmode'){
                            if(navItemProperties.navItems.works.property.isSelected){
                                return "#ffffff";
                            }else if(!navItemProperties.navItems.works.property.isSelected){
                                return navItemProperties.navItems.works.property.isHovered ? "#ffffff" : "#7B7B7B";
                            }
                        }
                        return "#000000";
                    }),
                    underbar: computed(():any => {
                        if(navItemProperties.mode === 'whitemode'){
                            if(navItemProperties.navItems.works.property.isSelected){
                                return "#FF406E";
                            }else if(!navItemProperties.navItems.works.property.isSelected){
                                return navItemProperties.navItems.works.property.isHovered ? "#CDCDCD" : "#F2F2F2";
                            }
                        }else if(navItemProperties.mode === 'darkmode'){
                            if(navItemProperties.navItems.works.property.isSelected){
                                return "#ffffff";
                            }else if(!navItemProperties.navItems.works.property.isSelected){
                                return navItemProperties.navItems.works.property.isHovered ? "#D0D0D0" : "#7B7B7B";
                            }
                        }
                        return "#000000";
                    }),
                },
            },
            blog: {
                property: {
                    name: "ブログ",  
                    path: "/blog",
                    isSelected: computed(() => {
                        return router.currentRoute.value.path === '/blog';
                    }),
                    isHovered: false,
                },
                style: {
                    text: computed(():string => {
                        if(navItemProperties.mode === 'whitemode'){
                            if(navItemProperties.navItems.blog.property.isSelected){
                                return "#000000";
                            }else if(!navItemProperties.navItems.blog.property.isSelected){
                                return navItemProperties.navItems.blog.property.isHovered ? "#000000" : "#CDCDCD";
                            }
                        }else if(navItemProperties.mode === 'darkmode'){
                            if(navItemProperties.navItems.blog.property.isSelected){
                                return "#ffffff";
                            }else if(!navItemProperties.navItems.blog.property.isSelected){
                                return navItemProperties.navItems.blog.property.isHovered ? "#ffffff" : "#7B7B7B";
                            }
                        }
                        return "#000000";
                    }),
                    underbar: computed(():string => {
                        if(navItemProperties.mode === 'whitemode'){
                            if(navItemProperties.navItems.blog.property.isSelected){
                                return "#5CD8FF";
                            }else if(!navItemProperties.navItems.blog.property.isSelected){
                                return navItemProperties.navItems.blog.property.isHovered ? "#CDCDCD" : "#F2F2F2";
                            }
                        }else if(navItemProperties.mode === 'darkmode'){
                            if(navItemProperties.navItems.blog.property.isSelected){
                                return "#5CD8FF";
                            }else if(!navItemProperties.navItems.blog.property.isSelected){
                                return navItemProperties.navItems.blog.property.isHovered ? "#D0D0D0" : "#7B7B7B";
                            }
                        };
                        return "#000000";
                    }),
                }
            },
            contact: {
                property: {
                    name: "お問い合わせ",
                    path: "/contact",
                    isSelected: computed(() => {
                        return router.currentRoute.value.path === '/contact';
                    }),
                    isHovered: false,
                },
                style: {
                    text: computed(():string => {
                        if(navItemProperties.mode === 'whitemode'){
                            if(navItemProperties.navItems.contact.property.isSelected){
                                return "#000000";
                            }else if(!navItemProperties.navItems.contact.property.isSelected){
                                return navItemProperties.navItems.contact.property.isHovered ? "#000000" : "#CDCDCD";
                            }
                        }else if(navItemProperties.mode === 'darkmode'){
                            if(navItemProperties.navItems.contact.property.isSelected){
                                return "#ffffff";
                            }else if(!navItemProperties.navItems.contact.property.isSelected){
                                return navItemProperties.navItems.contact.property.isHovered ? "#ffffff" : "#7B7B7B";
                            }
                        }
                        return "#000000";
                    }),
                    underbar: computed(():any => {
                        if(navItemProperties.mode === 'whitemode'){
                            if(navItemProperties.navItems.contact.property.isSelected){
                                return "#FF406E";
                            }else if(!navItemProperties.navItems.contact.property.isSelected){
                                return navItemProperties.navItems.contact.property.isHovered ? "#CDCDCD" : "#F2F2F2";
                            }
                        }else if(navItemProperties.mode === 'darkmode'){
                            if(navItemProperties.navItems.contact.property.isSelected){
                                return "#ffffff";
                            }else if(!navItemProperties.navItems.contact.property.isSelected){
                                return navItemProperties.navItems.contact.property.isHovered ? "#D0D0D0" : "#7B7B7B";
                            }
                        }
                        return "#000000";
                    }),
                },
            },
            resume: {
                property: {
                    name: "履歴書",
                    path: "/resume",
                    isSelected: computed(() => {
                        return router.currentRoute.value.path === '/resume';
                    }),
                    isHovered: false,
                },
                style: {
                    text: computed(():string => {
                        if(navItemProperties.mode === 'whitemode'){
                            if(navItemProperties.navItems.resume.property.isSelected){
                                return "#000000";
                            }else if(!navItemProperties.navItems.resume.property.isSelected){
                                return navItemProperties.navItems.resume.property.isHovered ? "#000000" : "#CDCDCD";
                            }
                        }else if(navItemProperties.mode === 'darkmode'){
                            if(navItemProperties.navItems.resume.property.isSelected){
                                return "#ffffff";
                            }else if(!navItemProperties.navItems.resume.property.isSelected){
                                return navItemProperties.navItems.resume.property.isHovered ? "#ffffff" : "#7B7B7B";
                            }
                        }
                        return "#000000";
                    }),
                    underbar: computed(():any => {
                        if(navItemProperties.mode === 'whitemode'){
                            if(navItemProperties.navItems.resume.property.isSelected){
                                return "#FF406E";
                            }else if(!navItemProperties.navItems.resume.property.isSelected){
                                return navItemProperties.navItems.resume.property.isHovered ? "#CDCDCD" : "#F2F2F2";
                            }
                        }else if(navItemProperties.mode === 'darkmode'){
                            if(navItemProperties.navItems.resume.property.isSelected){
                                return "#ffffff";
                            }else if(!navItemProperties.navItems.resume.property.isSelected){
                                return navItemProperties.navItems.resume.property.isHovered ? "#D0D0D0" : "#7B7B7B";
                            }
                        }
                        return "#000000";
                    }),
                },
            },
        }}
    )

    const changePage = async (path:string) => { 
        await router.push(path);
        pageNavigationWidthRef.value = 0;
    }

</script>

<template>
    <div class="fixed w-[100%] h-[2px] z-[1000] bg-[#008000] transition-all duration-500 ease-in-out" :style="{backgroundColor: navItemProperties.background}">
        <div class="absolute top-0 left-0 h-full bg-_lRed" 
            :style="{
                width: pageNavigationWidthRef + 'px',
                backgroundColor: navItemProperties.slidebarBackground
            }"></div>
    </div>
    <div class="w-[100%] h-[40px] mt-[2px] z-[1000] flex justify-center fixed transition-all duration-500 ease-in-out"
        :class="[showSearch ? 'bg-_gray_3' : 'bg-_bgWhite']"
        :style="{backgroundColor: navItemProperties.background}">
        <div 
            v-show="!showSearch"
            class="navbarItems w-[1024px] h-[40px] pt-[5px] pb-[5px] px-[20px] flex items-end space-x-[40px] relative transition-all duration-500 ease-in-out"
            >
            <SvgIconsIcon class="w-[20px] h-[26px]"></SvgIconsIcon>
            <div>
                <!-- HOME -->
                <div @mouseover="mouseoverNavItem('home')" @mouseleave="mouseleaveNavItem('home')" class="h-[100%] inline-block px-[10px] relative" style="bottom: -5px; cursor: pointer;">
                    <div @click="changePage(navItemProperties.navItems.home.property.path)">
                        <div>
                            <div class="mt-[6px] text-[12px] font-bold whitespace-nowrap"
                                :style="{color: navItemProperties.navItems.home.style.text}">{{ navItemProperties.navItems.home.property.name }}</div>
                            <div class="w-[100%] h-[2px] mt-[6px]"
                                :style="{backgroundColor: navItemProperties.navItems.home.style.underbar}"></div>
                        </div>
                    </div>
                </div>
                <!-- PROFILE -->
                <div  @mouseover="mouseoverNavItem('profile')" @mouseleave="mouseleaveNavItem('profile')"  class="h-[100%] inline-block px-[10px] relative" style="bottom: -5px; cursor: pointer;">
                    <div @click="changePage(navItemProperties.navItems.profile.property.path)">
                        <div>
                            <div class="mt-[6px] text-[12px] font-bold whitespace-nowrap"
                                :style="{color: navItemProperties.navItems.profile.style.text}">{{ navItemProperties.navItems.profile.property.name }}</div>
                            <div class="w-[100%] h-[2px] mt-[6px]"
                                :style="{backgroundColor: navItemProperties.navItems.profile.style.underbar}"></div>
                        </div>
                    </div>
                </div>
                <!-- PROJECT -->
                <div  @mouseover="mouseoverNavItem('projects')" @mouseleave="mouseleaveNavItem('projects')"  class="h-[100%] inline-block px-[10px] relative" style="bottom: -5px; cursor: pointer;">
                    <div @click="changePage(navItemProperties.navItems.projects.property.path)">
                        <div>
                            <div class="mt-[6px] text-[12px] font-bold whitespace-nowrap"
                                :style="{color: navItemProperties.navItems.projects.style.text}">{{ navItemProperties.navItems.projects.property.name }}</div>
                            <div class="w-[100%] h-[2px] mt-[6px]"
                                :style="{backgroundColor: navItemProperties.navItems.projects.style.underbar}"></div>
                        </div>
                    </div>
                </div>
                <!-- WORK -->
                <div @mouseover="mouseoverNavItem('works')" @mouseleave="mouseleaveNavItem('works')" class="h-[100%] inline-block px-[10px] relative" style="bottom: -5px; cursor: pointer;">
                    <div @click="changePage(navItemProperties.navItems.works.property.path)">
                        <div>
                            <div class="mt-[6px] text-[12px] font-bold whitespace-nowrap"
                                :style="{color: navItemProperties.navItems.works.style.text}">{{ navItemProperties.navItems.works.property.name }}</div>
                            <div class="w-[100%] h-[2px] mt-[6px]"
                                :style="{backgroundColor: navItemProperties.navItems.works.style.underbar}"></div>
                        </div>
                    </div>
                </div>
                <!-- BLOG -->
                <div @mouseover="mouseoverNavItem('blog')" @mouseleave="mouseleaveNavItem('blog')" class="h-[100%] inline-block px-[10px] relative" style="bottom: -5px; cursor: pointer;">
                    <div @click="changePage(navItemProperties.navItems.blog.property.path)">
                        <div>
                            <div class="mt-[6px] text-[12px] font-bold whitespace-nowrap"
                                :style="{color: navItemProperties.navItems.blog.style.text}">{{ navItemProperties.navItems.blog.property.name }}</div>
                            <div class="w-[100%] h-[2px] mt-[6px]"
                                :style="{backgroundColor: navItemProperties.navItems.blog.style.underbar}"></div>
                        </div>
                    </div>
                </div>
                <!-- CONTACT -->
                <div @mouseover="mouseoverNavItem('contact')" @mouseleave="mouseleaveNavItem('contact')" class="h-[100%] inline-block px-[10px] relative" style="bottom: -5px; cursor: pointer;">
                    <div @click="changePage(navItemProperties.navItems.contact.property.path)">
                        <div>
                            <div class="mt-[6px] text-[12px] font-bold whitespace-nowrap"
                                :style="{color: navItemProperties.navItems.contact.style.text}">{{ navItemProperties.navItems.contact.property.name }}</div>
                            <div class="w-[100%] h-[2px] mt-[6px]"
                                :style="{backgroundColor: navItemProperties.navItems.contact.style.underbar}"></div>
                        </div>
                    </div>
                </div>
                <!-- RESUME -->
                <div @mouseover="mouseoverNavItem('resume')" @mouseleave="mouseleaveNavItem('resume')" class="h-[100%] inline-block px-[10px] relative" style="bottom: -5px; cursor: pointer;">
                    <div @click="changePage(navItemProperties.navItems.resume.property.path)">
                        <div>
                            <div class="mt-[6px] text-[12px] font-bold whitespace-nowrap"
                                :style="{color: navItemProperties.navItems.resume.style.text}">{{ navItemProperties.navItems.resume.property.name }}</div>
                            <div class="w-[100%] h-[2px] mt-[6px]"
                                :style="{backgroundColor: navItemProperties.navItems.resume.style.underbar}"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div @click="enableSearch()" class="cursor-pointer">
                <a-tooltip placement="bottom">
                    <template #title>
                        <span>ブログ記事検索</span>
                    </template>
                    <SvgIconsSearchIcon class="w-[20px] h-[20px] mt-[4px]"></SvgIconsSearchIcon>
                </a-tooltip>
            </div>
        </div>
        <div v-show="showSearch" 
            class="searchItems w-[100%] h-[40px] space-x-[8px] pr-[40px] flex justify-center items-center"
            :style="{backgroundColor: navItemProperties.searchAreaBackground}">
            <div @click="disabledSearch()">
                <a-tooltip a-tooltip placement="bottom">
                    <template #title>
                        <span>戻る</span>
                    </template>
                    <SvgIconsBackIcon></SvgIconsBackIcon>
                </a-tooltip>
            </div>
            <div class="w-[500px] h-[30px] rounded-[4px] flex items-center bg-_white">
                <div class="w-[50px] h-[30px] flex justify-center items-center">
                    <a-tooltip placement="bottom">
                        <SvgIconsSearchIcon class="w-[20px] h-[20px]"></SvgIconsSearchIcon>
                    </a-tooltip>
                </div>
                <div class="w-[450px] h-[30px]">
                    <input v-model="searchInput" id="focusSearch" type="text" class="w-[100%] h-[100%] bg-_white outline-none" placeholder="ブログを検索">
                </div>
            </div>
        </div>
    </div>
    <div class="w-[100%] h-[1px] mt-[42px] z-[1000] flex fixed" :style="{backgroundColor: navItemProperties.navbarAreaUnderbarBackground}"></div>
    <div class="w-[100%] h-[43px]"></div>
    <div class="relative">
        <div v-show="showSearch" class="fixed inset-0 z-10 bg-black opacity-50"></div>
        <div class="absolute w-[100%] h-[calc(100vh-43px)] z-[1]">
            <div ref="pagesContentsRef" class="transition-all duration-500 ease-in-out">
                <slot/>
                <!-- <div class="w-[100%] h-[3000px]"></div> -->
            </div>
        </div>
    </div>
</template>