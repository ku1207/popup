'use client'

import { Download, Plus, FileText, Flag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

// 더미 데이터
const keywordData = [
  {
    no: 1,
    taskName: '케이나이 신규키워드',
    estimationType: 'API',
    registeredAt: '2026-02-09 11:23',
    worker: 'admin@dmpkorea.co.kr',
    status: '완료',
    statusDetail: '3건 성공',
  },
  {
    no: 2,
    taskName: '지피티 제이나이 신규키워드',
    estimationType: 'API',
    registeredAt: '2026-02-09 11:05',
    worker: 'admin@dmpkorea.co.kr',
    status: '완료',
    statusDetail: '10건 성공',
  },
  {
    no: 3,
    taskName: '영실상주를_배',
    estimationType: '수동',
    registeredAt: '2026-02-06 17:10',
    worker: 'adweb@adweb.co.kr',
    status: '완료',
    statusDetail: '315건 성공',
  },
  {
    no: 4,
    taskName: '우리금을_특강광역',
    estimationType: 'API',
    registeredAt: '2026-02-02 18:57',
    worker: 'adweb@adweb.co.kr',
    status: '완료',
    statusDetail: '34건 성공',
  },
  {
    no: 5,
    taskName: '한국부동산협',
    estimationType: '수동',
    registeredAt: '2026-02-02 08:23',
    worker: 'admin@dmpkorea.co.kr',
    status: '완료',
    statusDetail: '315건 성공',
  },
  {
    no: 6,
    taskName: '테스트',
    estimationType: 'API',
    registeredAt: '2026-01-30 14:44',
    worker: 'admin@dmpkorea.co.kr',
    status: '완료',
    statusDetail: '8건 성공',
  },
  {
    no: 7,
    taskName: 'o o o',
    estimationType: '수동',
    registeredAt: '2026-01-29 17:41',
    worker: 'ad.sopo@adweb.co.kr',
    status: '완료',
    statusDetail: '9건 성공',
  },
  {
    no: 8,
    taskName: 'o o',
    estimationType: 'API',
    registeredAt: '2026-01-29 17:32',
    worker: 'ad.sopo@adweb.co.kr',
    status: '완료',
    statusDetail: '6건 성공',
  },
  {
    no: 9,
    taskName: '플러덕 바이오',
    estimationType: '수동',
    registeredAt: '2026-01-29 17:20',
    worker: 'ad.sopo@adweb.co.kr',
    status: '완료',
    statusDetail: '172건 성공',
  },
  {
    no: 10,
    taskName: '나라사물키드_대광광역',
    estimationType: 'API',
    registeredAt: '2026-01-29 17:04',
    worker: 'ad.sopo@adweb.co.kr',
    status: '완료',
    statusDetail: '30건 성공',
  },
  {
    no: 11,
    taskName: '하나키드 브랜드_나라사물키드_260129',
    estimationType: 'API',
    registeredAt: '2026-01-29 16:57',
    worker: 'adweb@adweb.co.kr',
    status: '완료',
    statusDetail: '8건 성공',
  },
  {
    no: 12,
    taskName: '영실상주를_미스신동',
    estimationType: '수동',
    registeredAt: '2026-01-29 16:38',
    worker: 'adweb@adweb.co.kr',
    status: '완료',
    statusDetail: '190건 성공',
  },
  {
    no: 13,
    taskName: '영실상주를_미스신동추천',
    estimationType: 'API',
    registeredAt: '2026-01-29 16:37',
    worker: 'adweb@adweb.co.kr',
    status: '완료',
    statusDetail: '1172건 성공',
  },
  {
    no: 14,
    taskName: '테스트',
    estimationType: '수동',
    registeredAt: '2026-01-29 16:35',
    worker: 'admin@dmpkorea.co.kr',
    status: '완료',
    statusDetail: '1건 성공',
  },
  {
    no: 15,
    taskName: '영실상주를_최종',
    estimationType: 'API',
    registeredAt: '2026-01-28 16:56',
    worker: 'adweb@adweb.co.kr',
    status: '완료',
    statusDetail: '1384건 성공',
  },
  {
    no: 16,
    taskName: '영실상주를',
    estimationType: '수동',
    registeredAt: '2026-01-28 16:04',
    worker: 'adweb@adweb.co.kr',
    status: '완료',
    statusDetail: '1172건 성공',
  },
]

export default function KeywordSearchPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1400px] mx-auto">
        {/* 페이지 제목 */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6">키워드 대량 검색</h1>

        {/* 안내 박스 */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-6">
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• 대량시 별 당 10,000개까지의 키워드를 무료로 조회할 수 있습니다.</li>
            <li>• 월 10,000개 이상의 검색 조회가 필요한 경우 유료로 결제 후 사용 가능합니다.</li>
            <li>
              • 한 번에 최대 500,000개까지의 키워드 검색을 조회할 수 있습니다. (단, 대량의 키워드 검색은 대기
              시간이 길어질 수 있습니다.)
            </li>
            <li>• 3개월간 검색 기록을 조회 가능합니다.</li>
          </ul>
        </div>

        {/* 상단 정보 및 버튼 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">⊙ 62 개</span>
            <span className="text-sm text-gray-600">검색 건의 개수 : 9,323 / 10,000</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              엑셀로 다운로드
            </Button>
            <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4" />
              검색 등록
            </Button>
          </div>
        </div>

        {/* 테이블 */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="w-[60px] text-center font-medium text-gray-700">No</TableHead>
                <TableHead className="font-medium text-gray-700">작업이름</TableHead>
                <TableHead className="w-[120px] text-center font-medium text-gray-700">견적 방식</TableHead>
                <TableHead className="w-[160px] text-center font-medium text-gray-700">등록시간</TableHead>
                <TableHead className="w-[200px] text-center font-medium text-gray-700">작업자</TableHead>
                <TableHead className="w-[100px] text-center font-medium text-gray-700">상태</TableHead>
                <TableHead className="w-[120px] text-center font-medium text-gray-700">등록</TableHead>
                <TableHead className="w-[80px] text-center font-medium text-gray-700">결과</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {keywordData.map((item) => (
                <TableRow key={item.no} className="hover:bg-gray-50">
                  <TableCell className="text-center text-sm">{item.no}</TableCell>
                  <TableCell className="text-sm">{item.taskName}</TableCell>
                  <TableCell className="text-center text-sm">
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        item.estimationType === 'API'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {item.estimationType}
                    </span>
                  </TableCell>
                  <TableCell className="text-center text-sm">{item.registeredAt}</TableCell>
                  <TableCell className="text-center text-sm">{item.worker}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-medium text-gray-900">{item.status}</span>
                      <span className="text-xs text-gray-500">{item.statusDetail}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <FileText className="w-4 h-4 text-gray-600" />
                    </button>
                  </TableCell>
                  <TableCell className="text-center">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Flag className="w-4 h-4 text-gray-600" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
