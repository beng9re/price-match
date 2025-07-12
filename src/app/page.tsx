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
    <main style={{ padding: '2rem' }}>
      <h1>가격 매칭</h1>
      <p>상품 가격을 비교해 보세요.</p>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="상품명을 입력하세요"
        />
        <button type="submit">검색</button>
      </form>
      {results && (
        <table>
          <thead>
            <tr>
              <th>스토어</th>
              <th>가격</th>
            </tr>
          </thead>
          <tbody>
            {results.map(({ store, price }) => (
              <tr key={store}>
                <td>{store}</td>
                <td>{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  )
}
