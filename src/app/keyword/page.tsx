'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface KeywordData {
  no: number
  title: string
  registeredAt: string
  estimateMethod: string
  author: string
  statusType: string
  statusCount: string
}

const keywordData: KeywordData[] = [
  {
    no: 1,
    title: '제미나이 신규키워드',
    registeredAt: '2026-02-09 11:23',
    estimateMethod: '일반 견적',
    author: 'admin@dmpkorea.co.kr',
    statusType: '완료',
    statusCount: '3건 성공',
  },
  {
    no: 2,
    title: '키피티 제미나이 신규키워드',
    registeredAt: '2026-02-09 11:05',
    estimateMethod: '최적 견적',
    author: 'admin@dmpkorea.co.kr',
    statusType: '완료',
    statusCount: '10건 성공',
  },
  {
    no: 3,
    title: '명실상주톱_네',
    registeredAt: '2026-02-06 17:10',
    estimateMethod: '일반 견적',
    author: 'adweb@adweb.co.kr',
    statusType: '완료',
    statusCount: '315건 성공',
  },
  {
    no: 4,
    title: '우리금융_특강경설',
    registeredAt: '2026-02-02 18:57',
    estimateMethod: '최적 견적',
    author: 'adweb@adweb.co.kr',
    statusType: '완료',
    statusCount: '34건 성공',
  },
  {
    no: 5,
    title: '한국부동산원',
    registeredAt: '2026-02-02 08:23',
    estimateMethod: '일반 견적',
    author: 'admin@dmpkorea.co.kr',
    statusType: '완료',
    statusCount: '315건 성공',
  },
  {
    no: 6,
    title: '테스트',
    registeredAt: '2026-01-30 14:44',
    estimateMethod: '일반 견적',
    author: 'admin@dmpkorea.co.kr',
    statusType: '완료',
    statusCount: '8건 성공',
  },
  {
    no: 7,
    title: 'ㅇㅇㅇ',
    registeredAt: '2026-01-29 17:41',
    estimateMethod: '최적 견적',
    author: 'ad.sopd@adweb.co.kr',
    statusType: '완료',
    statusCount: '9건 성공',
  },
  {
    no: 8,
    title: 'ㅇㅇ',
    registeredAt: '2026-01-29 17:32',
    estimateMethod: '일반 견적',
    author: 'ad.sopd@adweb.co.kr',
    statusType: '완료',
    statusCount: '6건 성공',
  },
  {
    no: 9,
    title: '클라텍 바이오',
    registeredAt: '2026-01-29 17:20',
    estimateMethod: '최적 견적',
    author: 'ad.sopd@adweb.co.kr',
    statusType: '완료',
    statusCount: '172건 성공',
  },
  {
    no: 10,
    title: '나라사랑카드_대학생적',
    registeredAt: '2026-01-29 17:04',
    estimateMethod: '일반 견적',
    author: 'ad.sopd@adweb.co.kr',
    statusType: '완료',
    statusCount: '30건 성공',
  },
  {
    no: 11,
    title: '하나카드 브랜드_나라사랑카드_260129',
    registeredAt: '2026-01-29 16:57',
    estimateMethod: '최적 견적',
    author: 'adweb@adweb.co.kr',
    statusType: '완료',
    statusCount: '8건 성공',
  },
  {
    no: 12,
    title: '명실상주톱_미소진통',
    registeredAt: '2026-01-29 16:38',
    estimateMethod: '일반 견적',
    author: 'adweb@adweb.co.kr',
    statusType: '완료',
    statusCount: '190건 성공',
  },
  {
    no: 13,
    title: '명실상주톱_미소진통케어',
    registeredAt: '2026-01-29 16:37',
    estimateMethod: '일반 견적',
    author: 'adweb@adweb.co.kr',
    statusType: '완료',
    statusCount: '1172건 성공',
  },
  {
    no: 14,
    title: '테스트',
    registeredAt: '2026-01-29 16:35',
    estimateMethod: '최적 견적',
    author: 'admin@dmpkorea.co.kr',
    statusType: '완료',
    statusCount: '1건 성공',
  },
  {
    no: 15,
    title: '명실상주톱_최종',
    registeredAt: '2026-01-28 16:56',
    estimateMethod: '일반 견적',
    author: 'adweb@adweb.co.kr',
    statusType: '완료',
    statusCount: '1384건 성공',
  },
  {
    no: 16,
    title: '명실상주톱',
    registeredAt: '2026-01-28 16:04',
    estimateMethod: '최적 견적',
    author: 'adweb@adweb.co.kr',
    statusType: '완료',
    statusCount: '1172건 성공',
  },
]

