type Project = {
    id: number;
    companyname: string;
    date: {
        start: string;
        end: string;
        duration: string;
    };
    impactLevel: string;
    title: string;
    subtitle: string;
    description: string;
    challenges: string[];
    achievements: string[];
    technologies: string[];
    teamSize: number;
    role: string;
    phases: string[];
    content: {
        type: "sectionTitle" | "text" | "image" | "link" ;
        data: string;
        alt?: string;
    }[];
    images: {
        src: string;
        alt: string;
    }[];
    links: {
        title: string;
        url: string;
    }[];
};

type ProjectExample = Record<string, Project>;  


export const DBProjectData: ProjectExample = {
    "portfolio-website": {
        id: 10000,
        companyname: "パナソニック産機システムズ株式会社",
        date: { start: "2024-01-01", end: "2024-12-31", duration: "12ヶ月" },
        impactLevel: "中程度",
        title: "社員稟議システムの開発・運用支援",
        subtitle: "開発者の実績とスキルを伝えるためのウェブサイト",
        description: "このプロジェクトは、自己紹介と実績を効果的に見せるためのウェブサイト開発です。",
        challenges: ["レスポンシブデザインの実装", "新しいフレームワークの習得"],
        achievements: ["ページ表示速度を30%改善", "UIの最適化"],
        technologies: ["HTML", "CSS", "JavaScript"],
        teamSize: 1600,
        role: "フロントエンドエンジニア",
        phases: [ "設計", "実装", "テスト", "リリース"],
        content: [
            { type: "sectionTitle", data: "案件概要" },
            { type: "text", data: "本プロジェクトは、私がSESとして初めて参画した案件であり、業務効率化を目指したシステム運用保守と機能改善に取り組みました。特に、DX推進が求められる現場において、社内稟議システムのクラウド化を支えるツールの保守運用および開発を担当しました。この経験を通じて、現場での課題解決力を養うとともに、システム開発全般の基礎力を身につける貴重な機会となりました。" },
            { type: "text", data: "※本案件における詳細な業務内容や設計仕様については、秘密保持契約 (NDA) に基づき公開することができません。そのため、一般的な業務内容のみを記載しています。" },
            { type: "image", data: "/project/10000/images/001.png" },
            { type: "sectionTitle", data: "具体的な業務内容" },
            { type: "text", data: "本プロジェクトでは、稟議帳票のクラウド化に伴い、紙で使用されていた伝票フォーマットを継承しつつ、Web上で効率的に稟議を進められるインターフェースを開発しました。具体的には、社内の組織図に基づき、帳票を作成したユーザーごとにそれぞれの上長にあたる不特定多数へ稟議を申請できる仕組みを構築しました。また、インターフェースの作成にあたっては、ユーザーとのコミュニケーションを密に取りながら、要件定義書、開発実装資料、テスト項目資料などの資料作成も並行して行いながら慎重かつ先進的な提案を実施しました。特に、大手企業という特性上、システムの完成度や信頼性が重視されるため、ユーザーのニーズを的確に反映した設計と、継続的なフィードバックを通じて円滑な開発を進めました。この経験を通じて、ユーザー視点を重視したシステム設計の重要性と、複数ステークホルダーとの調整力を養うことができました。" },
            { type: "sectionTitle", data: "技術内容" },
            { type: "text", data: "本プロジェクトでは、稟議システムのインターフェースUI作成において、基本的な部分はノーコードツールを活用し、効率的に開発を進めました。一方で、高度な機能の実装が求められる部分については、HTMLを使用して柔軟に対応しました。特に、ユーザーの操作に応じて入力項目が動的に切り替わる機能や、組織図を参照して稟議承認者となるユーザーを自動的に割り振る仕組みをJavaScriptで実現しました。これにより、ユーザー体験を向上させるとともに、業務の効率化に寄与しました。" },
            { type: "sectionTitle", data: "大変だった点" },
            { type: "text", data: "1⃣社員数の多さに伴う複雑なロジックの必要性" },
            { type: "text", data: "社員数が非常に多いため、組織図を参照して適切な稟議承認者を特定するロジックの作成が求められました。このロジックでは、多岐にわたる組織階層や特定の承認フローに対応する柔軟性が必要でした。" },
            { type: "text", data: "2⃣ミスの影響が大きい環境での慎重な開発" },
            { type: "text", data: "社員数の多さゆえ、システムの一部にミスが発生すると、大規模な業務の停滞や混乱を引き起こす可能性がありました。そのため、要件定義やテスト工程を徹底し、システムの信頼性を確保しました。" },
            { type: "text", data: "3⃣技術者が少ない環境下での高い責任感" },
            { type: "text", data: "チーム内で技術者が私一人という状況もあり、要件定義から実装、テストまで一貫して対応しました。この状況下での開発では、限られたリソースの中で作業の優先順位を適切に判断し、品質を損なわないよう慎重に進めることが求められました。特に前任者のドキュメントを活用して短期間でキャッチアップし、自ら調査や改善提案を行うことで、信頼性の高いシステムを提供しました。" },
            { type: "sectionTitle", data: "工夫した点" },
            { type: "text", data: "ただ指示されたものを作成するのではなく、段階的に開発を進め、ユーザーとこまめに確認を行いながら進めました。特に、ユーザーの要望や意図を正確に反映するために、途中段階でのフィードバックを重視し、齟齬がないかを確認し続けました。" },
            { type: "text", data: "また、実装に入る前には、都度設計資料を作成し、考慮不足な点がないかを洗い出しました。これにより、開発途中での変更や問題発生を最小限に抑え、スムーズに実装に着手することができました。このプロセスを通じて、品質の高いシステムを提供し、ユーザーの満足度を高めることができました。" },
            { type: "sectionTitle", data: "企業情報" },
            { type: "link", data: "https://panasonic.co.jp/hvac/pces/" , alt: "パナソニック産機システムズ株式会社ホームページ" },
        ],
        images: [{ src: '/project/10000/panasonic_logo.png', alt: "プロジェクト画像" }],
        links: [{ title: "GitHub リポジトリ", url: "https://github.com/example" }],
    },
    "ecommerce-platform": {
        id: 10001,
        companyname: "株式会社サンプル",
        date: { start: "2020-01-01", end: "2020-12-31", duration: "12ヶ月" },
        impactLevel: "高程度",
        title: "サンプル",
        subtitle: "",
        description: "",
        challenges: ["", ""],
        achievements: ["", ""],
        technologies: ["HTML", "CSS", "JavaScript", "TypeScript" , "Nuxt.js", "React", "Flutter", "Python" , "Firebase" , "AWS" ],
        teamSize: 5,
        role: "",
        phases: ["企画", "設計", "実装", "テスト", "リリース"],
        content: [
            { type: "text", data: "このプロジェクトでは、カスタマイズ可能なオンラインショップを作成し、管理者とユーザーの両方にとって使いやすいプラットフォームを提供しました。" },
            { type: "image", data: "/images/project2-1.png" },
            { type: "text", data: "Stripe APIを利用した決済システムの統合に成功しました。" },
            { type: "link", data: "https://github.com/example" },
            { type: "link", data: "https://github.com/example" , alt: "GitHub リポジトリ" },
        ],
        images: [{ src: "/project/10001/sample.jpg", alt: "Eコマースプラットフォーム画像" }],
        links: [{ title: "", url: "" }],
    },
    "shimokitazawa-drive-school": {
        id: 10002,
        companyname: "下北沢自動車学校",
        date: { start: "2023-03-01", end: "2020-05-31", duration: "2ヶ月" },
        impactLevel: "低程度",
        title: "自動車学校のホームページリニューアル",
        subtitle: "",
        description: "",
        challenges: ["", ""],
        achievements: ["", ""],
        technologies: ["HTML", "CSS", "JavaScript"],
        teamSize: 1,
        role: "",
        phases: ["企画", "設計", "実装", "テスト", "リリース"],
        content: [
            { type: "sectionTitle", data: "案件概要" },
            { type: "text", data: "既存の自動車のホームページをリニューアルするために、WordPress、HTML、CSSを使用して新しいサイトを作成しました。" },
            { type: "sectionTitle", data: "キッカケ" },
            { type: "text", data: "私自身が運転免許を取得する際にこの自動車学校を利用しており、その際に代表者の方と直接お話しする機会がありました。その結果、学校のホームページリニューアルの話が進み、サイトの改善を担当することになりました。" },
            { type: "sectionTitle", data: "大変だった点" },
            { type: "text", data: "WordPressのバージョンによって仕様が異なり、理想のデザインを実現するために直面する制限がいくつかありました。特に、デザインや機能に関しての制約が多く、当初予定していた通りの実装が難しい場面がありました。そのため、理想形と妥協点をしっかりと見極め、適切なバージョン対応を行いながら、デザインと機能を調整しました。    " },
            { type: "sectionTitle", data: "企業情報" },
            { type: "link", data: "https://www.shimokitazawa-ds.com/" , alt: "下北沢自動車学校ホームページ" },
        ],
        images: [{ src: "/project/10002/simokitazawa.png", alt: "" }],
        links: [{ title: "", url: "" }],
    },
    "galaxy-kunitati": {
        id: 10003,
        companyname: "ギャラリー国立",
        date: { start: "2021-10-01", end: "2021-12-31", duration: "3ヶ月" },
        impactLevel: "低程度",
        title: "アートギャラリーのリブランディング案件",
        subtitle: "",
        description: "",
        challenges: ["", ""],
        achievements: ["", ""],
        technologies: ["HTML", "CSS", "JavaScript"],
        teamSize: 5,
        role: "",
        phases: ["設計", "実装", "テスト", "リリース"],
        content: [
            { type: "sectionTitle", data: "案件概要" },
            { type: "text", data: "ギャラリーのリブランディングとそれに伴うホームページの新規作成を担当しました。ギャラリーのイメージを一新し、視覚的に魅力的で、アーティストや来訪者にとって使いやすいウェブサイトを提供することを目指し、UIに特化した提案を行いました。" },
            { type: "text", data: "※本案件における詳細な業務内容や設計仕様については、秘密保持契約 (NDA) に基づき公開することができません。そのため、一般的な業務内容のみを記載しています。" },
            { type: "sectionTitle", data: "キッカケ" },
            { type: "text", data: "当時ビジネスパートナーであった画家の友人からの紹介がきっかけで始まりました。" },
            { type: "image", data: "/project/10003/images/001.JPG" },
            { type: "sectionTitle", data: "詳細内容" },
            { type: "text", data: "リブランディング案件の内容としては以下の内容を行いました。" },
            { type: "text", data: "1⃣ロゴの変更" },
            { type: "text", data: "旧来の単色デザインから脱却し、背景にグラデーションを加え、よりダイナミックで魅力的なビジュアルを提供しました。さらに、オーナー様が好まれていた「GK」（ギャラリー国立の略称）を反映させるため、国立の漢字の中にローマ字を巧みに組み込むことで、視覚的にユニークなデザインを実現しました。このデザイン変更により、オーナー様のニーズを満たすとともに、ギャラリーの個性を際立たせることができました。" }, 
            { type: "text", data: "2⃣リフォームに伴う内装の撮影と、ギャラリー内の図面作成" },
            { type: "text", data: "元々建築学科で図面作成などを行った経験を活かし、デザインの細部にまで気を配りました。アートを意識し、一般的なデザインにとらわれることなく、遊び心や思いを大切にした全体的なデザインを行いました。" },
            { type: "text", data: "3⃣ホームページの新規作成" },
            { type: "text", data: "wix、shopfy、HTML、CSSを使用して開発しました。" },
            { type: "sectionTitle", data: "企業情報" },
            { type: "link", data: "https://www.gallery-kunitachi.com/" , alt: "ギャラリー国立ホームページ" },
        ],
        images: [{ src: "/project/10003/kunitati.png", alt: "" }],
        links: [{ title: "", url: "" }],
    },
    "wcm-syusyu": {
        id: 10004,
        companyname: "早稲田大学",
        date: { start: "2024-07-01", end: "2024-12-31", duration: "4ヶ月" },
        impactLevel: "高程度",
        title: "産業廃棄物取集トラッキングシステム",
        subtitle: "",
        description: "",
        challenges: ["", ""],
        achievements: ["", ""],
        technologies: ["Flutter", "Python" , "Firebase", "AWS"],
        teamSize: 5,
        role: "",
        phases: ["設計", "実装", "テスト", "リリース"],
        content: [
            { type: "sectionTitle", data: "案件概要" },
            { type: "text", data: "本プロジェクトでは、産業廃棄物を回収する際に使用されるマニフェスト（廃棄物管理票）のアプリ化するプロダクトを作成しております。（現在ボランティア）" },
            { type: "sectionTitle", data: "詳細内容" },
            { type: "text", data: "既存のワークチェーンマネジメントシステムに並行して、産業廃棄物収集運搬事業者向けのアプリを開発しています。これにより、廃棄物の収集・運搬業務の効率化を目指しています。アプリは、収集・運搬の進捗管理や廃棄物情報のリアルタイム更新を支援し、事業者が現場で迅速かつ正確にデータを入力できるように設計されています。" },
            { type: "sectionTitle", data: "開発状況" },
            { type: "text", data: "技術要件、詳細設計、DB設計、デザイン要件から携わっております。現状設計段階が完了しFlutterでのフロントエンド開発に着手している段階です。" },
            
        ],
        images: [{ src: "/project/10004/wcm.jpg", alt: "" }],
        links: [{ title: "", url: "" }],
    },
    "elavel": {
        id: 10005,
        companyname: "株式会社五右衛門",
        date: { start: "2021-01-01", end: "2021-7-31", duration: "7ヶ月" },
        impactLevel: "高程度",
        title: "AIを活用した旅行レコメンドシステムの設計",
        subtitle: "",
        description: "",
        challenges: ["", ""],
        achievements: ["", ""],
        technologies: ["Flutter"],
        teamSize: 1,
        role: "",
        phases: ["設計"],
        content: [
            { type: "sectionTitle", data: "案件概要" },
            { type: "text", data: "旅行の計画を立てる際、参加者全員の希望や条件を調整することは非常に手間がかかります。旅行に特化したSNSは、グループ全員の希望や条件を効率的にまとめ、最適な旅行プランを自動で提案するプロダクトの設計を行いました。。" },
            { type: "sectionTitle", data: "成果" },
            { type: "text", data: "UIの設計、Flutterでの簡易プロトタイプの作成、ファイナンス活動など行いましたがユーザー獲得に難航しクローズしました。" },
            { type: "sectionTitle", data: "プロダクト内容" },
            { type: "link", data: "https://drive.google.com/file/d/170-ff9PB_M_T-WnW-vBChB8p1OFM-wv4/view?usp=sharing" , alt: "Elavel説明資料" },
            
        ],
        images: [{ src: "/project/10005/elavel.png", alt: "" }],
        links: [{ title: "", url: "" }],
    },
    "asl-carta": {
        id: 10006,
        companyname: "株式会社ASL",
        date: { start: "2023-06-01", end: "2023-12-31", duration: "6ヶ月" },
        impactLevel: "高程度",
        title: "社内SNSのUI/UX改善とフロントエンド開発",
        subtitle: "",
        description: "",
        challenges: ["", ""],
        achievements: ["", ""],
        technologies: ["HTML", "CSS", "JavaScript", "TypeScript" , "Nuxt.js"],
        teamSize: 300,
        role: "",
        phases: ["設計" , "実装"],
        content: [
            { type: "sectionTitle", data: "案件概要" },
            { type: "text", data: "社内SNSアプリのフロントエンド開発とUI/UX設計を担当しました。目的は、社員同士のコミュニケーションを促進し、より効率的で快適な社内情報のやり取りを実現することでした。" },
            { type: "text", data: "※本案件における詳細な業務内容や設計仕様については、秘密保持契約 (NDA) に基づき公開することができません。そのため、一般的な業務内容のみを記載しています。" },
            { type: "sectionTitle", data: "詳細内容" },
            { type: "text", data: "1⃣UI/UX設計" },
            { type: "text", data: "ユーザーの利便性を最優先に、直感的でシンプルなインターフェースをデザインしました。特に、社内の多忙な社員が効率よく情報をやり取りできるように、使いやすさと視覚的なわかりやすさを意識して設計しました。" },
            { type: "text", data: "2⃣フロントエンド開発" },
            { type: "text", data: "初めてJavaScriptのフレームワークを使用して開発しました。" },
            { type: "text", data: "Nuxt.JavaScriptではライフサイクルフックやミドルウェアの使い方を正しく理解するのが難しく、さらにTypeScriptで記述する必要があったため、非常に大変でした。" },
            { type: "text", data: "3⃣チーム開発の経験" },
            { type: "text", data: "初めてのチーム開発を経験し、Gitを使ったバージョン管理や、タスク管理ツールを活用して進捗を追いながら開発を行いました。チームメンバーと連携し、コードレビューやブランチ戦略を学びました。" },
            { type: "sectionTitle", data: "技術内容" },
            { type: "text", data: "ツール：Figma" },
            { type: "text", data: "フロントエンド：Nuxt.js、node.js、TypeScript" },
            { type: "text", data: "バックエンド：aws" },
            { type: "sectionTitle", data: "企業情報" },
            { type: "link", data: "https://www.asl.co.jp/" , alt: "株式会社ASLホームページ" },
        ],
        images: [{ src: "/project/10006/asl.png", alt: "" }],
        links: [{ title: "", url: "" }],
    },
};