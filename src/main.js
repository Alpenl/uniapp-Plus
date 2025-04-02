import {
	createSSRApp // 导入Vue 3的createSSRApp函数，用于创建服务端渲染应用实例
} from "vue";
import App from "./App.vue"; // 导入根组件App
import 'uno.css'; // 导入UnoCSS样式，这是一个原子化CSS引擎
import pinia from './store'; // 导入配置好的pinia实例

/**
 * 创建应用实例的工厂函数
 * @returns {Object} 包含Vue应用实例的对象
 */
export function createApp() {
	// 创建一个SSR兼容的Vue应用实例
	const app = createSSRApp(App);
	
	// 使用pinia
	app.use(pinia);
	
	// 返回应用实例
	return {
		app
	};
}
