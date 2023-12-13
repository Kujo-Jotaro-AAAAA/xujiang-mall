import { View, Text, Image, ScrollView } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.less";

export default function Introduce() {
  return (
    <View className="container">
      <View>
        旭匠科技(上海)有限公司是一家专注于数字化遗体修复、数字化沉浸式告别厅、3D打印技术
        殡葬领域应用、VR虚拟实操教学、日常涉遗产品研发销售的高科技公司。
      </View>
      <View>
        公司自2019年起与上海复旦大学、国资委相关企业共同在数字化应用、材料科学、人工智能等
        领域开展合作，数字化遗体整形在全国多位防腐整形专家老师的共同指导与帮助下，取得了数
        字化遗体修复1.0版本(3D打印)与2.0版本(速干软硅胶)的市场化应用成果。
      </View>
      <View>
        2019年至今已成功服务北京、上海、内蒙、山东、沈阳等多地案例。获得家属的高度认可与感激。2022年旭
        匠科技开展与全国各省殡仪馆的数字化遗体整形合作工作室，实现全国范围无死角服务网络。
      </View>
      <View>
        旭匠科技有幸成为2023年第十一届全国民政职业技能竞赛防腐整容赛项器具赞助企业获得突出
        贡献单位奖。
      </View>
      <View>
        未来旭匠科技将持续深化对数字化殡葬领域的深度追求，进一步推动殡葬行业数字化的布局与
        发展，迎接新时期下的行业挑战，社会责任永远放在第一位，关爱每一位逝者，让爱与科技陪
        伴最后的旅程!
      </View>
    </View>
  );
}