(() => {
    let yOffset = 0;
    let prevScrollHeight = 0;
    let currentScene = 0;
    const sceneInfo = [
        {   
            index: 0,
            type: 'sticky',
            heightNum: 5, 
            scrollHeight : 0,
            objs : {
                container : document.querySelector("#scroll-section-0"),
                messageA : document.querySelector("#scroll-section-0 .main-message .a"),
                messageB : document.querySelector("#scroll-section-0 .main-message .b"),
                messageC : document.querySelector("#scroll-section-0 .main-message .c"),
                messageD : document.querySelector("#scroll-section-0 .main-message .d")
            },
            values : {
                messageA_opacity : [0, 1],

            }
        },
        {   
            index: 1,
            type: 'normal',
            heightNum: 5, 
            scrollHeight : 0,
            objs : {
                container : document.querySelector("#scroll-section-1")
            }
        },
        {   
            index: 2,
            type: 'sticky',
            heightNum: 5, 
            scrollHeight : 0,
            objs : {
                container : document.querySelector("#scroll-section-2")
            }
        },
        {   
            index: 3,
            type: 'sticky',
            heightNum: 5, 
            scrollHeight : 0,
            objs : {
                container : document.querySelector("#scroll-section-3")
            }
        },
    ];

    function setLayout() {
        for (let i=0; i<sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }

        let totalScrollHeight = 0;
        for (let i=0; i<sceneInfo.length; i++) {
            totalScrollHeight = totalScrollHeight + sceneInfo[i].scrollHeight;
            if (totalScrollHeight >= yOffset) {
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute("id", `show-scene-${currentScene}`)
    };

    function calcValues(values, currentYOffset) {
        
    }

    function playAnimation() {
        const values = sceneInfo[currentScene].values;
        switch (currentScene) {
            case 0 :
                let messageA_opacity_0 = values.messageA_opacity[0];
                let messageA_opacity_1 = values.messageA_opacity[1];
                break;
            case 1 :
                break;
            case 2 :
                break;
            case 3 :
                break;
        }
    }

    function scrollLoop() {
        prevScrollHeight = 0;
        for(let i=0; i<currentScene; i++) {
            prevScrollHeight = prevScrollHeight + sceneInfo[i].scrollHeight;
        }
        if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
            currentScene++;
            document.body.setAttribute("id", `show-scene-${currentScene}`);
        }

        if (yOffset < prevScrollHeight) {
            if(currentScene === 0) return
            currentScene--;
            document.body.setAttribute("id", `show-scene-${currentScene}`);
        }

        playAnimation();
    }

    window.addEventListener("scroll", ()=>{
        yOffset = window.pageYOffset;
        scrollLoop();
    });

    window.addEventListener("load", setLayout);
    window.addEventListener("resize", setLayout);

})();