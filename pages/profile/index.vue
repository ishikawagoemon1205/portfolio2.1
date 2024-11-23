<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp();

const panel1 = ref(null);
const panel2 = ref(null);
const panel3 = ref(null);
const panel4 = ref(null);
const panel5 = ref(null);
const panel6 = ref(null);
const panel7 = ref(null);

onMounted(() => {
    nextTick(() => {

        $gsap.fromTo('.openingmessage', 
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 2,
                scrollTrigger: {
                    trigger: '.openingmessage',
                    start: "top center",
                    end: "top 30%",
                    toggleActions: "play none none reverse",
                    markers: false,
                },
            }
        );

        // panel1 の設定
        $gsap.to(panel1.value, {
            scrollTrigger: {
                trigger: panel1.value,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: true,
                markers: false,
            }
        });
        
        // panel2 の設定
        $gsap.to(panel2.value, {
            scrollTrigger: {
                trigger: panel2.value,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: false,
                markers: false,
            }
        });

        // panel3 の設定
        $gsap.to(panel3.value, {
            scrollTrigger: {
                trigger: panel3.value,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: true,
                markers: false,
            }
        });

        // panel4 の設定
        $gsap.to(panel4.value, {
            scrollTrigger: {
                trigger: panel4.value,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: false,
                markers: false,
            }
        });

        // panel5 の設定
        $gsap.to(panel5.value, {
            scrollTrigger: {
                trigger: panel5.value,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: true,
                markers: false,
            }
        });

        // panel6 の設定
        $gsap.to(panel6.value, {
            scrollTrigger: {
                trigger: panel6.value,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: false,
                markers: false,
            }
        });

        // panel7 の設定
        $gsap.to(panel7.value, {
            scrollTrigger: {
                trigger: panel7.value,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: true,
                markers: false,
            }
        });
    });
});
</script>

