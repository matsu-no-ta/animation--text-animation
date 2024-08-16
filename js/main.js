const textAnimation = () => {
    //背景を表示
    gsap.to(".js-fv", {
        duration: 1, //アニメーションの時間の設定
        opacity: 1, //表示状態の指定
    });

    //.c-fv-textを出現させ逆再生をして初期状態に戻す
    gsap.to(".js-fv-text", {
        delay: 1, //アニメーションの初期遅延（アニメーションが開始されるまでの指定）
        duration: 1, //アニメーションの時間の設定
        opacity: 1, //表示状態の指定
        y: "0px", //cssでY軸-20pxから完了時0pxへの指定
        yoyo: true, //trueにすることで上記で指定したY軸の動きの逆再生
        repeat: 1, //yoyoのリピート回数
        //同じclass名のバリデーションの設定
        stagger: {
            each: .4, //ディレイ時間
        },
    });

    //初期遅延をかけてから.fv-titleを表示
    gsap.to(".js-fv-title span", {
        delay: 4, //アニメーションの初期遅延（アニメーションが開始されるまでの指定）
        duration: 1.5, //アニメーションの時間の設定
        opacity: 1, //表示状態の指定
        //同じclass名のバリデーションの設定
        stagger: {
            each: .2, //ディレイ時間
            from: "start", //出現方法の指定
        },
    });
};

textAnimation();