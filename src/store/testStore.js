import { defineStore } from 'pinia'; // 导入defineStore用于创建store

// 创建测试用的store
export const useTestStore = defineStore('testStore', {
  // 定义状态
  state: () => ({
    count: 0, // 测试用的计数器
    message: '这是一个pinia测试', // 测试用的消息
    lastUpdateTime: null, // 最后更新时间
  }),
  
  // 定义getters
  getters: {
    // 获取双倍的count值
    doubleCount: (state) => state.count * 2,
    
    // 获取格式化的更新时间
    formattedUpdateTime: (state) => {
      if (!state.lastUpdateTime) return '未更新过';
      return new Date(state.lastUpdateTime).toLocaleString();
    }
  },
  
  // 定义actions
  actions: {
    // 增加计数
    increment() {
      this.count++;
      this.lastUpdateTime = Date.now();
    },
    
    // 减少计数
    decrement() {
      this.count--;
      this.lastUpdateTime = Date.now();
    },
    
    // 更新消息
    updateMessage(newMessage) {
      this.message = newMessage;
      this.lastUpdateTime = Date.now();
    },
    
    // 重置状态
    reset() {
      this.count = 0;
      this.message = '这是一个pinia测试';
      this.lastUpdateTime = null;
    }
  },
  
  // 配置持久化
  persist: {
    enabled: true, // 启用持久化
    detached: true, // 分离模式，提高性能
    storage: {
      // 使用本地存储，该插件会自动适配不同平台
      // H5使用localStorage，小程序使用wx.getStorageSync等
      key: 'test-store', // 持久化的key名称
    }
  }
}); 