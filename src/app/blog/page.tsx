import { getAllPosts } from '@/lib/utils'
import { BlogCard } from '@/components/blog/BlogCard'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">所有文章</h1>
        <p className="text-gray-600">
          共 {posts.length} 篇文章
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">暂无文章，请先在管理后台添加文章。</p>
        </div>
      )}
    </div>
  )
}