'use client'

import { useState } from 'react'

interface Result {
  store: string
  price: string
}

export default function Home() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Result[] | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 예시 데이터. 실제 서비스에서는 API 호출을 통해 가져옵니다.
    setResults([
      { store: '스토어A', price: '₩990,000' },
      { store: '스토어B', price: '₩995,000' },
      { store: '스토어C', price: '₩1,000,000' },
    ])
  }

  return (
    <main className="p-8">
      <h1 className="mb-2 text-2xl font-bold">가격 매칭</h1>
      <p className="mb-4 text-gray-600">상품 가격을 비교해 보세요.</p>
      <form onSubmit={handleSubmit} className="mb-6 flex items-center space-x-2">
        <input
          className="flex-grow rounded border px-3 py-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="상품명을 입력하세요"
        />
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          검색
        </button>
      </form>
      {results && (
        <table className="min-w-full divide-y divide-gray-200 border">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                스토어
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                가격
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map(({ store, price }) => (
              <tr key={store} className="odd:bg-white even:bg-gray-50">
                <td className="px-4 py-2">{store}</td>
                <td className="px-4 py-2">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  )
}
