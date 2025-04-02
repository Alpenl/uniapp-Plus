// vite.config.ts
import { defineConfig } from "vite"; // 导入Vite的defineConfig函数，用于类型提示和配置验证
import uni from "@dcloudio/vite-plugin-uni"; // 导入uni-app官方插件，用于编译uni-app项目
import { resolve } from 'path'; // 导入Node.js的path模块，用于处理文件路径
import Components from '@uni-helper/vite-plugin-uni-components' // 导入uni-app组件按需自动导入插件
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers' // 导入Wot UI组件解析器
 
export default defineConfig(async() => {
    // 动态导入UnoCSS插件，使用async/await确保插件正确加载
    const UnoCss = await import('unocss/vite').then(i => i.default)
    return {
        plugins: [
            // 确保组件自动导入插件在uni()插件之前注册
            Components({
                resolvers: [WotResolver()] // 使用WotResolver来解析Wot UI组件
            }), 
            uni(), // 注册uni-app编译插件
            UnoCss() // 注册UnoCSS插件，提供原子化CSS功能
        ],
        resolve: {
            alias: {
              '@': resolve(__dirname, './src'), // 配置@别名指向src目录
              '@components': resolve(__dirname, './src/components/'), // 配置@components别名指向组件目录
            },
        },
    }
});