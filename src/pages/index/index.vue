<template>
  <view class="container p-4">
    <view class="header mb-4">
      <text class="title text-32px color-blue font-bold">Pinia测试页面</text>
    </view>
    
    <!-- 状态展示区域 -->
    <view class="state-display p-3 mb-4 border-base rounded-lg">
      <view class="mb-2">
        <text class="font-bold">计数: </text>
        <text>{{ count }}</text>
      </view>
      <view class="mb-2">
        <text class="font-bold">双倍计数: </text>
        <text>{{ doubleCount }}</text>
      </view>
      <view class="mb-2">
        <text class="font-bold">消息: </text>
        <text>{{ message }}</text>
      </view>
      <view class="mb-2">
        <text class="font-bold">最后更新时间: </text>
        <text>{{ formattedUpdateTime }}</text>
      </view>
    </view>
    
    <!-- 操作按钮区域 -->
    <view class="actions flex flex-col space-y-2">
      <button @click="increment" class="btn bg-blue text-white p-2 rounded-lg">增加计数</button>
      <button @click="decrement" class="btn bg-red text-white p-2 rounded-lg">减少计数</button>
      <button @click="updateMessageHandler" class="btn bg-green text-white p-2 rounded-lg">更新消息</button>
      <button @click="resetState" class="btn bg-sun text-white p-2 rounded-lg">重置状态</button>
    </view>
    
    <!-- 持久化测试说明 -->
    <view class="mt-4 p-3 border-base rounded-lg">
      <text class="text-14px">刷新页面或重启应用后，如果数据仍然存在，则说明持久化功能正常工作。</text>
    </view>
  </view>
</template>

<script>
import { useTestStore } from '@/store/testStore'; // 导入测试用的store

export default {
  data() {
    return {
      testStore: null, // 存储pinia实例的引用
    }
  },
  
  computed: {
    // 从store中获取状态并映射到计算属性
    count() {
      return this.testStore?.count || 0;
    },
    doubleCount() {
      return this.testStore?.doubleCount || 0;
    },
    message() {
      return this.testStore?.message || '';
    },
    formattedUpdateTime() {
      return this.testStore?.formattedUpdateTime || '未更新过';
    }
  },
  
  onLoad() {
    // 初始化store
    this.initStore();
    
    // 检查持久化功能是否正常工作
    this.checkPersistence();
  },
  
  methods: {
    // 初始化store
    initStore() {
      this.testStore = useTestStore();
      console.log('Store初始化成功', this.testStore);
    },
    
    // 检查持久化功能
    checkPersistence() {
      console.log('检查持久化状态:', this.testStore);
      if (this.testStore.lastUpdateTime) {
        uni.showToast({
          title: '检测到持久化数据',
          icon: 'success'
        });
      }
    },
    
    // 增加计数
    increment() {
      this.testStore.increment();
      uni.showToast({
        title: '计数已增加',
        icon: 'none'
      });
    },
    
    // 减少计数
    decrement() {
      this.testStore.decrement();
      uni.showToast({
        title: '计数已减少',
        icon: 'none'
      });
    },
    
    // 更新消息处理函数
    updateMessageHandler() {
      uni.showModal({
        title: '更新消息',
        editable: true,
        placeholderText: '请输入新消息',
        success: (res) => {
          if (res.confirm && res.content) {
            this.testStore.updateMessage(res.content);
            uni.showToast({
              title: '消息已更新',
              icon: 'success'
            });
          }
        }
      });
    },
    
    // 重置状态
    resetState() {
      this.testStore.reset();
      uni.showToast({
        title: '状态已重置',
        icon: 'success'
      });
    }
  }
}
</script>

<style>
.container {
  padding: 20px;
}
</style>
