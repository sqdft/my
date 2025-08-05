import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { BlogPost } from '@/lib/types'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {  // ✅ 确保使用 export function
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {post.featured && (
        <div className="bg-blue-600 text-white text-xs px-2 py-1 inline-block">
          精选
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <time dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          {post.updated && (
            <span className="mx-2">•</span>
          )}
          {post.updated && (
            <time dateTime={post.updated}>
              更新于 {formatDate(post.updated)}
            </time>
          )}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">
          <Link 
            href={`/blog/${post.slug}`}
            className="text-gray-900 hover:text-blue-600 transition-colors"
          >
            {post.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.summary}
        </p>
        
        {post.keywords.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.keywords.slice(0, 3).map((keyword) => (
              <span
                key={keyword}
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
              >
                {keyword}
              </span>
            ))}
          </div>
        )}
        
        <Link
          href={`/blog/${post.slug}`}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          阅读全文 →
        </Link>
      </div>
    </div>
  )
}