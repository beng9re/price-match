import { useState } from 'react';

interface OnboardingProps {
  onFinish: () => void;
}

const steps = [
  {
    title: '환영합니다!',
    description: '가격 매칭 서비스를 통해 원하는 상품의 최저가를 쉽게 찾아보세요.',
  },
  {
    title: '검색',
    description: '검색창에 상품명을 입력하면 여러 스토어의 가격을 비교합니다.',
  },
  {
    title: '시작하기',
    description: '지금 바로 원하는 상품을 검색해 보세요!',
  },
];

function Onboarding({ onFinish }: OnboardingProps) {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem('hasSeenOnboarding', 'true');
      onFinish();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-sm space-y-4 text-center">
        <h2 className="text-xl font-semibold">{steps[step].title}</h2>
        <p className="text-gray-700">{steps[step].description}</p>
        <button
          type="button"
          onClick={handleNext}
          className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          {step < steps.length - 1 ? '다음' : '닫기'}
        </button>
      </div>
    </div>
  );
}

export default Onboarding;
