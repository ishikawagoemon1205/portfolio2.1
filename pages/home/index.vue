<script setup lang="ts">
import { message } from 'ant-design-vue';

const { $gsap , $ScrollTrigger } = useNuxtApp();

useHead({
  title: 'ホーム画面',
  meta: [
    { name: 'fwefrfr', content: 'Nuxt 3' }
  ]
});

// -----
// ライフサイクルフック
// -----

onMounted(() => {
    nextTick(() => {
        welcomeMessage1Handler();
        welcomeMessage2Handler();
        welcomeMessage3Handler();
    })
    $ScrollTrigger.refresh();
}); 

// -----
// Topでのアニメーション
// -----

    const handleMouseMove = (event: MouseEvent) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        $gsap.to(".circle", {
            x: mouseX,
            y: mouseY,
            stagger: -0.5,
        });
    };

    const welcomeMessage1 = ref(null);
    const welcomeMessage2 = ref(null);
    const welcomeMessage3 = ref(null);

    const welcomeMessage1Handler = () => {
        $gsap.fromTo('.welcomeMessage1', 
            {
                opacity: 0,  // 初期状態は透明
                y: 50,       // 初期位置を下に設定
            },
            {
                opacity: 1,  // 表示アニメーション（不透明）
                y: 0,        // 元の位置に戻す
                duration: 2,
                scrollTrigger: {
                    trigger: '.welcomeMessage1',
                    start: "top center",  // 画面中央に要素の上端が来たときに表示アニメーション開始
                    end: "top 30%",       // 要素の上端が画面の30%に来た時にアニメーション終了
                    toggleActions: "play none none reverse",  // スクロールアップ時に逆再生（非表示）
                    markers: false,
                },
            }
        );
    };

    const welcomeMessage2Handler = () => {
        $gsap.fromTo('.welcomeMessage2', 
            {
                opacity: 0,  // 初期状態は透明
                y: 50,       // 初期位置を下に設定
            },
            {
                opacity: 1,  // 表示アニメーション（不透明）
                y: 0,        // 元の位置に戻す
                duration: 2,
                scrollTrigger: {
                    trigger: '.welcomeMessage2',
                    start: "top center",  // 画面中央に要素の上端が来たときに表示アニメーション開始
                    end: "top 30%",       // 要素の上端が画面の30%に来た時にアニメーション終了
                    toggleActions: "play none none reverse",  // スクロールアップ時に逆再生（非表示）
                },
            }
        );
    };

    const welcomeMessage3Handler = () => {
        $gsap.fromTo('.welcomeMessage3', 
            {
                opacity: 0,  // 初期状態は透明
                y: 50,       // 初期位置を下に設定
            },
            {
                opacity: 1,  // 表示アニメーション（不透明）
                y: 0,        // 元の位置に戻す
                duration: 2,
                scrollTrigger: {
                    trigger: '.welcomeMessage3',
                    start: "top center",  // 画面中央に要素の上端が来たときに表示アニメーション開始
                    end: "top 30%",       // 要素の上端が画面の30%に来た時にアニメーション終了
                    toggleActions: "play none none reverse",  // スクロールアップ時に逆再生（非表示）
                },
            }
        );
    };

// -----
// 最新情報ボタン
// -----

    const updataConfirm = () => {
        confirm('本機能をはじめ、他の機能についても現在開発中の箇所がございます。お手数をおかけいたしますが、何卒ご理解いただけますと幸いです。');
    };


</script>

