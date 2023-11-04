import { ImageResponse } from 'next/server'
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge'

const font = fetch(
  new URL('/src/app/assets/NotoSansJP-Bold.ttf', import.meta.url),
).then((res) => res.arrayBuffer())

// eslint-disable-next-line @typescript-eslint/require-await
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const fontData = await font
    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : '確認しましょう'

    return new ImageResponse(
      (
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
          }}
        >
          <div tw="flex max-h-full px-5">
            <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between">
              <div tw="flex flex-col text-3xl font-bold mt-0 max-w-7/12">
                <span tw="text-white text-3xl">緊急開催！！</span>
                <p
                  tw="text-blue-900 bg-white text-4xl mt-8 mb-3 w-3/4 text-left"
                  style={{
                    fontWeight: 900,
                  }}
                >
                  絶対に負けられない戦いがそこにはある。
                </p>
                <span tw="text-blue-900 bg-white text-7xl max-w-full text-left leading-tight">
                  渋谷ウィンズ決戦🔥
                </span>
                <div tw="flex text-7xl mt-5 text-white w-full items-center">
                  <div tw="flex flex-col mt-10">
                    <div tw="flex ml-10 text-7xl">
                      11 / 5<span tw="text-4xl mt-8">(Sun)</span>
                    </div>
                  </div>
                  <div tw="flex flex-col text-5xl ml-15 mt-12">
                    <span tw="text-4xl">15:00 ~ 16:00</span>
                    <span tw="text-3xl mt-3">※途中参加・退出OK</span>
                  </div>
                </div>
              </div>
              <div tw="flex">
                <div tw="flex flex-col items-center">
                  <img
                    src="https://youliangdao.s3.ap-northeast-1.amazonaws.com/11182_color.png"
                    alt=""
                    width="400"
                    height="300"
                    fit="content"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
