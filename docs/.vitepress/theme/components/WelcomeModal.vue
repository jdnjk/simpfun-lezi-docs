<template>
  <div v-if="showModal" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h2>能干辉论坛</h2>
        <p class="auth-text">(能干辉亲自授权)</p>
        <button class="close-btn" @click="closeModal">&times;</button>
      </div>
      <div class="modal-body">
        <p>欢迎访问能干辉论坛！</p>
        <div class="modal-actions">
          <a 
            href="https://nghsb.coff.top/" 
            target="_blank" 
            class="enter-btn"
            @click="closeModal"
          >
            点击进入
          </a>
          <button class="later-btn" @click="closeModal">稍后再说</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showModal = ref(false)

const closeModal = () => {
  showModal.value = false
}

onMounted(() => {
  // 每次页面加载都显示弹窗
  setTimeout(() => {
    showModal.value = true
  }, 500) // 延迟500ms显示，让页面先加载完成
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(2px);
}

.modal-content {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 90%;
  position: relative;
  color: white;
  overflow: hidden;
}

.modal-header {
  padding: 24px 24px 16px;
  text-align: center;
  position: relative;
}

.modal-header h2 {
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.auth-text {
  margin: 0;
  font-size: 14px;
  opacity: 0.9;
  font-style: italic;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.close-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.modal-body {
  padding: 0 24px 24px;
  text-align: center;
}

.modal-body p {
  margin: 0 0 20px;
  font-size: 16px;
  opacity: 0.95;
}

.modal-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.enter-btn {
  background: #ff6b6b;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
}

.enter-btn:hover {
  background: #ff5252;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(255, 107, 107, 0.6);
}

.later-btn {
  background: transparent;
  color: white;
  padding: 12px 24px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.later-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.8);
}

/* 响应式设计 */
@media (max-width: 480px) {
  .modal-content {
    margin: 20px;
    width: calc(100% - 40px);
  }
  
  .modal-actions {
    flex-direction: column;
  }
  
  .enter-btn,
  .later-btn {
    width: 100%;
  }
}

/* 动画效果 */
.modal-overlay {
  animation: fadeIn 0.3s ease-out;
}

.modal-content {
  animation: slideIn 0.4s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
