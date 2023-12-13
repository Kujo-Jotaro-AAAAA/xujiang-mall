import { View, Text, Image, ScrollView } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { useState } from "react";
import "./index.less";

const srcroot =
  "https://xujiang-static-source001.oss-cn-shanghai.aliyuncs.com/miniprograme/model";
const imgSrc = {
  "001": [`${srcroot}/001/001.png`, `${srcroot}/001/001_1.png`],
  "002": [`${srcroot}/002/002.png`, `${srcroot}/002/002_1.png`],
  "003": [`${srcroot}/003/003.png`, `${srcroot}/003/003_1.png`],
  "004": [`${srcroot}/004/004.png`, `${srcroot}/004/004_1.png`],
  "005": [`${srcroot}/005/005.png`, `${srcroot}/005/005_1.png`],
  "006": [`${srcroot}/006/006.png`, `${srcroot}/006/006_1.png`],
  "007": [`${srcroot}/007/007.png`, `${srcroot}/007/007_1.png`],
  "008": [`${srcroot}/008/008.png`, `${srcroot}/008/008_1.png`],
  "009": [`${srcroot}/009/009.png`, `${srcroot}/009/009_1.png`],
  "010": [`${srcroot}/010/010.png`, `${srcroot}/010/010_1.png`],
  "011": [`${srcroot}/011/011.png`, `${srcroot}/011/011_1.png`],
  "012": [`${srcroot}/012/012.png`, `${srcroot}/012/012_1.png`],
  "013": [`${srcroot}/013/013.png`, `${srcroot}/013/013_1.png`],
  "014": [`${srcroot}/014/014.png`, `${srcroot}/014/014_1.png`],
  "015": [`${srcroot}/015/015.png`, `${srcroot}/015/015_1.png`],
  "016": [`${srcroot}/016/016.png`, `${srcroot}/016/016_1.png`],
  "017": [`${srcroot}/017/017.png`, `${srcroot}/017/017_1.png`],
  "018": [`${srcroot}/018/018.png`, `${srcroot}/018/018_1.png`],
  "019": [`${srcroot}/019/019.png`, `${srcroot}/019/019_1.png`],
};
const menu = [
  {
    name: "男人",
    child: [
      ...imgSrc["001"],
      ...imgSrc["002"],
      ...imgSrc["003"],
      ...imgSrc["004"],
      ...imgSrc["005"],
      ...imgSrc["006"],
      ...imgSrc["007"],
      ...imgSrc["008"],
    ],
  },
  {
    name: "女人",
    child: [
      ...imgSrc["009"],
      ...imgSrc["010"],
      ...imgSrc["011"],
      ...imgSrc["012"],
      ...imgSrc["013"],
      ...imgSrc["014"],
      ...imgSrc["015"],
    ],
  },
  {
    name: "小孩",
    child: [
      ...imgSrc["016"],
      ...imgSrc["017"],
      ...imgSrc["018"],
      ...imgSrc["019"],
    ],
  },
  {
    name: "老人",
    child: [
      ...imgSrc["016"],
      ...imgSrc["017"],
      ...imgSrc["018"],
      ...imgSrc["019"],
    ],
  },
  {
    name: "全部",
    child: [
      ...Object.keys(imgSrc)
        .map((key) => imgSrc[key].join(","))
        .join(",")
        .split(","),
    ],
  },
];
export default function Index() {
  const defaultIndex = 4; // 默认展示全部
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);
  const [currentSelect, setCurrentSelect] = useState([
    ...menu[defaultIndex].child,
  ]);
  useLoad(() => {
    console.log("Page loaded.");
  });

  const handleClick = () => {
    // 处理点击事件的逻辑
    console.log("View 被点击了");
  };
  const tabClick = (index) => {
    console.log("tabClick 被点击了", index);
    setCurrentSelect([...menu[index].child]);
    setCurrentIndex(index);
  };
  return (
    <View className="container">
      <View className="leftZone">
        <ScrollView scrollY className="menu">
          {menu.map((item, index) => (
            <View
              className={`menuItem ${index === currentIndex ? "active" : ""}`}
              onClick={() => tabClick(index)}
              key={`${item.name}${index}`}
            >
              {item.name}
            </View>
          ))}
        </ScrollView>
      </View>
      <View className="rightZone">
        <ScrollView scrollY className="imgcontainer">
          {currentSelect.map((item, index) => (
            <View key={`${item}`} className="imageEle" onClick={handleClick}>
              <Image className="imagesingle" src={item} />
              <View className="imageText">模型{index}</View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
