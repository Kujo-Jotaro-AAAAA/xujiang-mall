export default defineAppConfig({
  lazyCodeLoading: "requiredComponents",
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
        pagePath: "pages/introduce/index",
        iconPath: "static/tabbar/house.png",
        selectedIconPath: "static/tabbar/house.png",
        text: "首页",
      },
      {
        pagePath: "pages/index/index",
        iconPath: "static/tabbar/shop.png",
        selectedIconPath: "static/tabbar/shop.png",
        text: "商城",
      },
    ],
  },
});
