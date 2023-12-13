export default defineAppConfig({
  pages: ["pages/index/index", "pages/introduce/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "static/tabbar/home.png",
        selectedIconPath: "static/tabbar/home-active.png",
        text: "首页",
      },
      {
        pagePath: "pages/introduce/index",
        iconPath: "static/tabbar/introduce.png",
        selectedIconPath: "static/tabbar/introduce-active.png",
        text: "简介",
      },
    ],
  },
});
