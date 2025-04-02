import { createPinia } from 'pinia'; // 导入createPinia函数用于创建pinia实例
import piniaPluginPersistedstate from 'pinia-plugin-persist-uni'; // 导入pinia持久化插件

// 创建pinia实例
const pinia = createPinia();

// 注册持久化插件
pinia.use(piniaPluginPersistedstate);

// 导出pinia实例
export default pinia; 