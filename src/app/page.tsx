import Link from 'next/link'
import { getAllPosts, getFeaturedPosts, formatDate } from '@/lib/utils'
import { siteConfig, authorConfig } from '@/lib/config'
import { BlogCard } from '@/components/blog/BlogCard'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function HomePage() {
  const allPosts = getAllPosts()
  const featuredPosts = getFeaturedPosts()
  const recentPosts = allPosts.slice(0, 6)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {siteConfig.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {siteConfig.description}
              </p>
              <p className="text-lg text-gray-500 mb-8">
                {authorConfig.bio}
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  浏览博客
                </Link>
                <Link href="/admin" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  管理后台
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">精选文章</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Recent Posts */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">最新文章</h2>
              <Link href="/blog" className="text-blue-600 hover:text-blue-800">
                查看全部 →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}