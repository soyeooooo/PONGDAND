// src/app/my/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { IoSettingsOutline } from 'react-icons/io5'

export default function MyPage() {
  return (
    <main className="max-w-screen-md mx-auto p-4 flex flex-col items-center">
      {/* 프로필 섹션 */}
      <div className="w-full flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full overflow-hidden">
            <Image
              src="/default-profile.png"
              alt="프로필"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center h-16">
            <h1 className="text-lg font-medium">김소연님</h1>
            <Link
              href="/edit-profile"
              className="text-sm text-gray-500 hover:text-gray-700 hover:underline"
            >
              정보수정
            </Link>
          </div>
        </div>
      </div>



      {/* 관리 버튼 섹션 */}
      <div className="w-full space-y-4">
        <button className="w-full h-16 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center">
          <span className="text-base">리뷰관리</span>
        </button>

        <button className="w-full h-16 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center">
          <span className="text-base">즐겨찾기</span>
        </button>

        <button className="w-full h-16 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center">
          <span className="text-base">예약관리</span>
        </button>
      </div>
    </main>
  )
}
