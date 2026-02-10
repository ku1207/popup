import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="bg-[#2d2d2d] text-white">
      <div className="container mx-auto flex h-[65px] items-center justify-between px-6">
        {/* 로고 영역 */}
        <div className="flex items-center">
          <Link href="/" className="text-base font-normal text-white">
            DMP A-Bidding
          </Link>
        </div>

        {/* 네비게이션 메뉴 */}
        <nav className="flex items-center space-x-8">
          <Link
            href="/keyword"
            className="text-white/90 hover:text-white transition-colors text-sm"
          >
            키워드
          </Link>
          <Link
            href="/material"
            className="text-white/90 hover:text-white transition-colors text-sm"
          >
            소재
          </Link>
          <Link
            href="/ad-management"
            className="text-white/90 hover:text-white transition-colors text-sm"
          >
            광고관리
          </Link>
          <Link
            href="/statistics"
            className="text-white/90 hover:text-white transition-colors text-sm"
          >
            통계
          </Link>
          <Link
            href="/conversion"
            className="text-white/90 hover:text-white transition-colors text-sm"
          >
            전환분석
          </Link>
          <Link
            href="/account"
            className="text-white/90 hover:text-white transition-colors text-sm"
          >
            계정관리
          </Link>
          <Link
            href="/support"
            className="text-white/90 hover:text-white transition-colors text-sm"
          >
            고객센터
          </Link>
        </nav>

        {/* 오른쪽 사용자 정보 */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <span className="text-sm">👤</span>
            <span className="text-sm text-white/90">admin@dmpkorea.co.kr</span>
          </div>
          <Button
            variant="default"
            size="sm"
            className="bg-[#4a90e2] hover:bg-[#357abd] text-white text-sm px-4"
          >
            Log Out
          </Button>
        </div>
      </div>
    </header>
  )
}