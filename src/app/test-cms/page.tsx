export default function TestCMSPage() {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">CMS测试页面</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">配置检查</h2>
            <ul className="space-y-2">
              <li>✅ GitHub OAuth应用已创建</li>
              <li>✅ Client ID: Ov23li5G3LpaQYbpAWwb</li>
              <li>✅ 回调URL: https://xiaoblog.netlify.app/admin/</li>
              <li>✅ Netlify环境变量已设置</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">测试链接</h2>
            <div className="space-y-4">
              <a
                href="/admin/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                测试管理后台
              </a>
              
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  💡 如果点击链接还是看到原来的提示界面，请尝试：
                </p>
                <ul className="list-disc list-inside mt-2 text-sm text-yellow-700">
                  <li>清除浏览器缓存</li>
                  <li>使用无痕模式访问</li>
                  <li>等待Netlify重新部署完成</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">故障排除</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">检查Netlify函数</h3>
                <p className="text-gray-600 text-sm">
                  访问: <a href="https://xiaoblog.netlify.app/.netlify/functions/github-auth" className="text-blue-600 underline" target="_blank">
                    https://xiaoblog.netlify.app/.netlify/functions/github-auth
                  </a>
                </p>
                <p className="text-gray-600 text-sm">
                  应该看到JSON响应，而不是错误页面
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold">检查浏览器控制台</h3>
                <p className="text-gray-600 text-sm">
                  按F12打开开发者工具，查看Console标签页是否有错误信息
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold">检查网络请求</h3>
                <p className="text-gray-600 text-sm">
                  在开发者工具的Network标签页查看是否有失败的请求
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }