import { useState } from 'react';

interface Result {
  store: string;
  price: string;
  image: string;
}

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Result[] | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Example data. In a real service, fetch from an API.
    setResults([
      {
        store: '스토어A',
        price: '₩990,000',
        image: 'https://via.placeholder.com/100',
      },
      {
        store: '스토어B',
        price: '₩995,000',
        image: 'https://via.placeholder.com/100',
      },
      {
        store: '스토어C',
        price: '₩1,000,000',
        image: 'https://via.placeholder.com/100',
      },
    ]);
  };

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
                이미지
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                스토어
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                가격
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map(({ store, price, image }) => (
              <tr key={store} className="odd:bg-white even:bg-gray-50">
                <td className="px-4 py-2">
                  <img src={image} alt={store} className="h-16 w-16 object-cover" />
                </td>
                <td className="px-4 py-2">{store}</td>
                <td className="px-4 py-2">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

export default App;
