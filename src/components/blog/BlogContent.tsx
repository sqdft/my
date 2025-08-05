import { BlogPost } from '@/lib/types'

interface BlogContentProps {
  post: BlogPost
}

export function BlogContent({ post }: BlogContentProps) {  // ✅ 确保使用 export function
  return (
    <article className="prose prose-lg max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <time dateTime={post.date}>
            发布于 {new Date(post.date).toLocaleDateString('zh-CN')}
          </time>
          {post.updated && (
            <span className="mx-2">•</span>
          )}
          {post.updated && (
            <time dateTime={post.updated}>
              更新于 {new Date(post.updated).toLocaleDateString('zh-CN')}
            </time>
          )}
        </div>
        
        {post.summary && (
          <p className="text-xl text-gray-600 italic">
            {post.summary}
          </p>
        )}
        
        {post.keywords.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.keywords.map((keyword) => (
              <span
                key={keyword}
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
              >
                #{keyword}
              </span>
            ))}
          </div>
        )}
      </header>
      
      <div 
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}