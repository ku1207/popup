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

interface KeywordData {
  no: number
  title: string
  registeredAt: string
  estimateMethod: string
  author: string
  statusType: string
  statusCount: string
  // 견적 상세 정보
  estimateDetails?: {
    pcRank?: string
    mobileRank?: string
    pcBudget?: string
    mobileBudget?: string
    optimizationCriteria?: string
  }
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
    estimateDetails: {
      pcRank: '3',
      mobileRank: '2',
    },
  },
  {
    no: 2,
    title: '키피티 제미나이 신규키워드',
    registeredAt: '2026-02-09 11:05',
    estimateMethod: 'AI 견적',
    author: 'admin@dmpkorea.co.kr',
    statusType: '완료',
    statusCount: '10건 성공',
    estimateDetails: {
      pcBudget: '5000000',
      mobileBudget: '3000000',
      optimizationCriteria: '클릭 최대화',
    },
  },
  {
    no: 3,
    title: '명실상주톱_네',
    registeredAt: '2026-02-06 17:10',
    estimateMethod: '일반 견적',
    author: 'adweb@adweb.co.kr',
    statusType: '완료',
    statusCount: '315건 성공',
    estimateDetails: {
      pcRank: '5',
      mobileRank: '3',
    },
  },
  {
    no: 4,
    title: '우리금융_특강경설',
    registeredAt: '2026-02-02 18:57',
    estimateMethod: 'AI 견적',
    author: 'adweb@adweb.co.kr',
    statusType: '완료',
    statusCount: '34건 성공',
    estimateDetails: {
      pcBudget: '10000000',
      mobileBudget: '8000000',
      optimizationCriteria: '노출 최대화',
    },
  },
  {
    no: 5,
    title: '한국부동산원',
    registeredAt: '2026-02-02 08:23',
    estimateMethod: '일반 견적',
    author: 'admin@dmpkorea.co.kr',
    statusType: '완료',
    statusCount: '315건 성공',
    estimateDetails: {
      pcRank: '2',
      mobileRank: '1',
    },
  },
  {
    no: 6,
    title: '테스트',
    registeredAt: '2026-01-30 14:44',
    estimateMethod: '일반 견적',
    author: 'admin@dmpkorea.co.kr',
    statusType: '완료',
    statusCount: '8건 성공',
    estimateDetails: {
      pcRank: '7',
      mobileRank: '4',
    },
  },
  {
    no: 7,
    title: 'ㅇㅇㅇ',
    registeredAt: '2026-01-29 17:41',
    estimateMethod: 'AI 견적',
    author: 'ad.sopd@adweb.co.kr',
    statusType: '완료',
    statusCount: '9건 성공',
    estimateDetails: {
      pcBudget: '2000000',
      mobileBudget: '1500000',
      optimizationCriteria: '클릭 최대화',
    },
  },
  {
    no: 8,
    title: 'ㅇㅇ',
    registeredAt: '2026-01-29 17:32',
    estimateMethod: '일반 견적',
    author: 'ad.sopd@adweb.co.kr',
    statusType: '완료',
    statusCount: '6건 성공',
    estimateDetails: {
      pcRank: '4',
      mobileRank: '2',
    },
  },
  {
    no: 9,
    title: '클라텍 바이오',
    registeredAt: '2026-01-29 17:20',
    estimateMethod: 'AI 견적',
    author: 'ad.sopd@adweb.co.kr',
    statusType: '완료',
    statusCount: '172건 성공',
    estimateDetails: {
      pcBudget: '15000000',
      mobileBudget: '12000000',
      optimizationCriteria: '클릭 최대화',
    },
  },
  {
    no: 10,
    title: '나라사랑카드_대학생적',
    registeredAt: '2026-01-29 17:04',
    estimateMethod: '일반 견적',
    author: 'ad.sopd@adweb.co.kr',
    statusType: '완료',
    statusCount: '30건 성공',
    estimateDetails: {
      pcRank: '6',
      mobileRank: '3',
    },
  },
  {
    no: 11,
    title: '하나카드 브랜드_나라사랑카드_260129',
    registeredAt: '2026-01-29 16:57',
    estimateMethod: 'AI 견적',
    author: 'adweb@adweb.co.kr',
    statusType: '완료',
    statusCount: '8건 성공',
    estimateDetails: {
      pcBudget: '7000000',
      mobileBudget: '5000000',
      optimizationCriteria: '노출 최대화',
    },
  },
  {
    no: 12,
    title: '명실상주톱_미소진통',
    registeredAt: '2026-01-29 16:38',
    estimateMethod: '일반 견적',
    author: 'adweb@adweb.co.kr',
    statusType: '완료',
    statusCount: '190건 성공',
    estimateDetails: {
      pcRank: '1',
      mobileRank: '1',
    },
  },
  {
    no: 13,
    title: '명실상주톱_미소진통케어',
    registeredAt: '2026-01-29 16:37',
    estimateMethod: '일반 견적',
    author: 'adweb@adweb.co.kr',
    statusType: '완료',
    statusCount: '1172건 성공',
    estimateDetails: {
      pcRank: '8',
      mobileRank: '5',
    },
  },
  {
    no: 14,
    title: '테스트',
    registeredAt: '2026-01-29 16:35',
    estimateMethod: 'AI 견적',
    author: 'admin@dmpkorea.co.kr',
    statusType: '완료',
    statusCount: '1건 성공',
    estimateDetails: {
      pcBudget: '3000000',
      mobileBudget: '2000000',
      optimizationCriteria: '클릭 최대화',
    },
  },
  {
    no: 15,
    title: '명실상주톱_최종',
    registeredAt: '2026-01-28 16:56',
    estimateMethod: '일반 견적',
    author: 'adweb@adweb.co.kr',
    statusType: '완료',
    statusCount: '1384건 성공',
    estimateDetails: {
      pcRank: '3',
      mobileRank: '2',
    },
  },
  {
    no: 16,
    title: '명실상주톱',
    registeredAt: '2026-01-28 16:04',
    estimateMethod: 'AI 견적',
    author: 'adweb@adweb.co.kr',
    statusType: '완료',
    statusCount: '1172건 성공',
    estimateDetails: {
      pcBudget: '20000000',
      mobileBudget: '15000000',
      optimizationCriteria: '노출 최대화',
    },
  },
]