export default function KeywordPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    taskName: '',
    file: null as File | null,
    estimateMethod: '일반 견적',
    // 일반 견적 필드
    pcRank: '',
    mobileRank: '',
    // 최적 견적 필드
    pcBudget: '',
    mobileBudget: '',
    optimizationCriteria: '클릭 최대화',
  })

  // 예산 포맷팅 함수
  const formatBudget = (value: string): string => {
    if (!value || value === '0') return ''
    const num = parseInt(value)
    if (isNaN(num)) return ''

    if (num < 1000) {
      return `${num.toLocaleString()}원`
    } else if (num < 10000) {
      return `${num.toLocaleString()}원`
    } else if (num < 100000000) {
      const man = Math.floor(num / 10000)
      const remainder = num % 10000
      if (remainder === 0) {
        return `${man}만원`
      }
      return `${man}만원 ${remainder.toLocaleString()}원`
    } else {
      const eok = Math.floor(num / 100000000)
      const remainder = num % 100000000
      if (remainder === 0) {
        return `${eok}억원`
      }
      const man = Math.floor(remainder / 10000)
      if (man === 0) {
        return `${eok}억원`
      }
      return `${eok}억원 ${man}만원`
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] })
    }
  }

  const handleSubmit = () => {
    // 여기에 저장 로직 추가
    console.log('Form submitted:', formData)
    setIsDialogOpen(false)
    // 폼 초기화
    setFormData({
      taskName: '',
      file: null,
      estimateMethod: '일반 견적',
      pcRank: '',
      mobileRank: '',
      pcBudget: '',
      mobileBudget: '',
      optimizationCriteria: '클릭 최대화',
    })
  }

  const handleCancel = () => {
    setIsDialogOpen(false)
    // 폼 초기화
    setFormData({
      taskName: '',
      file: null,
      estimateMethod: '일반 견적',
      pcRank: '',
      mobileRank: '',
      pcBudget: '',
      mobileBudget: '',
      optimizationCriteria: '클릭 최대화',
    })
  }

  return (
    <div className="min-h-[calc(100vh-65px)] bg-white">
      <div className="max-w-[70%] mx-auto px-6 py-8">
        {/* 페이지 제목 */}
        <h1 className="text-2xl font-normal text-gray-900 mb-6">
          키워드 대량 검점
        </h1>

        {/* 안내 박스 */}
        <div className="bg-[#f5f5f5] rounded-sm p-5 mb-6">
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• 대행사 별 총 10,000개까지의 키워드를 무료로 조회할 수 있습니다.</li>
            <li>• 월 10,000개 이상의 검정 조회가 필요시 공급 요청 견적 후 사용 가능합니다.</li>
            <li>
              • 한 번에 최대 500,000개까지의 키워드 검색은 조회할 수 있습니다 (단, 대량의 키워드 견적은 대기 시간이 길어질 수 있습니다.)
            </li>
            <li>• 3개월간 견적 기록을 조회 가능합니다.</li>
          </ul>
        </div>

        {/* 컨트롤 바 */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-700">총 62 개</div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-700">
              견적 잔여 개수 : 9,323 / 10,000
            </span>
            <Button variant="outline" size="sm" className="text-sm">
              템플릿 다운로드
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-sm"
              onClick={() => setIsDialogOpen(true)}
            >
              + 견적 등록
            </Button>
          </div>
        </div>

        {/* 테이블 */}
        <div className="border rounded-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="text-center font-medium text-gray-700 w-16 border-r">
                  No
                </TableHead>
                <TableHead className="text-center font-medium text-gray-700 border-r">
                  작업 이름
                </TableHead>
                <TableHead className="text-center font-medium text-gray-700 w-32 border-r">
                  견적 방식
                </TableHead>
                <TableHead className="text-center font-medium text-gray-700 w-44 border-r">
                  등록시간
                </TableHead>
                <TableHead className="text-center font-medium text-gray-700 w-48 border-r">
                  작업자
                </TableHead>
                <TableHead className="text-center font-medium text-gray-700 w-32 border-r">
                  상태
                </TableHead>
                <TableHead className="text-center font-medium text-gray-700 w-20 border-r">
                  등록
                </TableHead>
                <TableHead className="text-center font-medium text-gray-700 w-20">
                  결과
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {keywordData.map((item) => (
                <TableRow key={item.no}>
                  <TableCell className="text-center text-sm border-r">
                    {item.no}
                  </TableCell>
                  <TableCell className="text-sm border-r">{item.title}</TableCell>
                  <TableCell className="text-center text-sm border-r">
                    {item.estimateMethod}
                  </TableCell>
                  <TableCell className="text-center text-sm text-gray-600 border-r">
                    {item.registeredAt}
                  </TableCell>
                  <TableCell className="text-center text-sm text-gray-600 border-r">
                    {item.author}
                  </TableCell>
                  <TableCell className="text-center text-sm border-r">
                    <div className="flex items-center justify-center gap-2">
                      <span>{item.statusType}</span>
                      <span className="text-gray-600">{item.statusCount}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center border-r">
                    <button className="text-gray-600 hover:text-gray-900 text-base">
                      ⬇
                    </button>
                  </TableCell>
                  <TableCell className="text-center">
                    <button className="text-gray-600 hover:text-gray-900 text-base">
                      ⬇
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* 견적 등록 팝업 */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>키워드 대량 견적 등록</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* 작업 이름 */}
            <div className="grid gap-2">
              <Label htmlFor="taskName">작업 이름</Label>
              <Input
                id="taskName"
                value={formData.taskName}
                onChange={(e) =>
                  setFormData({ ...formData, taskName: e.target.value })
                }
                placeholder="작업 이름을 입력하세요"
              />
            </div>

            {/* 파일 업로드 */}
            <div className="grid gap-2">
              <Label htmlFor="fileUpload">파일 업로드</Label>
              <Input
                id="fileUpload"
                type="file"
                onChange={handleFileChange}
                className="cursor-pointer"
              />
              {formData.file && (
                <p className="text-sm text-gray-600">{formData.file.name}</p>
              )}
            </div>

            {/* 견적 방식 */}
            <div className="grid gap-2">
              <Label>견적 방식</Label>
              <RadioGroup
                value={formData.estimateMethod}
                onValueChange={(value) =>
                  setFormData({ ...formData, estimateMethod: value })
                }
                className="flex flex-row gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="일반 견적" id="normal" />
                  <Label htmlFor="normal" className="font-normal cursor-pointer">
                    일반 견적
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="최적 견적" id="optimal" />
                  <Label htmlFor="optimal" className="font-normal cursor-pointer">
                    최적 견적
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* 일반 견적 조건부 필드 */}
            {formData.estimateMethod === '일반 견적' && (
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="pcRank">PC 순위</Label>
                  <Select
                    value={formData.pcRank}
                    onValueChange={(value) =>
                      setFormData({ ...formData, pcRank: value })
                    }
                  >
                    <SelectTrigger id="pcRank" className="opacity-100">
                      <SelectValue placeholder="PC 순위 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rank) => (
                        <SelectItem key={rank} value={rank.toString()}>
                          {rank}순위
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="mobileRank">Mobile 순위</Label>
                  <Select
                    value={formData.mobileRank}
                    onValueChange={(value) =>
                      setFormData({ ...formData, mobileRank: value })
                    }
                  >
                    <SelectTrigger id="mobileRank" className="opacity-100">
                      <SelectValue placeholder="Mobile 순위 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((rank) => (
                        <SelectItem key={rank} value={rank.toString()}>
                          {rank}순위
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* 최적 견적 조건부 필드 */}
            {formData.estimateMethod === '최적 견적' && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="pcBudget">PC 예산(원)</Label>
                    <Input
                      id="pcBudget"
                      type="number"
                      value={formData.pcBudget}
                      onChange={(e) =>
                        setFormData({ ...formData, pcBudget: e.target.value })
                      }
                      placeholder="PC 예산을 입력하세요"
                    />
                    {formData.pcBudget && (
                      <p className="text-sm text-gray-600">
                        {formatBudget(formData.pcBudget)}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="mobileBudget">Mobile 예산(원)</Label>
                    <Input
                      id="mobileBudget"
                      type="number"
                      value={formData.mobileBudget}
                      onChange={(e) =>
                        setFormData({ ...formData, mobileBudget: e.target.value })
                      }
                      placeholder="Mobile 예산을 입력하세요"
                    />
                    {formData.mobileBudget && (
                      <p className="text-sm text-gray-600">
                        {formatBudget(formData.mobileBudget)}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label>최적화 기준</Label>
                  <RadioGroup
                    value={formData.optimizationCriteria}
                    onValueChange={(value) =>
                      setFormData({ ...formData, optimizationCriteria: value })
                    }
                    className="flex flex-row gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="클릭 최대화" id="click" />
                      <Label
                        htmlFor="click"
                        className="font-normal cursor-pointer"
                      >
                        클릭 최대화
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="노출 최대화" id="impression" />
                      <Label
                        htmlFor="impression"
                        className="font-normal cursor-pointer"
                      >
                        노출 최대화
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={handleCancel}>
              취소
            </Button>
            <Button onClick={handleSubmit}>저장</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
