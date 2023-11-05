/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ImageResponse } from 'next/server'

import { initialGenreData } from '@/constants/initialGenreData'
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge'

const font = fetch(
  new URL('/src/app/assets/MPLUS1p-Bold', import.meta.url),
).then((res) => res.arrayBuffer())

// eslint-disable-next-line @typescript-eslint/require-await
export async function GET(request: Request) {
  try {
    const fontData = await font
    const { searchParams } = new URL(request.url)
    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : ''
    // ?description=<description>
    const hasDescription = searchParams.has('description')
    const description = hasDescription
      ? searchParams.get('description')?.slice(0, 100)
      : ''
    // ?date=<date>
    const hasDate = searchParams.has('description')
    const date = hasDate ? searchParams.get('date')?.slice(0, 100) : ''
    const month = new Date(date ?? '').getMonth() + 1
    const day = new Date(date ?? '').getDate()
    const dayOfWeek = new Date(date ?? '').getDay()
    const dayOfWeekStr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][
      dayOfWeek
    ]
    // ?startTime=<startTime>
    const hasStartTime = searchParams.has('startTime')
    const startTime = hasStartTime
      ? searchParams.get('startTime')?.slice(0, 100)
      : ''
    // ?endTime=<endTime>
    const hasEndTime = searchParams.has('endTime')
    const endTime = hasEndTime ? searchParams.get('endTime')?.slice(0, 100) : ''

    // ?genre=<genre>
    const hasGenre = searchParams.has('genre')
    const genre = hasGenre ? searchParams.get('genre')?.slice(0, 100) : ''

    const genreSrc = initialGenreData.find((data) => data.genre === genre)
      ?.ogpImage

    // ?templateId=<templateId>
    const hasTemplateId = searchParams.has('templateId')
    const templateId = hasTemplateId
      ? searchParams.get('templateId')?.slice(0, 100)
      : ''

    return new ImageResponse(
      templateId === '0' || templateId === '1' ? (
        // いつものテンプレート
        <div
          style={{
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${`data:image/svg+xml,${encodeURIComponent(
              '<svg id="visual" viewBox="0 0 1200 630" width="1200" height="630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 96L18.2 104.3C36.3 112.7 72.7 129.3 109 124C145.3 118.7 181.7 91.3 218 83C254.3 74.7 290.7 85.3 327 89.5C363.3 93.7 399.7 91.3 436 87C472.3 82.7 508.7 76.3 545.2 76.3C581.7 76.3 618.3 82.7 654.8 92.2C691.3 101.7 727.7 114.3 764 120.7C800.3 127 836.7 127 873 127C909.3 127 945.7 127 982 119.7C1018.3 112.3 1054.7 97.7 1091 88.2C1127.3 78.7 1163.7 74.3 1181.8 72.2L1200 70L1200 0L1181.8 0C1163.7 0 1127.3 0 1091 0C1054.7 0 1018.3 0 982 0C945.7 0 909.3 0 873 0C836.7 0 800.3 0 764 0C727.7 0 691.3 0 654.8 0C618.3 0 581.7 0 545.2 0C508.7 0 472.3 0 436 0C399.7 0 363.3 0 327 0C290.7 0 254.3 0 218 0C181.7 0 145.3 0 109 0C72.7 0 36.3 0 18.2 0L0 0Z" fill="#6198ff"></path><path d="M0 196L18.2 211.8C36.3 227.7 72.7 259.3 109 274.2C145.3 289 181.7 287 218 276.5C254.3 266 290.7 247 327 263.7C363.3 280.3 399.7 332.7 436 328.5C472.3 324.3 508.7 263.7 545.2 252.2C581.7 240.7 618.3 278.3 654.8 279.3C691.3 280.3 727.7 244.7 764 244.7C800.3 244.7 836.7 280.3 873 298.2C909.3 316 945.7 316 982 319.2C1018.3 322.3 1054.7 328.7 1091 321.3C1127.3 314 1163.7 293 1181.8 282.5L1200 272L1200 68L1181.8 70.2C1163.7 72.3 1127.3 76.7 1091 86.2C1054.7 95.7 1018.3 110.3 982 117.7C945.7 125 909.3 125 873 125C836.7 125 800.3 125 764 118.7C727.7 112.3 691.3 99.7 654.8 90.2C618.3 80.7 581.7 74.3 545.2 74.3C508.7 74.3 472.3 80.7 436 85C399.7 89.3 363.3 91.7 327 87.5C290.7 83.3 254.3 72.7 218 81C181.7 89.3 145.3 116.7 109 122C72.7 127.3 36.3 110.7 18.2 102.3L0 94Z" fill="#3c80ff"></path><path d="M0 291L18.2 312C36.3 333 72.7 375 109 390.7C145.3 406.3 181.7 395.7 218 379.8C254.3 364 290.7 343 327 352.5C363.3 362 399.7 402 436 398.8C472.3 395.7 508.7 349.3 545.2 349.3C581.7 349.3 618.3 395.7 654.8 403.2C691.3 410.7 727.7 379.3 764 378.3C800.3 377.3 836.7 406.7 873 418.2C909.3 429.7 945.7 423.3 982 426.5C1018.3 429.7 1054.7 442.3 1091 436C1127.3 429.7 1163.7 404.3 1181.8 391.7L1200 379L1200 270L1181.8 280.5C1163.7 291 1127.3 312 1091 319.3C1054.7 326.7 1018.3 320.3 982 317.2C945.7 314 909.3 314 873 296.2C836.7 278.3 800.3 242.7 764 242.7C727.7 242.7 691.3 278.3 654.8 277.3C618.3 276.3 581.7 238.7 545.2 250.2C508.7 261.7 472.3 322.3 436 326.5C399.7 330.7 363.3 278.3 327 261.7C290.7 245 254.3 264 218 274.5C181.7 285 145.3 287 109 272.2C72.7 257.3 36.3 225.7 18.2 209.8L0 194Z" fill="#0066ff"></path><path d="M0 354L18.2 377C36.3 400 72.7 446 109 459.7C145.3 473.3 181.7 454.7 218 440C254.3 425.3 290.7 414.7 327 428.3C363.3 442 399.7 480 436 476.8C472.3 473.7 508.7 429.3 545.2 427.2C581.7 425 618.3 465 654.8 465C691.3 465 727.7 425 764 430.3C800.3 435.7 836.7 486.3 873 502.2C909.3 518 945.7 499 982 492.7C1018.3 486.3 1054.7 492.7 1091 492.7C1127.3 492.7 1163.7 486.3 1181.8 483.2L1200 480L1200 377L1181.8 389.7C1163.7 402.3 1127.3 427.7 1091 434C1054.7 440.3 1018.3 427.7 982 424.5C945.7 421.3 909.3 427.7 873 416.2C836.7 404.7 800.3 375.3 764 376.3C727.7 377.3 691.3 408.7 654.8 401.2C618.3 393.7 581.7 347.3 545.2 347.3C508.7 347.3 472.3 393.7 436 396.8C399.7 400 363.3 360 327 350.5C290.7 341 254.3 362 218 377.8C181.7 393.7 145.3 404.3 109 388.7C72.7 373 36.3 331 18.2 310L0 289Z" fill="#0059dd"></path><path d="M0 631L18.2 631C36.3 631 72.7 631 109 631C145.3 631 181.7 631 218 631C254.3 631 290.7 631 327 631C363.3 631 399.7 631 436 631C472.3 631 508.7 631 545.2 631C581.7 631 618.3 631 654.8 631C691.3 631 727.7 631 764 631C800.3 631 836.7 631 873 631C909.3 631 945.7 631 982 631C1018.3 631 1054.7 631 1091 631C1127.3 631 1163.7 631 1181.8 631L1200 631L1200 478L1181.8 481.2C1163.7 484.3 1127.3 490.7 1091 490.7C1054.7 490.7 1018.3 484.3 982 490.7C945.7 497 909.3 516 873 500.2C836.7 484.3 800.3 433.7 764 428.3C727.7 423 691.3 463 654.8 463C618.3 463 581.7 423 545.2 425.2C508.7 427.3 472.3 471.7 436 474.8C399.7 478 363.3 440 327 426.3C290.7 412.7 254.3 423.3 218 438C181.7 452.7 145.3 471.3 109 457.7C72.7 444 36.3 398 18.2 375L0 352Z" fill="#004cbb"></path></svg>',
            )}`})`,
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            fontFamily: 'Noto Sans JP, "sans-serif"',
          }}
        >
          <div tw="flex max-h-full px-5">
            <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between">
              <div tw="flex flex-col text-3xl font-bold mt-0 max-w-7/12">
                <span tw="text-white text-3xl">緊急開催！！</span>
                <p tw="bg-white text-4xl mt-8 mb-3 w-4/5 text-left">
                  {description}
                </p>
                <span tw="text-blue-900 bg-white text-7xl max-w-full text-left leading-tight">
                  {title}
                </span>
                <div tw="flex text-7xl mt-5 text-white w-full items-center">
                  <div tw="flex flex-col mt-10">
                    <div tw="flex ml-10 text-7xl">
                      {`${month}.${day}`}
                      <span tw="text-4xl mt-8">{`(${dayOfWeekStr})`}</span>
                    </div>
                  </div>
                  <div tw="flex flex-col text-5xl ml-15 mt-12">
                    <span tw="text-4xl">{`${startTime} 〜 ${endTime}`}</span>
                    <span tw="text-3xl mt-3">※途中参加・退出OK</span>
                  </div>
                </div>
              </div>
              <div tw="flex flex-col items-center bg-opacity-50">
                <img
                  src={genreSrc}
                  alt="画像"
                  width="400"
                  height="400"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : templateId == '2' ? (
        // RUNTEQコミュニティイベントのテンプレート
        <div
          style={{
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#FC7400',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            fontFamily: 'Noto Sans JP, "sans-serif"',
          }}
          tw="p-6"
        >
          <div tw="flex max-h-full bg-white h-full">
            <div tw="flex flex-col md:flex-row w-full px-15 py-6 justify-between">
              <div tw="flex flex-col text-3xl font-bold mt-0 max-w-2/3">
                <div tw="flex flex-col max-w-3/4">
                  <span
                    tw="text-3xl mt-8 text-left text-white"
                    style={{
                      backgroundColor: '#FC7400',
                    }}
                  >
                    {description}
                  </span>
                </div>

                <span tw="text-7xl mt-10 max-w-full text-left leading-tight">
                  {title}
                </span>
                <div tw="flex text-7xl mt-5 w-full items-center">
                  <div tw="flex flex-col mt-10">
                    <div tw="flex">
                      <span tw="text-7xl">{`${month}.${day}`}</span>
                      <span tw="text-4xl mt-8">{`(${dayOfWeekStr})`}</span>
                    </div>
                    <span tw="text-4xl">{`${startTime} 〜 ${endTime}`}</span>
                  </div>
                  <div tw="flex flex-col text-5xl ml-4 mt-12">
                    <span
                      tw="text-4xl mt-3"
                      style={{
                        color: '#FC7400',
                      }}
                    >
                      ※途中参加・退出OK
                    </span>
                  </div>
                </div>
              </div>
              <div tw="flex">
                <div tw="flex flex-col mt-10">
                  <img
                    src={genreSrc}
                    alt=""
                    width="400"
                    height="400"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : templateId == '3' ? (
        // 赤いテンプレート
        <div
          style={{
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${`data:image/svg+xml,${encodeURIComponent(
              '<svg id="visual" viewBox="0 0 1200 630" width="1200" height="630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 58L109 58L109 96L218 96L218 45L327 45L327 58L436 58L436 83L545 83L545 114L655 114L655 77L764 77L764 133L873 133L873 64L982 64L982 70L1091 70L1091 45L1200 45L1200 58L1200 0L1200 0L1091 0L1091 0L982 0L982 0L873 0L873 0L764 0L764 0L655 0L655 0L545 0L545 0L436 0L436 0L327 0L327 0L218 0L218 0L109 0L109 0L0 0Z" fill="#fa7268"></path><path d="M0 209L109 209L109 171L218 171L218 108L327 108L327 184L436 184L436 171L545 171L545 240L655 240L655 133L764 133L764 278L873 278L873 140L982 140L982 133L1091 133L1091 146L1200 146L1200 159L1200 56L1200 43L1091 43L1091 68L982 68L982 62L873 62L873 131L764 131L764 75L655 75L655 112L545 112L545 81L436 81L436 56L327 56L327 43L218 43L218 94L109 94L109 56L0 56Z" fill="#ea5e66"></path><path d="M0 392L109 392L109 486L218 486L218 366L327 366L327 398L436 398L436 436L545 436L545 373L655 373L655 348L764 348L764 492L873 492L873 392L982 392L982 335L1091 335L1091 322L1200 322L1200 322L1200 157L1200 144L1091 144L1091 131L982 131L982 138L873 138L873 276L764 276L764 131L655 131L655 238L545 238L545 169L436 169L436 182L327 182L327 106L218 106L218 169L109 169L109 207L0 207Z" fill="#d84a64"></path><path d="M0 524L109 524L109 587L218 587L218 543L327 543L327 574L436 574L436 568L545 568L545 549L655 549L655 543L764 543L764 574L873 574L873 562L982 562L982 562L1091 562L1091 555L1200 555L1200 555L1200 320L1200 320L1091 320L1091 333L982 333L982 390L873 390L873 490L764 490L764 346L655 346L655 371L545 371L545 434L436 434L436 396L327 396L327 364L218 364L218 484L109 484L109 390L0 390Z" fill="#c53762"></path><path d="M0 631L109 631L109 631L218 631L218 631L327 631L327 631L436 631L436 631L545 631L545 631L655 631L655 631L764 631L764 631L873 631L873 631L982 631L982 631L1091 631L1091 631L1200 631L1200 631L1200 553L1200 553L1091 553L1091 560L982 560L982 560L873 560L873 572L764 572L764 541L655 541L655 547L545 547L545 566L436 566L436 572L327 572L327 541L218 541L218 585L109 585L109 522L0 522Z" fill="#b0235f"></path></svg>',
            )}`})`,
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            fontFamily: 'Noto Sans JP, "sans-serif"',
          }}
        >
          <div tw="flex max-h-full px-5">
            <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between">
              <div tw="flex flex-col text-3xl font-bold mt-0 max-w-7/12">
                <div
                  tw="py-3 text-white items-center text-4xl bg-black w-full flex flex-col max-w-2/3"
                  style={{
                    transform: 'skew(-20deg)',
                  }}
                >
                  <span>待望の開催！！！</span>
                </div>
                <p tw="bg-white text-3xl mt-8 mb-3 w-4/5 text-left">
                  {description}
                </p>
                <span tw="bg-white text-6xl max-w-full text-left leading-tight">
                  {title}
                </span>
                <div tw="flex text-white text-5xl w-full items-center mt-10">
                  <div tw="flex flex-col">
                    <div tw="flex ml-10">
                      {`${month} / ${day}`}
                      <span tw="text-3xl mt-3">{`(${dayOfWeekStr})`}</span>
                    </div>
                  </div>
                  <div tw="flex flex-col ml-10">
                    <span tw="">{`${startTime} 〜 ${endTime}`}</span>
                  </div>
                </div>
                <span tw="text-white text-2xl mt-2">
                  ※当日の状況により変更となる可能性があります
                </span>
              </div>
              <div tw="flex flex-col">
                <div tw="flex flex-col">
                  <img
                    src={genreSrc}
                    alt="画像"
                    width="400"
                    height="400"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div tw="flex flex-col border border-white p-3 ml-50 mt-10 items-center">
                  <span tw="text-white text-4xl">完全非公開</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : templateId === '4' ? (
        // RUNTEQ技術イベントのテンプレート
        <div
          style={{
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            fontFamily: 'Noto Sans JP, "sans-serif"',
          }}
          tw="py-6 px-8 bg-indigo-500"
        >
          <div tw="flex max-h-full bg-white h-full">
            <div tw="flex flex-col md:flex-row w-full px-15 py-6 justify-between">
              <div tw="flex flex-col text-3xl font-bold mt-0 max-w-2/3">
                <div tw="flex flex-col max-w-3/4">
                  <span tw="text-3xl mt-8 text-left text-white leading-normal bg-indigo-500">
                    {description}
                  </span>
                </div>

                <span tw="text-7xl mt-10 max-w-full text-left leading-tight">
                  {title}
                </span>
                <div tw="flex text-7xl mt-5 w-full items-center">
                  <div tw="flex flex-col mt-10">
                    <div tw="flex">
                      <span tw="text-7xl">{`${month}.${day}`}</span>
                      <span tw="text-4xl mt-6">({`${dayOfWeekStr}`})</span>
                    </div>
                    <span tw="text-4xl">{`${startTime} ~ ${endTime}`}</span>
                  </div>
                  <div tw="flex flex-col text-5xl ml-4 mt-12">
                    <span tw="text-4xl mt-3 text-indigo-500">
                      ※途中参加・退出OK
                    </span>
                  </div>
                </div>
              </div>
              <div tw="flex">
                <div tw="flex flex-col mt-10">
                  <img
                    src={genreSrc}
                    alt=""
                    width="400"
                    height="400"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : templateId === '5' ? (
        // オフライン開催のテンプレート
        <div
          style={{
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${`data:image/svg+xml,${encodeURIComponent(
              '<svg id="visual" viewBox="0 0 1200 630" width="1200" height="630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><defs><filter id="blur1" x="-10%" y="-10%" width="120%" height="120%"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="201" result="effect1_foregroundBlur"></feGaussianBlur></filter></defs><rect width="1200" height="630" fill="#6600FF"></rect><g filter="url(#blur1)"><circle cx="111" cy="236" fill="#00CC99" r="447"></circle><circle cx="1150" cy="596" fill="#6600FF" r="447"></circle><circle cx="1104" cy="241" fill="#00CC99" r="447"></circle><circle cx="332" cy="621" fill="#00CC99" r="447"></circle><circle cx="1113" cy="17" fill="#6600FF" r="447"></circle><circle cx="305" cy="358" fill="#00CC99" r="447"></circle></g></svg>',
            )}`})`,
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            fontFamily: 'Noto Sans JP, "sans-serif"',
          }}
        >
          <div tw="flex flex-col px-4 items-center">
            <div tw="flex flex-col text-3xl font-bold bg-white items-center px-15 py-10">
              <span tw="text-3xl bg-gray-800 text-white font-bold p-3">
                オフライン開催！！
              </span>
              <div tw="flex flex-col items-center mt-5">
                <div tw="text-4xl border-black border-t-2 py-3 border-b-2 max-w-full w-full mb-2">
                  {description}
                </div>
                <span tw="text-6xl leading-tight mt-5">{title}</span>
              </div>
              <span tw="text-3xl leading-tight font-normal bg-indigo-200 mt-5">
                当日のご参加お待ちしています♪
              </span>
            </div>
            <div tw="flex w-full items-center font-bold mt-5">
              <div tw="flex ml-10 text-6xl">
                {' '}
                {`${month} / ${day}`} {`(${dayOfWeekStr})`}
              </div>
              <div tw="flex flex-col text-5xl ml-10">
                <span tw="text-6xl">{`${startTime} ~ ${endTime}`}</span>
              </div>
            </div>
            <span tw="text-3xl mt-5">
              ※当日の状況により変更となる可能性があります
            </span>
          </div>
        </div>
      ) : templateId === '6' ? (
        // 黄色いテンプレート
        <div
          style={{
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${`data:image/svg+xml,${encodeURIComponent(
              '<svg id="visual" viewBox="0 0 1200 630" width="1200" height="630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="1200" height="630" fill="#001220"></rect><defs><linearGradient id="grad1_0" x1="47.5%" y1="0%" x2="100%" y2="100%"><stop offset="11.904761904761909%" stop-color="#001220" stop-opacity="1"></stop><stop offset="88.09523809523809%" stop-color="#001220" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_0" x1="0%" y1="0%" x2="52.5%" y2="100%"><stop offset="11.904761904761909%" stop-color="#001220" stop-opacity="1"></stop><stop offset="88.09523809523809%" stop-color="#001220" stop-opacity="1"></stop></linearGradient></defs><g transform="translate(1200, 0)"><path d="M0 567C-78.9 557 -157.8 546.9 -208.9 504.4C-260.1 461.9 -283.6 386.9 -338.7 338.7C-393.8 290.5 -480.5 269 -523.8 217C-567.2 165 -567.1 82.5 -567 0L0 0Z" fill="#FBAE3C"></path></g><g transform="translate(0, 630)"><path d="M0 -567C66.6 -540.5 133.1 -514 203.2 -490.6C273.3 -467.1 346.9 -446.8 400.9 -400.9C454.9 -355.1 489.3 -283.8 513.7 -212.8C538.1 -141.7 552.5 -70.9 567 0L0 0Z" fill="#FBAE3C"></path></g></svg>',
            )}`})`,
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            fontFamily: 'Noto Sans JP, "sans-serif"',
          }}
        >
          <div tw="flex max-h-full px-5">
            <div tw="flex flex-col flex-row w-full py-12 px-4 items-center justify-between">
              <div tw="flex flex-col items-center">
                <img
                  src={genreSrc}
                  alt="画像"
                  width="400"
                  height="400"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div tw="flex flex-col text-3xl font-bold mt-0 max-w-7/12 items-center">
                <span tw="text-3xl bg-white max-w-2/5 p-3">オフライン開催</span>
                <span tw="text-white text-7xl max-w-full leading-tight">
                  {title}
                </span>
                <p tw="text-white text-4xl mt-8 mb-3">{description}</p>
              </div>
            </div>
          </div>
          <div tw="flex text-7xl font-bold text-white w-full items-center bg-gray-800 py-8">
            <div tw="flex flex-col">
              <div tw="flex ml-10 text-7xl">
                {`${month}.${day}`}
                <span tw="text-4xl mt-8">{`(${dayOfWeekStr})`}</span>
              </div>
            </div>
            <span tw="text-5xl ml-15">{`${startTime} ~ ${endTime}`}</span>
            <span tw="ml-20">｜</span>
            <div tw="flex flex-col ml-10">
              <span tw="text-5xl">参加費無料</span>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'NotoSansJP',
            data: fontData,
            style: 'normal',
          },
        ],
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