export default function KeywordPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isAiDialogOpen, setIsAiDialogOpen] = useState(false)
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false)
  const [isTemplateDialogOpen, setIsTemplateDialogOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<KeywordData | null>(null)

  // 일반 견적 등록 폼 데이터
  const [regularFormData, setRegularFormData] = useState({
    taskName: '',
    file: null as File | null,
  })

  // AI 견적 등록 폼 데이터
  const [aiFormData, setAiFormData] = useState({
    taskName: '',
    file: null as File | null,
    pcBudget: '',
    mobileBudget: '',
    optimizationCriteria: '클릭 최대화',
  })

  const handleEstimateMethodClick = (item: KeywordData) => {
    setSelectedItem(item)
    setIsDetailDialogOpen(true)
  }

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

  // 일반 견적 핸들러
  const handleRegularFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setRegularFormData({ ...regularFormData, file: e.target.files[0] })
    }
  }

  const handleRegularSubmit = () => {
    console.log('Regular form submitted:', regularFormData)
    setIsDialogOpen(false)
    setRegularFormData({
      taskName: '',
      file: null,
    })
  }

  const handleRegularCancel = () => {
    setIsDialogOpen(false)
    setRegularFormData({
      taskName: '',
      file: null,
    })
  }

  // AI 견적 핸들러
  const handleAiFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAiFormData({ ...aiFormData, file: e.target.files[0] })
    }
  }

  const handleAiSubmit = () => {
    console.log('AI form submitted:', aiFormData)
    setIsAiDialogOpen(false)
    setAiFormData({
      taskName: '',
      file: null,
      pcBudget: '',
      mobileBudget: '',
      optimizationCriteria: '클릭 최대화',
    })
  }

  const handleAiCancel = () => {
    setIsAiDialogOpen(false)
    setAiFormData({
      taskName: '',
      file: null,
      pcBudget: '',
      mobileBudget: '',
      optimizationCriteria: '클릭 최대화',
    })
  }

  return (
    <div className="min-h-[calc(100vh-65px)] bg-white">
      <div className="max-w-[90%] mx-auto px-6 py-8">
        {/* 페이지 제목 */}
        <h1 className="text-2xl font-normal text-gray-900 mb-6">
          키워드 대량 견적
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
            <Button
              variant="outline"
              size="sm"
              className="text-sm"
              onClick={() => setIsTemplateDialogOpen(true)}
            >
              템플릿 다운로드
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-sm"
              onClick={() => setIsDialogOpen(true)}
            >
              일반 견적 등록
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-sm"
              onClick={() => setIsAiDialogOpen(true)}
            >
              AI 견적 등록
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
                <TableHead className="text-center font-medium text-gray-700 w-64 border-r">
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
                    <button
                      onClick={() => handleEstimateMethodClick(item)}
                      className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
                    >
                      {item.estimateMethod}
                    </button>
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
                      <span className="border-l border-gray-300 pl-2 text-gray-600">
                        {item.statusCount}
                      </span>
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

      {/* 일반 견적 등록 팝업 */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-lg">일반 견적 등록</DialogTitle>
          </DialogHeader>
          <div className="grid gap-5 py-4">
            {/* 작업 이름 */}
            <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
              <Label htmlFor="regularTaskName" className="text-sm">
                작업 이름
              </Label>
              <Input
                id="regularTaskName"
                value={regularFormData.taskName}
                onChange={(e) =>
                  setRegularFormData({ ...regularFormData, taskName: e.target.value })
                }
                placeholder="작업 이름을 입력해 주세요"
                className="flex-1"
              />
            </div>

            {/* 파일업로드 */}
            <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
              <Label htmlFor="regularFileUpload" className="text-sm">
                파일업로드
              </Label>
              <div className="flex-1">
                <Input
                  id="regularFileUpload"
                  type="file"
                  onChange={handleRegularFileChange}
                  className="cursor-pointer"
                />
                {regularFormData.file && (
                  <p className="text-sm text-gray-600 mt-1">{regularFormData.file.name}</p>
                )}
              </div>
            </div>
          </div>
          <DialogFooter className="gap-2">
            <Button
              onClick={handleRegularSubmit}
              className="bg-[#50c0b5] hover:bg-[#45a89f] text-white"
            >
              저장
            </Button>
            <Button variant="outline" onClick={handleRegularCancel}>
              취소
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* AI 견적 등록 팝업 */}
      <Dialog open={isAiDialogOpen} onOpenChange={setIsAiDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-lg">AI 견적 등록</DialogTitle>
          </DialogHeader>
          <div className="grid gap-5 py-4">
            {/* 작업 이름 */}
            <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
              <Label htmlFor="aiTaskName" className="text-sm">
                작업 이름
              </Label>
              <Input
                id="aiTaskName"
                value={aiFormData.taskName}
                onChange={(e) =>
                  setAiFormData({ ...aiFormData, taskName: e.target.value })
                }
                placeholder="작업 이름을 입력해 주세요"
                className="flex-1"
              />
            </div>

            {/* 파일업로드 */}
            <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
              <Label htmlFor="aiFileUpload" className="text-sm">
                파일업로드
              </Label>
              <div className="flex-1">
                <Input
                  id="aiFileUpload"
                  type="file"
                  onChange={handleAiFileChange}
                  className="cursor-pointer"
                />
                {aiFormData.file && (
                  <p className="text-sm text-gray-600 mt-1">{aiFormData.file.name}</p>
                )}
              </div>
            </div>

            {/* PC 예산 */}
            <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
              <Label htmlFor="aiPcBudget" className="text-sm">
                PC 예산(원)
              </Label>
              <div className="flex-1">
                <Input
                  id="aiPcBudget"
                  type="number"
                  value={aiFormData.pcBudget}
                  onChange={(e) =>
                    setAiFormData({ ...aiFormData, pcBudget: e.target.value })
                  }
                  placeholder="PC 예산을 입력하세요"
                />
                {aiFormData.pcBudget && (
                  <p className="text-sm text-gray-600 mt-1">
                    {formatBudget(aiFormData.pcBudget)}
                  </p>
                )}
              </div>
            </div>

            {/* Mobile 예산 */}
            <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
              <Label htmlFor="aiMobileBudget" className="text-sm">
                Mobile 예산(원)
              </Label>
              <div className="flex-1">
                <Input
                  id="aiMobileBudget"
                  type="number"
                  value={aiFormData.mobileBudget}
                  onChange={(e) =>
                    setAiFormData({ ...aiFormData, mobileBudget: e.target.value })
                  }
                  placeholder="Mobile 예산을 입력하세요"
                />
                {aiFormData.mobileBudget && (
                  <p className="text-sm text-gray-600 mt-1">
                    {formatBudget(aiFormData.mobileBudget)}
                  </p>
                )}
              </div>
            </div>

            {/* 최적화 기준 */}
            <div className="grid grid-cols-[120px_1fr] gap-4 items-start">
              <Label className="text-sm pt-2">최적화 기준</Label>
              <RadioGroup
                value={aiFormData.optimizationCriteria}
                onValueChange={(value) =>
                  setAiFormData({ ...aiFormData, optimizationCriteria: value })
                }
                className="flex flex-row gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="클릭 최대화" id="aiClick" />
                  <Label
                    htmlFor="aiClick"
                    className="font-normal cursor-pointer"
                  >
                    클릭 최대화
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="노출 최대화" id="aiImpression" />
                  <Label
                    htmlFor="aiImpression"
                    className="font-normal cursor-pointer"
                  >
                    노출 최대화
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <DialogFooter className="gap-2">
            <Button
              onClick={handleAiSubmit}
              className="bg-[#50c0b5] hover:bg-[#45a89f] text-white"
            >
              저장
            </Button>
            <Button variant="outline" onClick={handleAiCancel}>
              취소
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 템플릿 다운로드 팝업 */}
      <Dialog open={isTemplateDialogOpen} onOpenChange={setIsTemplateDialogOpen}>
        <DialogContent className="max-w-[1400px]">
          <DialogHeader>
            <DialogTitle className="text-lg">템플릿 다운로드</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-4 gap-4 py-6">
            {/* 전체순위 견적 카드 */}
            <div className="bg-[#f5f5f5] rounded-lg p-5 flex flex-col">
              <h3 className="text-base font-medium mb-3">전체순위 견적</h3>
              <p className="text-sm text-gray-700 mb-4 flex-grow">
                키워드별 1~10 순위까지의 입찰가를 조회합니다.
                <br />
                순위별로 예상 입찰가를 확인할 수 있습니다.
              </p>
              <Button
                variant="outline"
                className="w-full mt-auto"
                onClick={() => {
                  console.log('전체순위 견적 템플릿 다운로드')
                }}
              >
                전체순위 견적 템플릿
              </Button>
            </div>

            {/* 순위 견적 카드 */}
            <div className="bg-[#f5f5f5] rounded-lg p-5 flex flex-col">
              <h3 className="text-base font-medium mb-3">순위 견적</h3>
              <p className="text-sm text-gray-700 mb-4 flex-grow">
                원하는 순위의 입찰가를 조회합니다.
                <br />
                PC와 Mobile 각각 원하는 순위를 지정할 수 있습니다.
              </p>
              <Button
                variant="outline"
                className="w-full mt-auto"
                onClick={() => {
                  console.log('순위 견적 템플릿 다운로드')
                }}
              >
                순위 견적 템플릿
              </Button>
            </div>

            {/* 입찰가 견적 카드 */}
            <div className="bg-[#f5f5f5] rounded-lg p-5 flex flex-col">
              <h3 className="text-base font-medium mb-3">입찰가 견적</h3>
              <p className="text-sm text-gray-700 mb-4 flex-grow">
                특정 입찰가로 집행 시 예상 순위를 조회합니다.
                <br />
                PC와 Mobile 각각 입찰가를 지정할 수 있습니다.
              </p>
              <Button
                variant="outline"
                className="w-full mt-auto"
                onClick={() => {
                  console.log('입찰가 견적 템플릿 다운로드')
                }}
              >
                입찰가 견적 템플릿
              </Button>
            </div>

            {/* AI 견적 카드 */}
            <div className="bg-[#f5f5f5] rounded-lg p-5 flex flex-col">
              <h3 className="text-base font-medium mb-3">AI 견적</h3>
              <p className="text-sm text-gray-700 mb-4 flex-grow">
                AI를 통한 최적화 견적을 제공합니다.
              </p>
              <Button
                variant="outline"
                className="w-full mt-auto"
                onClick={() => {
                  console.log('AI 견적 템플릿 다운로드')
                }}
              >
                AI 견적 템플릿
              </Button>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsTemplateDialogOpen(false)}
            >
              닫기
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 견적 상세 정보 팝업 */}
      <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-lg">견적 상세 정보</DialogTitle>
          </DialogHeader>
          <div className="grid gap-5 py-4">
            {selectedItem && (
              <>
                {/* 작업 이름 */}
                <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
                  <Label className="text-sm">작업 이름</Label>
                  <Input
                    value={selectedItem.title}
                    disabled
                    className="bg-gray-50 cursor-not-allowed"
                  />
                </div>

                {/* 견적 방식 */}
                <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
                  <Label className="text-sm">견적 방식</Label>
                  <Input
                    value={selectedItem.estimateMethod}
                    disabled
                    className="bg-gray-50 cursor-not-allowed"
                  />
                </div>

                {/* 일반 견적 */}
                {selectedItem.estimateMethod === '일반 견적' &&
                  selectedItem.estimateDetails && (
                    <>
                      <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
                        <Label className="text-sm">PC 순위</Label>
                        <Input
                          value={`${selectedItem.estimateDetails.pcRank}순위`}
                          disabled
                          className="bg-gray-50 cursor-not-allowed"
                        />
                      </div>
                      <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
                        <Label className="text-sm">Mobile 순위</Label>
                        <Input
                          value={`${selectedItem.estimateDetails.mobileRank}순위`}
                          disabled
                          className="bg-gray-50 cursor-not-allowed"
                        />
                      </div>
                    </>
                  )}

                {/* AI 견적 */}
                {selectedItem.estimateMethod === 'AI 견적' &&
                  selectedItem.estimateDetails && (
                    <>
                      <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
                        <Label className="text-sm">PC 예산(원)</Label>
                        <div className="flex-1">
                          <Input
                            value={selectedItem.estimateDetails.pcBudget || ''}
                            disabled
                            className="bg-gray-50 cursor-not-allowed"
                          />
                          {selectedItem.estimateDetails.pcBudget && (
                            <p className="text-sm text-gray-600 mt-1">
                              {formatBudget(selectedItem.estimateDetails.pcBudget)}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
                        <Label className="text-sm">Mobile 예산(원)</Label>
                        <div className="flex-1">
                          <Input
                            value={selectedItem.estimateDetails.mobileBudget || ''}
                            disabled
                            className="bg-gray-50 cursor-not-allowed"
                          />
                          {selectedItem.estimateDetails.mobileBudget && (
                            <p className="text-sm text-gray-600 mt-1">
                              {formatBudget(
                                selectedItem.estimateDetails.mobileBudget
                              )}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] gap-4 items-center">
                        <Label className="text-sm">최적화 기준</Label>
                        <Input
                          value={selectedItem.estimateDetails.optimizationCriteria || ''}
                          disabled
                          className="bg-gray-50 cursor-not-allowed"
                        />
                      </div>
                    </>
                  )}
              </>
            )}
          </div>
          <DialogFooter className="gap-2">
            <Button
              onClick={() => setIsDetailDialogOpen(false)}
              className="bg-[#50c0b5] hover:bg-[#45a89f] text-white"
            >
              닫기
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
