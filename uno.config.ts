// uno.config.ts
import presetWeapp from 'unocss-preset-weapp' // 导入UnoCSS的微信小程序预设
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer' // 导入属性化提取器和类转换器
import { presetIcons } from 'unocss' // 导入图标预设，支持各种图标集成
 
import transformerDirectives from '@unocss/transformer-directives' // 导入指令转换器，支持@apply等CSS指令
 
// 从extractorAttributify方法中解构出预设和转换器
const { presetWeappAttributify, transformerAttributify } = extractorAttributify()
 
export default {
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp(), // 启用微信小程序预设，处理小程序环境下的样式兼容性
    presetWeappAttributify(), // 启用微信小程序的属性化模式预设，允许使用属性来应用样式
    presetIcons(), // 启用图标预设，可以使用各种图标库的图标
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10', // 定义基础边框样式的快捷方式
      'center': 'flex justify-center items-center', // 定义居中布局的快捷方式
    },
  ],
  transformers: [
    transformerDirectives({
      enforce: 'pre', // 指定转换器的执行时机为预处理阶段
    }),
 
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify(), // 应用属性化转换器，将属性转换为对应的类
 
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(), // 应用类转换器，处理类名以适应微信小程序环境
  ],
  theme: {
    color: {
      blue: 'rgba(22, 33, 255, 1)', // 定义蓝色主题色
      red: '#e74c3c', // 定义红色主题色
      sun: '#f1c40f', // 定义太阳黄主题色
      green: '#16a085', // 定义绿色主题色
    },
    border: {
      blue: 'rgba(22, 33, 255, 1)', // 定义蓝色边框色
      red: '#e74c3c', // 定义红色边框色
      sun: '#f1c40f', // 定义太阳黄边框色
      green: '#16a085', // 定义绿色边框色
    },
  },
}