<template>
    <div class="relative w-[100%] h-[calc(100vh-43px)] bg-_blue_1 z-[2] overflow-hidden transition-all duration-500 ease-in-out">
        <div class="absolute circle w-[1600px] h-[1600px] mt-[-315px] ml-[-315px] rounded-[50%] bg-[#5CD8FF] z-[3]"></div>
        <div class="absolute circle w-[1200px] h-[1200px] mt-[-220px] ml-[-220px] rounded-[50%] bg-[#A990BA] z-[4]"></div>
        <div class="absolute circle w-[800px] h-[800px] mt-[-100px] ml-[-100px] rounded-[50%] bg-[#FF406E] z-[5]"></div>
        <div @mousemove="handleMouseMove" class="absolute w-[100%] h-[100%] bg-white flex flex-col items-center justify-center space-y-[30px] mix-blend-screen z-[6] transition-all duration-500 ease-in-out">
            <SvgIconsIcon class="w-[80px] h-[104px]"></SvgIconsIcon>
            <p class="text-[50px] font-bold">挑戦し続け、限界を押し広げる</p>
        </div>
        <div class="absolute w-[200px] h-[50px] top-[calc(100vh-180px)] left-[calc(100vw-300px)] z-[7]">
            <div class="relative w-[100%] h-[100%] rounded-[5px] bg-_lBlue z-[8] hover:bg-_lRed transition-all duration-500 ease-in-out">
                <div class="absolute w-[10px] h-[10px] top-[-4px] left-[-4px] bg-_lRed rounded-[10px]"></div>
                <div @click="updataConfirm()" class="absolute w-[100%] h-[100%] flex items-center justify-center">
                    <p class="text-[20px] font-bold mt-[16px]">最新情報</p>
                </div>
            </div>
        </div>
    </div>
    <div class="w-[100%] h-[calc((100vh-43px)*3+200px)] flex flex-col items-center space-y-[100px]">
        <!-- コンテンツ1⃣ -->
        <div ref="welcomeMessage1" class="welcomeMessage1 w-[1024px] h-[calc(100vh-43px)] flex opacity-0 translate-y-[100px]">
            <div class="w-[50%] h-[100%]">
                <div class="w-[500px] h-[100%] p-[30px] flex flex-col justify-center space-y-[20px]">
                    <div>
                        <p class="text-[48px] font-bold">こんにちは！</p>
                    </div>
                    <div>
                        <p class="text-[20px] font-bold text-gray-500">
                            こんにちは！石川敦大と申します。<br>
                            現在、フロントエンドエンジニアとして活躍しています。コードを書くことが大好きで、常に新しい技術を学びながら、<span class="text-black">クリイティブで使いやすいウェブアプリケーションを開発</span>しています。
                        </p>
                    </div>
                    <div>
                        <p @click="navigateTo('profile')" class="text-[14px] font-bold text-_lRed cursor-pointer hover:underline">
                            プロフィールについてさらに詳しく
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-[50%] h-[100%] p-[50px]">
                <img class="w-[100%] h-[100%]" src="/welcome1.jpeg">
            </div>
        </div>
        <!-- コンテンツ2⃣ -->
        <div ref="welcomeMessage2" class="welcomeMessage2 w-[1024px] h-[calc(100vh-43px)] flex opacity-0 translate-y-[100px]">
            <div class="w-[50%] h-[100%]">
                <div class="w-[500px] h-[100%] p-[30px] flex flex-col justify-center space-y-[20px]">
                    <div>
                        <p class="text-[48px] font-bold">これまで</p>
                    </div>
                    <div>
                        <p class="text-[20px] font-bold text-gray-500">
                                これまでにSES企業や個人開発で、複数のウェブアプリケーション開発プロジェクトに携わりました。<span class="text-black">UI/UXデザインに重点を置き、</span>パフォーマンスの最適化やレスポンシブデザインの導入に成功。<span class="text-black">Vue.jsやTypeScriptを使った開発がWebアプリケーションの得意</span>です。
                        </p>
                    </div>
                    <div>
                        <p @click="navigateTo('projects')" class="text-[14px] font-bold text-_lRed cursor-pointer hover:underline">
                                プロジェクトについてさらに詳しく
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-[50%] h-[100%] p-[50px]">
                <img class="w-[100%] h-[100%]" src="/welcome2.jpeg">
            </div>
        </div>
        <!-- コンテンツ3⃣ -->
        <div ref="welcomeMessage3" class="welcomeMessage3 w-[1024px] h-[calc(100vh-43px)] flex opacity-0 translate-y-[100px]">
            <div class="w-[50%] h-[100%]">
                <div class="w-[500px] h-[100%] p-[30px] flex flex-col justify-center space-y-[20px]">
                    <div>
                        <p class="text-[48px] font-bold">スキル</p>
                    </div>
                    <div>
                        <p class="text-[20px] font-bold text-gray-500">
                            以下言語の開発が可能です。<br>
                            - フロントエンド:<br>
                            HTML、CSS、JavaScript、TypeScript、<br>
                            Vue.js、Nuxt.js、TailwindCSS、Flutter<br>
                            - バックエンド:<br>
                            Node.js、Firebase、AWS<br>
                            - ツール: Git、Figma
                        </p>
                    </div>
                    <div>
                        <p @click="navigateTo('projects')" class="text-[14px] font-bold text-_lRed cursor-pointer hover:underline">
                            制作物についてさらに詳しく
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-[50%] h-[100%] p-[50px]">
                <img class="w-[100%] h-[100%]" src="/welcome3.jpg">
            </div>
        </div>
    </div>
</template>