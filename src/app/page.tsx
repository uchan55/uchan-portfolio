import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <header className="w-full bg-gray-900 text-gray-50 py-4 shadow-md">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="https://naver.com" target='_blank'>
              <Image src="/logo.svg" alt="Logo" width={40} height={40} />
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link href="https://naver.com" target='_blank' className="hover:text-gray-400 transition-colors">
                Home
              </Link>
              <Link href="https://naver.com" target='_blank' className="hover:text-gray-400 transition-colors">
                About
              </Link>
              <Link href="https://naver.com" target='_blank' className="hover:text-gray-400 transition-colors">
                Portfolio
              </Link>
              <Link href="https://naver.com" target='_blank' className="hover:text-gray-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex space-x-4">
            <Button variant="secondary">Exit</Button>
          </div>
          <div className="md:hidden">
            <button className="p-2 rounded-md hover:bg-gray-800 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-10 xl:space-y-16">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Graphic portfolio</h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    저는 시각적으로 멋진 디자인을 만들어내는 것에 열정을 두고 있습니다.

                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#portfolio"
                    scroll={true}
                  >
                    포트폴리오 둘러보기
                  </Link>

                  <div id="portfolio" className="mt-20">
                    {/* 포트폴리오 섹션 내용 */}
                  </div>

                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="10"
                src="/HighresScreenshot00000.png"
                width="50"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex justify-between items-center">
          <div className="w-full md:w-1/2 pl-8 md:pr-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">그래픽 작업 프로세스</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                아이디어 구상부터 최종 디자인 완성까지의 단계를 소개합니다.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 pr-8 flex justify-center">

            <img src="/814d1b39-111b-4b71-837b-81886033d7b3.png" alt="그래픽 작업 프로세스" className="max-w-[80%] h-auto" />
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          <div>
            <h3 className="mb-2 text-xl font-semibold">아이디어 구상</h3>
            <p className="text-gray-500 dark:text-gray-400">
              고객의 요구사항을 바탕으로 다양한 아이디어를 구상합니다.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold">스케치 및 초안 작업</h3>
            <p className="text-gray-500 dark:text-gray-400">
              아이디어를 바탕으로 스케치와 초안을 작성합니다.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold">디지털 작업 및 수정</h3>
            <p className="text-gray-500 dark:text-gray-400">
              스케치를 디지털 파일로 옮겨 작업하고, 고객의 피드백을 반영하여 수정합니다.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold">최종 디자인 완성</h3>
            <p className="text-gray-500 dark:text-gray-400">
              모든 수정 사항을 반영하여 최종 디자인을 완성합니다.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold">피드백 및 승인</h3>
            <p className="text-gray-500 dark:text-gray-400">
              고객의 피드백을 받아 최종 디자인을 승인받습니다.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold">전달 및 후속 지원</h3>
            <p className="text-gray-500 dark:text-gray-400">
              최종 디자인 파일을 고객에게 전달하고, 필요에 따라 추가 지원을 제공합니다.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">3D Gragpic</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                창의력과 혁신을 결합하여 몰입적인 시각적 경험을 전달하는 3D 그래픽 작품
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            {/* 추가 콘텐츠에 대한 자리 표시자 */}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center">
        <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:flex lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center">작업에 대해</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center">
              프로젝트 수행에는 3Ds Max, Substance Painter, Photoshop, Unreal Engine 등 다양한 디자인 및 모델링 툴을 활용했습니다. 3Ds Max를 통해 고품질의 3D 모델링을 진행하고, Substance Painter로 사실적인 텍스처링을 수행했습니다. 또한 Photoshop을 활용하여 2D 이미지 편집 및 합성 작업을 진행하였으며, Unreal Engine을 사용해 실시간 렌더링과 상호작용이 가능한 인터랙티브 환경을 구현하였습니다.
              이러한 다양한 툴의 활용을 통해 효율적이고 체계적인 워크플로우를 구축할 수 있었습니다. 각 툴의 특성을 잘 파악하고 적절히 활용함으로써, 디자인부터 모델링, 텍스처링, 렌더링에 이르는 전 과정을 원활히 진행할 수 있었습니다. 이를 통해 완성도 높은 작품을 제작할 수 있었으며, 프로젝트의 전반적인 퀄리티를 향상시킬 수 있었습니다.
            </p>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              디자인에 대해 공부함
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:order-last">
            <img
              alt="Sophia"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="550"
              src="/Highpoly_1.jpg"
              width="550"
            />
            <img
              alt="Sophia"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="550"
              src="/Highpoly_2.jpg"
              width="550"
            />
            <img
              alt="Sophia"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="550"
              src="/Highpoly_3.jpg"
              width="550"
            />
            <img
              alt="Sophia"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="550"
              src="/Highpoly_4.jpg"
              width="550"
            />
            <img
              alt="Sophia"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="550"
              src="/Perspective_1.PNG"
              width="550"
            />
            <img
              alt="Sophia"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="550"
              src="/Perspective_2.PNG"
              width="550"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">연락하기</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              마음에 드는 프로젝트가 있는지 또는 협력을 원하시는지에 대해 이야기 나누고 아이디어, 협업, 견적 등에 대해 자유롭게 문의해 주세요.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex flex-col space-y-2">
              <Input className="max-w-lg flex-1" placeholder="이름" type="text" />
              <Input className="max-w-lg flex-1" placeholder="이메일" type="email" />
              <Textarea className="max-w-lg flex-1" placeholder="메시지" />
              <Button type="submit">제출</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
