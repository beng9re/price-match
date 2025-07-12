import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function History() {
  const historyKey = 'search-history';
  const [queries, setQueries] = useState<string[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(historyKey) || '[]');
    setQueries(saved);
  }, []);

  return (
    <main className="p-4 md:p-8">
      <h1 className="mb-2 text-2xl font-bold">검색 히스토리</h1>
      <Link to="/" className="text-blue-500 underline">
        검색으로 돌아가기
      </Link>
      <ul className="mt-4 list-disc pl-5 space-y-1">
        {queries.length === 0 && <li>기록이 없습니다.</li>}
        {queries.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>
    </main>
  );
}

export default History;