<template>
    <div class="w-[100%] h-auto relative text-_white">
        <div class="flex fixed items-center justify-center w-full h-[70px] z-[20]">
            <div class="w-[1024px] h-[50px]">
                <div class="w-[100%] h-[100%]">
                    <div class="w-[100%] h-[46px] flex">
                        <div class="w-[50%] h-[100%] flex justify-start">
                            <p class="text-[28px] font-bold">Profile</p>
                        </div>
                        <div class="w-[50%] h-[100%] flex justify-end">
                            <p class="text-[28px] font-bold">2019-2024</p>
                        </div>
                    </div>
                    <div class="w-[100%] h-[4px] flex items-center justify-center">
                        <hr class="w-[100%] border-t-4 border-dotted border-white">
                    </div>
                </div>
            </div>
        </div>
        <div ref="panel1" class="w-full h-[calc(100vh-43px)] bg-_black z-[10] absolute">
            <div class="relative w-[100%] h-[100%]">
                <div class="absolute w-[100%] h-[100%]">
                    <div class="w-[100%] h-[100%] flex flex-col items-center">
                        <div class="space"></div>
                        <div class="openingmessage w-[1024px] h-[calc(100%-70px)] pb-[200px] flex flex-col items-center justify-center y-space-[30px] font-bold">
                            <div class="text-[200px]">Profile</div>
                            <div class="text-[50px]">私の社会人生活のこれまで</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div ref="panel2" class="w-full h-[calc(100vh-43px)] bg-_black z-[11] absolute top-[calc(100vh-43px)]">
            <div class="relative w-[100%] h-[100%]">
                <div class="absolute w-[100%] h-[100%]">
                    <img src="/profile/profile001.png">
                </div>
                <div class="absolute w-[100%] h-[100%] bg-black opacity-80"></div>
                <div class="absolute w-[100%] h-[100%]">
                    <div class="w-[100%] h-[100%] flex flex-col items-center">
                        <div class="space"></div>
                        <div class="w-[1024px] h-[calc(100%-70px)] font-bold">
                            <div class="w-[100%] h-[50px] flex items-center justify-end">
                                <div class="text-[50px]"> - 2019</div>
                            </div>
                            <div class="w-[100%] h-[150px] flex items-center justify-start">
                                <div class="text-[40px]">起業を志した理由と自分にしかできないことへの追求</div>
                            </div>
                            <div class="w-[100%] h-[150px] flex items-center justify-start">
                                <div class="text-[20px]">
                                    <span class="text-_gray_4">
                                        建築系の大学に入学し、建物のデザインと設計に情熱を注いでいました。最先端のデザインに触れ、海外にも行き、独自の感性を養っていました。しかし、建築家として一人前になるには長い時間がかかることに気付きました。<span class="text-_white">自分にしかできないことを最短で実現したい</span>という強い思いから、起業を志すことに決めました。<span class="text-_white">自分の可能性を広げ、迅速に成果を上げるために、起業という道を選びました。</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div ref="panel3" class="w-full h-[calc(100vh-43px)] bg-blue-100 z-[12] absolute top-[calc((100vh-43px)*2)]">
            <div class="relative w-[100%] h-[100%]">
                <div class="absolute w-[100%] h-[100%]">
                    <img src="/profile/profile002.jpeg" class="w-[100%] h-[100%] object-cover">
                </div>
                <div class="absolute w-[100%] h-[100%] bg-black opacity-80"></div>
                <div class="absolute w-[100%] h-[100%]">
                    <div class="w-[100%] h-[100%] flex flex-col items-center">
                        <div class="space"></div>
                        <div class="w-[1024px] h-[calc(100%-70px)] font-bold">
                            <div class="w-[100%] h-[50px] flex items-center justify-end">
                                <div class="text-[50px]">2020</div>
                            </div>
                            <div class="w-[100%] h-[150px] flex items-center justify-start">
                                <div class="text-[40px]">起業への挑戦とビジネスコンテスト優勝</div>
                            </div>
                            <div class="w-[100%] h-[150px] flex items-center justify-start">
                                <div class="text-[20px]">
                                    <span class="text-_gray_4">
                                        起業志向のスクールに通い、ビジネスの基礎を学びながら実践を重ねました。ASPを活用した送客代行事業では、小規模脱毛サロンにリブランディング提案を行い、<span class="text-_white">最高の売上</span>を上げました。さらに、<span class="text-_white">100名規模のビジネスコンテストに挑戦し、見事優勝。</span>スモールビジネスにとどまらず、<span class="text-_white">世界に通用するプロダクト作りを目指すようになりました。</span><span class="text-_white">自分にしかできないことを追求する人生</span>を送りたいと強く決意した瞬間でした。
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div ref="panel4" class="w-full h-[calc(100vh-43px)] bg-red-100 z-[13] absolute top-[calc((100vh-43px)*3)]">
            <div class="relative w-[100%] h-[100%]">
                <div class="absolute w-[100%] h-[100%]">
                    <img src="/profile/profile003.png" class="w-[100%] h-[100%] object-cover">
                </div>
                <div class="absolute w-[100%] h-[100%] bg-black opacity-80"></div>
                <div class="absolute w-[100%] h-[100%]">
                    <div class="w-[100%] h-[100%] flex flex-col items-center">
                        <div class="space"></div>
                        <div class="w-[1024px] h-[calc(100%-70px)] font-bold">
                            <div class="w-[100%] h-[50px] flex items-center justify-end">
                                <div class="text-[50px]">2021</div>
                            </div>
                            <div class="w-[100%] h-[150px] flex items-center justify-start">
                                <div class="text-[40px]">営業活動を通じて感じた壁と起業の難しさ</div>
                            </div>
                            <div class="w-[100%] h-[150px] flex items-center justify-start">
                                <div class="text-[20px]">
                                    <span class="text-_gray_4">
                                        起業を目指して仲間を集め、旅行や不動産関連のビジネスを模索しました。<span class="text-_white">山手線内の不動産会社を片っ端から営業</span>したり、<span class="text-_white">実際に現地で旅行ユーザーの声を集める</span>など、課題解決に向けて積極的に行動。しかし、業界の壁に直面し、<span class="text-_white">新規参入の難しさを痛感しました。</span>想像を絶する努力が必要だと感じ、<span class="text-_white">起業の道を諦める決断</span>をしました。この経験を通じて、成功するためにはどれだけの覚悟と努力が必要かを学びました。
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div ref="panel5" class="w-full h-[calc(100vh-43px)] bg-blue-100 z-[14] absolute top-[calc((100vh-43px)*4)]">
            <div class="relative w-[100%] h-[100%]">
                <div class="absolute w-[100%] h-[100%]">
                    <img src="/profile/profile004.jpeg" class="w-[100%] h-[100%] object-cover">
                </div>
                <div class="absolute w-[100%] h-[100%] bg-black opacity-80"></div>
                <div class="absolute w-[100%] h-[100%]">
                    <div class="w-[100%] h-[100%] flex flex-col items-center">
                        <div class="space"></div>
                        <div class="w-[1024px] h-[calc(100%-70px)] font-bold">
                            <div class="w-[100%] h-[50px] flex items-center justify-end">
                                <div class="text-[50px]">2022</div>
                            </div>
                            <div class="w-[100%] h-[150px] flex items-center justify-start">
                                <div class="text-[40px]">営業職での自己との向き合いと反省</div>
                            </div>
                            <div class="w-[100%] h-[150px] flex items-center justify-start">
                                <div class="text-[20px]">
                                    <span class="text-_gray_4">
                                        営業職に就きましたが、扱う商品への情熱や愛着が湧かず、<span class="text-_white">自分が本気で取り組めていないことを実感しました。</span>何のために働いているのか、仕事に対する情熱が感じられず、<span class="text-_white">結果も出せませんでした。</span>自分が心から情熱を注げるものを見つけることの重要性を再認識し、<span class="text-_white">働く意義を問い直した一年でした。</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div ref="panel6" class="w-full h-[calc(100vh-43px)] bg-red-100 z-[15] absolute top-[calc((100vh-43px)*5)]">
            <div class="relative w-[100%] h-[100%]">
                <div class="absolute w-[100%] h-[100%]">
                    <img src="/profile/profile005.jpeg" class="w-[100%] h-[100%] object-cover">
                </div>
                <div class="absolute w-[100%] h-[100%] bg-black opacity-80"></div>
                <div class="absolute w-[100%] h-[100%]">
                    <div class="w-[100%] h-[100%] flex flex-col items-center">
                        <div class="space"></div>
                        <div class="w-[1024px] h-[calc(100%-70px)] font-bold">
                            <div class="w-[100%] h-[50px] flex items-center justify-end">
                                <div class="text-[50px]">2023</div>
                            </div>
                            <div class="w-[100%] h-[150px] flex items-center justify-start">
                                <div class="text-[40px]">エンジニアとしてのキャリアのスタート</div>
                            </div>
                            <div class="w-[100%] h-[150px] flex items-center justify-start">
                                <div class="text-[20px]">
                                    <span class="text-_gray_4">
                                        学生時代のUIデザインの経験を活かして、HP作成の仕事を引き受け、簡単なコーディングを始めました。その後、<span class="text-_white">SES企業に就職</span>し、エンジニアとして本格的にキャリアをスタート。フロントエンドやバックエンドの技術を学びながら、実務経験を積みました。これまでの経験が形になる瞬間に喜びを感じ、<span class="text-_white">エンジニアとしての道に自分の情熱を注げると確信しました。</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div ref="panel7" class="w-full h-[calc(100vh-43px)] bg-blue-100 z-[16] absolute top-[calc((100vh-43px)*6)]">
            <div class="relative w-[100%] h-[100%]">
                <div class="absolute w-[100%] h-[100%]">
                    <img src="/profile/profile006.jpeg" class="w-[100%] h-[100%] object-cover">
                </div>
                <div class="absolute w-[100%] h-[100%] bg-black opacity-80"></div>
                <div class="absolute w-[100%] h-[100%]">
                    <div class="w-[100%] h-[100%] flex flex-col items-center">
                        <div class="space"></div>
                        <div class="w-[1024px] h-[calc(100%-70px)] font-bold">
                            <div class="w-[100%] h-[50px] flex items-center justify-end">
                                <div class="text-[50px]">2024</div>
                            </div>
                            <div class="w-[100%] h-[150px] flex items-center justify-start">
                                <div class="text-[40px]">技術を磨き、情熱を再確認</div>
                            </div>
                            <div class="w-[100%] h-[150px] flex items-center justify-start">
                                <div class="text-[20px]">
                                    <span class="text-_gray_4">
                                        フロントエンドからバックエンドまで、幅広い技術を磨いた一年。<span class="text-_white">開発に情熱を込めることが自分にとって最も合っていると感じました。</span>お客さまの喜びの声や、自分の成長を実感できる瞬間が最高の喜びです。この充実感の中で、学生時代に足りていなかったもの、<span class="text-_white">情熱を注げる分野に自分の人生を使うことの重要性に気付きました。</span>これからもさらに1～2年学び、エンジニアとして自分の技術を高め続けたいと思っています。
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.space {
    width: 100%;
    height: 120px;
}

</style>