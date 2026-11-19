//function App() {
 // return (
 //   <div className="flex h-screen items-center justify-center bg-gray-100">
 //     <h1 className="text-4xl font-bold text-blue-600">
 //       Hello Tailwind!
 //     </h1>
//    </div>
//  )
//}

//export default App

import { useState } from 'react';

// 这是一个 React 函数组件
function App() {
  // 定义一个状态变量 ticketContent，用来存输入框的值
  // setTicketContent 是修改这个变量的方法，初始值为空字符串
  const [ticketContent, setTicketContent] = useState('');

  // 提交表单的处理函数
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 阻止网页默认的刷新行为
    if (!ticketContent.trim()) return;
    
    console.log("准备提交给后端的工单内容:", ticketContent);
    // 明天这里会换成调用后端 API 的代码
  };

  return (
    // 使用 Tailwind CSS 类名来排版：满屏高度、灰色背景、居中显示
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* 卡片容器 */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">智能工单处理平台</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              请输入您的问题：
            </label>
            <textarea
              // 将输入框的值和 state 绑定
              value={ticketContent}
              // 当输入框内容改变时，更新 state
              onChange={(e) => setTicketContent(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              placeholder="例如：我的账号登录不上了，订单号是123456..."
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            提交工单
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;