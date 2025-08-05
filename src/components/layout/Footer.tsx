import Link from 'next/link'
import { siteConfig, socialConfig, authorConfig } from '@/lib/config'

export function Footer() {  // ✅ 确保使用 export function
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Blog Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-gray-300 mb-4">
              {siteConfig.description}
            </p>
            <p className="text-gray-400">
              {authorConfig.bio}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  首页
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  博客
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-gray-300 hover:text-white">
                  管理后台
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">关注我</h4>
            <div className="space-y-2">
              <a
                href={socialConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white"
              >
                GitHub
              </a>
              <a
                href={socialConfig.x}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white"
              >
                Twitter
              </a>
              <a
                href={socialConfig.xiaohongshu}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white"
              >
                小红书
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}