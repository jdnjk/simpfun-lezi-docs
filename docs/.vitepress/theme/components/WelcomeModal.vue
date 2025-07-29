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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(3px);
}

.modal-content {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  max-width: 420px;
  width: 90%;
  position: relative;
  color: #2c3e50;
  overflow: hidden;
  border: 1px solid rgba(62, 175, 124, 0.2);
}

.modal-header {
  padding: 32px 24px 20px;
  text-align: center;
  position: relative;
  background: linear-gradient(135deg, #f8fffe 0%, #f0fdf9 100%);
  border-bottom: 1px solid rgba(62, 175, 124, 0.1);
}

.modal-header h2 {
  margin: 0 0 8px;
  font-size: 22px;
  font-weight: 600;
  color: #1a202c;
  letter-spacing: 0.5px;
}

.auth-text {
  margin: 0;
  font-size: 13px;
  color: #3eaf7c;
  font-weight: 500;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  color: #64748b;
  font-size: 24px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background-color: rgba(248, 113, 113, 0.1);
  color: #ef4444;
}

.modal-body {
  padding: 24px;
  text-align: center;
  background: #ffffff;
}

.modal-body p {
  margin: 0 0 24px;
  font-size: 15px;
  color: #4a5568;
  line-height: 1.6;
}

.modal-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.enter-btn {
  background: linear-gradient(135deg, #3eaf7c 0%, #2d8659 100%);
  color: white;
  padding: 12px 28px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(62, 175, 124, 0.3);
  letter-spacing: 0.3px;
}

.enter-btn:hover {
  background: linear-gradient(135deg, #2d8659 0%, #236b47 100%);
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(62, 175, 124, 0.4);
}

.later-btn {
  background: transparent;
  color: #64748b;
  padding: 12px 28px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.3px;
}

.later-btn:hover {
  background: #f8fafc;
  border-color: #cbd5e0;
  color: #4a5568;
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
