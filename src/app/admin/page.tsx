export default function AdminPage() {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">博客管理后台</h1>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">使用说明</h2>
              <div className="space-y-4 text-gray-600">
                <p>🎯 <strong>主要功能：</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>创建和管理博客文章</li>
                  <li>使用Markdown编辑器编写内容</li>
                  <li>上传和管理图片</li>
                  <li>设置文章标签和摘要</li>
                  <li>预览文章效果</li>
                </ul>
                
                <p>📝 <strong>如何使用：</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>点击下方"进入管理后台"按钮</li>
                  <li>使用GitHub账号登录</li>
                  <li>点击"新建文章"开始写作</li>
                  <li>填写标题、摘要、标签等信息</li>
                  <li>在Markdown编辑器中编写内容</li>
                  <li>点击"发布"按钮发布文章</li>
                </ol>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">快速操作</h2>
              <div className="space-y-4">
                <a
                  href="/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  进入管理后台
                </a>
                
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    💡 提示：管理后台需要您在Netlify中设置Identity和Git Gateway后才能正常使用。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }