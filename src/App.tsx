import { useEffect, useState } from 'react';
import phoneImage from './assets/smartphone.svg';
import Onboarding from './Onboarding';

interface Review {
  id: number;
  text: string;
}

interface Result {
  store: string;
  price: string;
  image: string;
  url: string;
}

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Result[] | null>(null);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem('hasSeenOnboarding');
    if (!seen) {
      setShowOnboarding(true);
    }
  }, []);

  const product = {
    name: '스마트폰 XYZ',
    description: '최신 기능을 탑재한 프리미엄 스마트폰입니다.',
    image: phoneImage,
    reviews: [
      { id: 1, text: '성능이 뛰어나고 디자인이 예뻐요.' },
      { id: 2, text: '배터리가 오래가서 만족합니다.' },
    ] as Review[],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Example data. In a real service, fetch from an API.
    const data = [
      {
        store: '스토어A',
        price: '₩990,000',
        image: product.image,
        url: '#',
      },
      {
        store: '스토어B',
        price: '₩995,000',
        image: product.image,
        url: '#',
      },
      {
        store: '스토어C',
        price: '₩1,000,000',
        image: product.image,
        url: '#',
      },
    ];
    setResults(data);
    const numericPrices = data.map((d) => Number(d.price.replace(/[^0-9]/g, '')));
    setMinPrice(Math.min(...numericPrices));
    setMaxPrice(Math.max(...numericPrices));
  };

  return (
    <>
      {showOnboarding && <Onboarding onFinish={() => setShowOnboarding(false)} />}
      <main className="p-4 md:p-8">
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
        <a href="#compare" className="mb-4 inline-block text-blue-500 underline">
          가격 비교 결과 바로가기
        </a>
      )}
      {results && (
        <section id="compare">
          <div className="mb-6 flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            <img src={product.image} alt={product.name} className="h-32 w-32" />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="mb-2 text-gray-600">{product.description}</p>
              {minPrice !== null && maxPrice !== null && (
                <p className="font-medium">
                  최저가: ₩{minPrice.toLocaleString()} / 최고가: ₩{maxPrice.toLocaleString()}
                </p>
              )}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="mb-2 font-semibold">리뷰</h3>
            <ul className="list-disc space-y-1 pl-5">
              {product.reviews.map((r) => (
                <li key={r.id}>{r.text}</li>
              ))}
            </ul>
          </div>
          <h3 className="mb-2 text-lg font-semibold">가격 비교 결과</h3>
          <table className="hidden min-w-full divide-y divide-gray-200 border md:table">
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
              {results.map(({ store, price, image, url }) => (
                <tr key={store} className="odd:bg-white even:bg-gray-50">
                  <td className="px-4 py-2">
                    <img src={image} alt={store} className="h-16 w-16 object-cover" />
                  </td>
                  <td className="px-4 py-2">
                    <a href={url} className="text-blue-600 hover:underline">
                      {store}
                    </a>
                  </td>
                  <td className="px-4 py-2">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="md:hidden space-y-3">
            {results.map(({ store, price, image, url }) => (
              <a
                href={url}
                key={store}
                className="flex items-center space-x-3 rounded border p-3"
              >
                <img src={image} alt={store} className="h-12 w-12 object-cover" />
                <div>
                  <p className="font-medium">{store}</p>
                  <p>{price}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
    </>
  );
}

export default App;
