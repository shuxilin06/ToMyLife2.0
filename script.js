const enterButton = document.getElementById("enter-button");
const welcomeScreen = document.getElementById("welcome-screen");
const gameScreen = document.getElementById("game-screen");
const shoreChoices = document.getElementById("shore-choices");
const walkOption = document.getElementById("walk-option");
const homeOption = document.getElementById("home-option");
const homeDirection = document.getElementById("home-direction");
const goHomeButton = document.getElementById("go-home-button");
const walkMessage = document.getElementById("walk-message");

// 点击开始游戏
enterButton.addEventListener("click", () => {
    welcomeScreen.classList.remove("active");
    gameScreen.classList.add("active");

    // 等待极光和海面的5秒动画结束
    setTimeout(() => {
        shoreChoices.classList.add("show");
    }, 2500);

});


// 选择 A：在海边走走
walkOption.addEventListener("click", () => {
    shoreChoices.style.display = "none";
    walkMessage.textContent = "那就沿着海岸，慢慢走一会儿吧……";
    walkMessage.classList.add("show");
});


// 选择 B：回家
homeOption.addEventListener("click", () => {
    shoreChoices.style.display = "none";
    homeDirection.classList.add("show");
});


// 点击右侧的回家按钮
const cabinScene = document.getElementById("cabin-scene");
goHomeButton.addEventListener("click", () => {
    // 隐藏回家指引
    homeDirection.classList.remove("show");
    // 隐藏海边漫步提示
    walkMessage.classList.remove("show");
    // 显示小屋场景
    cabinScene.classList.add("show");
});
const cabinSky = document.querySelector(".cabin-sky");
const cabinOcean = document.querySelector(".cabin-ocean");
const cabinHouse = document.querySelector(".cabin-house");
const cabinForeground = document.querySelector(".cabin-foreground");


// 鼠标视差效果

cabinScene.addEventListener("pointermove", (event) => {

    // 只响应鼠标和触控笔，不响应手机触摸
    if (event.pointerType === "touch") return;

    // 小屋场景尚未显示时不执行
    if (!cabinScene.classList.contains("show")) return;
    const rect = cabinScene.getBoundingClientRect();

    // 获取鼠标相对于场景中心的位置
    const mouseX = (event.clientX - rect.left) / rect.width;
    const mouseY = (event.clientY - rect.top) / rect.height;

    // 转换成 -1 到 1 之间的数值
    const x = (mouseX - 0.5) * 2;
    const y = (mouseY - 0.5) * 2;

    // 不同图层使用不同移动幅度
    cabinSky.style.translate =
        `${-x * 4}px ${-y * 3}px`;

    cabinOcean.style.translate =
        `${-x * 9}px ${-y * 6}px`;

    cabinHouse.style.translate =
        `${-x * 15}px ${-y * 10}px`;

    cabinForeground.style.translate =
        `${-x * 24}px ${-y * 15}px`;

});


// 鼠标离开场景，所有图层回到原位
cabinScene.addEventListener("pointerleave", () => {
    cabinSky.style.translate = "0px 0px";
    cabinOcean.style.translate = "0px 0px";
    cabinHouse.style.translate = "0px 0px";
    cabinForeground.style.translate = "0px 0px";
});
