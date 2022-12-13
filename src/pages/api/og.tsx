/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/no-anonymous-default-export */
import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

const fontRegular = fetch(
  new URL("../../../assets/SpaceMono-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function (req: NextRequest) {
  const fontRegularData = await fontRegular;

  if (!req.nextUrl.searchParams.get) {
    return;
  }

  const { searchParams } = req.nextUrl;

  const image = searchParams.has("image") ? searchParams.get("image") : "" as string;
  const name = searchParams.has("name") ? searchParams.get("name") : "" as string;

  return new ImageResponse(
    (
      <div tw="flex text-center justify-center align-center bg-black h-full w-full">
        <div tw="flex absolute left-2">
          <svg
            width="391"
            height="624"
            viewBox="0 0 391 624"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_12_67" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 594.004V528.996C0.166335 528.999 0.333006 529 0.5 529C16.7924 529 30 515.792 30 499.5V502H33V499H30V499.5C30 483.208 16.7924 470 0.5 470C0.333006 470 0.166335 470.001 0 470.004V28.9958C0.166335 28.9986 0.333006 29 0.5 29C16.6254 29 29.7289 16.0618 29.9958 0H342.004C342.268 15.8954 355.105 28.7317 371 28.9958V470.004C354.938 470.271 342 483.375 342 499.5V499H339V502H342V499.5C342 515.625 354.938 528.729 371 528.996V594.004C354.938 594.271 342 607.375 342 623.5C342 623.667 342.001 623.834 342.004 624H29.9958C29.9986 623.834 30 623.667 30 623.5C30 607.208 16.7924 594 0.5 594C0.333006 594 0.166335 594.001 0 594.004ZM39 502H45V499H39V502ZM51 502H57V499H51V502ZM63 502H69V499H63V502ZM75 502H81V499H75V502ZM87 502H93V499H87V502ZM99 502H105V499H99V502ZM111 502H117V499H111V502ZM123 502H129V499H123V502ZM135 502H141V499H135V502ZM147 502H153V499H147V502ZM159 502H165V499H159V502ZM171 502H177V499H171V502ZM183 502H189V499H183V502ZM195 502H201V499H195V502ZM207 502H213V499H207V502ZM219 502H225V499H219V502ZM231 502H237V499H231V502ZM243 502H249V499H243V502ZM255 502H261V499H255V502ZM267 502H273V499H267V502ZM279 502H285V499H279V502ZM291 502H297V499H291V502ZM303 502H309V499H303V502ZM315 502H321V499H315V502ZM327 502H333V499H327V502Z"
              />
            </mask>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 594.004V528.996C0.166335 528.999 0.333006 529 0.5 529C16.7924 529 30 515.792 30 499.5V502H33V499H30V499.5C30 483.208 16.7924 470 0.5 470C0.333006 470 0.166335 470.001 0 470.004V28.9958C0.166335 28.9986 0.333006 29 0.5 29C16.6254 29 29.7289 16.0618 29.9958 0H342.004C342.268 15.8954 355.105 28.7317 371 28.9958V470.004C354.938 470.271 342 483.375 342 499.5V499H339V502H342V499.5C342 515.625 354.938 528.729 371 528.996V594.004C354.938 594.271 342 607.375 342 623.5C342 623.667 342.001 623.834 342.004 624H29.9958C29.9986 623.834 30 623.667 30 623.5C30 607.208 16.7924 594 0.5 594C0.333006 594 0.166335 594.001 0 594.004ZM39 502H45V499H39V502ZM51 502H57V499H51V502ZM63 502H69V499H63V502ZM75 502H81V499H75V502ZM87 502H93V499H87V502ZM99 502H105V499H99V502ZM111 502H117V499H111V502ZM123 502H129V499H123V502ZM135 502H141V499H135V502ZM147 502H153V499H147V502ZM159 502H165V499H159V502ZM171 502H177V499H171V502ZM183 502H189V499H183V502ZM195 502H201V499H195V502ZM207 502H213V499H207V502ZM219 502H225V499H219V502ZM231 502H237V499H231V502ZM243 502H249V499H243V502ZM255 502H261V499H255V502ZM267 502H273V499H267V502ZM279 502H285V499H279V502ZM291 502H297V499H291V502ZM303 502H309V499H303V502ZM315 502H321V499H315V502ZM327 502H333V499H327V502Z"
              fill="#FEFEFE"
            />
            <path
              d="M0 528.996L0.0165101 527.996L-1 527.979V528.996H0ZM0 594.004H-1V595.021L0.0165101 595.004L0 594.004ZM30 502H29V503H30V502ZM33 502V503H34V502H33ZM33 499H34V498H33V499ZM30 499V498H29V499H30ZM0 470.004H-1V471.021L0.0166935 471.004L0 470.004ZM0 28.9958L0.0166132 27.996L-1 27.9791V28.9958H0ZM29.9958 0V-1H29.0123L28.996 -0.0166163L29.9958 0ZM342.004 0L343.004 -0.0166163L342.988 -1H342.004V0ZM371 28.9958H372V28.0123L371.017 27.996L371 28.9958ZM371 470.004L371.017 471.004L372 470.988V470.004H371ZM342 499H343V498H342V499ZM339 499V498H338V499H339ZM339 502H338V503H339V502ZM342 502V503H343V502H342ZM371 528.996H372V528.012L371.017 527.996L371 528.996ZM371 594.004L371.017 595.004L372 594.988V594.004H371ZM342.004 624V625H343.021L343.004 623.983L342.004 624ZM29.9958 624L28.996 623.983L28.9791 625H29.9958V624ZM45 502V503H46V502H45ZM39 502H38V503H39V502ZM45 499H46V498H45V499ZM39 499V498H38V499H39ZM57 502V503H58V502H57ZM51 502H50V503H51V502ZM57 499H58V498H57V499ZM51 499V498H50V499H51ZM69 502V503H70V502H69ZM63 502H62V503H63V502ZM69 499H70V498H69V499ZM63 499V498H62V499H63ZM81 502V503H82V502H81ZM75 502H74V503H75V502ZM81 499H82V498H81V499ZM75 499V498H74V499H75ZM93 502V503H94V502H93ZM87 502H86V503H87V502ZM93 499H94V498H93V499ZM87 499V498H86V499H87ZM105 502V503H106V502H105ZM99 502H98V503H99V502ZM105 499H106V498H105V499ZM99 499V498H98V499H99ZM117 502V503H118V502H117ZM111 502H110V503H111V502ZM117 499H118V498H117V499ZM111 499V498H110V499H111ZM129 502V503H130V502H129ZM123 502H122V503H123V502ZM129 499H130V498H129V499ZM123 499V498H122V499H123ZM141 502V503H142V502H141ZM135 502H134V503H135V502ZM141 499H142V498H141V499ZM135 499V498H134V499H135ZM153 502V503H154V502H153ZM147 502H146V503H147V502ZM153 499H154V498H153V499ZM147 499V498H146V499H147ZM165 502V503H166V502H165ZM159 502H158V503H159V502ZM165 499H166V498H165V499ZM159 499V498H158V499H159ZM177 502V503H178V502H177ZM171 502H170V503H171V502ZM177 499H178V498H177V499ZM171 499V498H170V499H171ZM189 502V503H190V502H189ZM183 502H182V503H183V502ZM189 499H190V498H189V499ZM183 499V498H182V499H183ZM201 502V503H202V502H201ZM195 502H194V503H195V502ZM201 499H202V498H201V499ZM195 499V498H194V499H195ZM213 502V503H214V502H213ZM207 502H206V503H207V502ZM213 499H214V498H213V499ZM207 499V498H206V499H207ZM225 502V503H226V502H225ZM219 502H218V503H219V502ZM225 499H226V498H225V499ZM219 499V498H218V499H219ZM237 502V503H238V502H237ZM231 502H230V503H231V502ZM237 499H238V498H237V499ZM231 499V498H230V499H231ZM249 502V503H250V502H249ZM243 502H242V503H243V502ZM249 499H250V498H249V499ZM243 499V498H242V499H243ZM261 502V503H262V502H261ZM255 502H254V503H255V502ZM261 499H262V498H261V499ZM255 499V498H254V499H255ZM273 502V503H274V502H273ZM267 502H266V503H267V502ZM273 499H274V498H273V499ZM267 499V498H266V499H267ZM285 502V503H286V502H285ZM279 502H278V503H279V502ZM285 499H286V498H285V499ZM279 499V498H278V499H279ZM297 502V503H298V502H297ZM291 502H290V503H291V502ZM297 499H298V498H297V499ZM291 499V498H290V499H291ZM309 502V503H310V502H309ZM303 502H302V503H303V502ZM309 499H310V498H309V499ZM303 499V498H302V499H303ZM321 502V503H322V502H321ZM315 502H314V503H315V502ZM321 499H322V498H321V499ZM315 499V498H314V499H315ZM333 502V503H334V502H333ZM327 502H326V503H327V502ZM333 499H334V498H333V499ZM327 499V498H326V499H327ZM-1 528.996V594.004H1V528.996H-1ZM0.5 528C0.33861 528 0.177444 527.999 0.0165101 527.996L-0.0165101 529.996C0.155227 529.999 0.327402 530 0.5 530V528ZM29 499.5C29 515.24 16.2401 528 0.5 528V530C17.3447 530 31 516.345 31 499.5H29ZM31 502V499.5H29V502H31ZM33 501H30V503H33V501ZM32 499V502H34V499H32ZM30 500H33V498H30V500ZM31 499.5V499H29V499.5H31ZM0.5 471C16.2401 471 29 483.76 29 499.5H31C31 482.655 17.3447 469 0.5 469V471ZM0.0166935 471.004C0.177383 471.001 0.338488 471 0.5 471V469C0.327524 469 0.155288 469.001 -0.0166935 469.004L0.0166935 471.004ZM-1 28.9958V470.004H1V28.9958H-1ZM0.5 28C0.338549 28 0.177417 27.9987 0.0166132 27.996L-0.0166132 29.9957C0.155254 29.9986 0.327462 30 0.5 30V28ZM28.996 -0.0166163C28.7381 15.5003 16.0787 28 0.5 28V30C17.1721 30 30.7197 16.6232 30.9957 0.0166163L28.996 -0.0166163ZM342.004 -1H29.9958V1H342.004V-1ZM371.017 27.996C355.66 27.7408 343.259 15.3395 343.004 -0.0166163L341.004 0.0166163C341.277 16.4513 354.549 29.7226 370.983 29.9957L371.017 27.996ZM372 470.004V28.9958H370V470.004H372ZM343 499.5C343 483.921 355.5 471.262 371.017 471.004L370.983 469.004C354.377 469.28 341 482.828 341 499.5H343ZM341 499V499.5H343V499H341ZM339 500H342V498H339V500ZM340 502V499H338V502H340ZM342 501H339V503H342V501ZM341 499.5V502H343V499.5H341ZM371.017 527.996C355.5 527.738 343 515.079 343 499.5H341C341 516.172 354.377 529.72 370.983 529.996L371.017 527.996ZM372 594.004V528.996H370V594.004H372ZM343 623.5C343 607.921 355.5 595.262 371.017 595.004L370.983 593.004C354.377 593.28 341 606.828 341 623.5H343ZM343.004 623.983C343.001 623.823 343 623.662 343 623.5H341C341 623.672 341.001 623.845 341.004 624.017L343.004 623.983ZM29.9958 625H342.004V623H29.9958V625ZM29 623.5C29 623.661 28.9987 623.823 28.996 623.983L30.9957 624.017C30.9986 623.845 31 623.673 31 623.5H29ZM0.5 595C16.2401 595 29 607.76 29 623.5H31C31 606.655 17.3447 593 0.5 593V595ZM0.0165101 595.004C0.177444 595.001 0.33861 595 0.5 595V593C0.327402 593 0.155227 593.001 -0.0165101 593.004L0.0165101 595.004ZM45 501H39V503H45V501ZM44 499V502H46V499H44ZM39 500H45V498H39V500ZM40 502V499H38V502H40ZM57 501H51V503H57V501ZM56 499V502H58V499H56ZM51 500H57V498H51V500ZM52 502V499H50V502H52ZM69 501H63V503H69V501ZM68 499V502H70V499H68ZM63 500H69V498H63V500ZM64 502V499H62V502H64ZM81 501H75V503H81V501ZM80 499V502H82V499H80ZM75 500H81V498H75V500ZM76 502V499H74V502H76ZM93 501H87V503H93V501ZM92 499V502H94V499H92ZM87 500H93V498H87V500ZM88 502V499H86V502H88ZM105 501H99V503H105V501ZM104 499V502H106V499H104ZM99 500H105V498H99V500ZM100 502V499H98V502H100ZM117 501H111V503H117V501ZM116 499V502H118V499H116ZM111 500H117V498H111V500ZM112 502V499H110V502H112ZM129 501H123V503H129V501ZM128 499V502H130V499H128ZM123 500H129V498H123V500ZM124 502V499H122V502H124ZM141 501H135V503H141V501ZM140 499V502H142V499H140ZM135 500H141V498H135V500ZM136 502V499H134V502H136ZM153 501H147V503H153V501ZM152 499V502H154V499H152ZM147 500H153V498H147V500ZM148 502V499H146V502H148ZM165 501H159V503H165V501ZM164 499V502H166V499H164ZM159 500H165V498H159V500ZM160 502V499H158V502H160ZM177 501H171V503H177V501ZM176 499V502H178V499H176ZM171 500H177V498H171V500ZM172 502V499H170V502H172ZM189 501H183V503H189V501ZM188 499V502H190V499H188ZM183 500H189V498H183V500ZM184 502V499H182V502H184ZM201 501H195V503H201V501ZM200 499V502H202V499H200ZM195 500H201V498H195V500ZM196 502V499H194V502H196ZM213 501H207V503H213V501ZM212 499V502H214V499H212ZM207 500H213V498H207V500ZM208 502V499H206V502H208ZM225 501H219V503H225V501ZM224 499V502H226V499H224ZM219 500H225V498H219V500ZM220 502V499H218V502H220ZM237 501H231V503H237V501ZM236 499V502H238V499H236ZM231 500H237V498H231V500ZM232 502V499H230V502H232ZM249 501H243V503H249V501ZM248 499V502H250V499H248ZM243 500H249V498H243V500ZM244 502V499H242V502H244ZM261 501H255V503H261V501ZM260 499V502H262V499H260ZM255 500H261V498H255V500ZM256 502V499H254V502H256ZM273 501H267V503H273V501ZM272 499V502H274V499H272ZM267 500H273V498H267V500ZM268 502V499H266V502H268ZM285 501H279V503H285V501ZM284 499V502H286V499H284ZM279 500H285V498H279V500ZM280 502V499H278V502H280ZM297 501H291V503H297V501ZM296 499V502H298V499H296ZM291 500H297V498H291V500ZM292 502V499H290V502H292ZM309 501H303V503H309V501ZM308 499V502H310V499H308ZM303 500H309V498H303V500ZM304 502V499H302V502H304ZM321 501H315V503H321V501ZM320 499V502H322V499H320ZM315 500H321V498H315V500ZM316 502V499H314V502H316ZM333 501H327V503H333V501ZM332 499V502H334V499H332ZM327 500H333V498H327V500ZM328 502V499H326V502H328Z"
              fill="#F0F0F0"
              mask="url(#path-1-inside-1_12_67)"
            />
            <path
              d="M77.736 417L70.184 394.6H72.616L79.688 415.688H78.472L85.768 394.6H87.944L95.144 415.688H93.992L101.128 394.6H103.4L95.848 417H93.352L86.472 397H87.112L80.2 417H77.736ZM124.126 394.6H126.462V417H124.126V394.6ZM110.11 417H107.742V394.6H110.11V417ZM124.35 406.664H109.854V404.584H124.35V406.664ZM133.773 417V394.6H136.141V417H133.773ZM147.781 417V396.648H139.909V394.6H158.021V396.648H150.149V417H147.781ZM163.916 404.616H175.756V406.632H163.916V404.616ZM164.172 414.952H177.644V417H161.804V394.6H177.164V396.648H164.172V414.952ZM191.586 417V394.6H199.97C201.868 394.6 203.5 394.909 204.866 395.528C206.231 396.125 207.276 397 208.002 398.152C208.748 399.283 209.122 400.659 209.122 402.28C209.122 403.859 208.748 405.224 208.002 406.376C207.276 407.507 206.231 408.381 204.866 409C203.5 409.619 201.868 409.928 199.97 409.928H192.898L193.954 408.808V417H191.586ZM193.954 409L192.898 407.848H199.906C202.146 407.848 203.842 407.368 204.994 406.408C206.167 405.427 206.753 404.051 206.753 402.28C206.753 400.488 206.167 399.101 204.994 398.12C203.842 397.139 202.146 396.648 199.906 396.648H192.898L193.954 395.528V409ZM209.533 417L219.773 394.6H222.109L232.349 417H229.853L220.445 395.976H221.405L211.997 417H209.533ZM213.565 411.016L214.269 409.096H227.293L227.997 411.016H213.565ZM236.054 417V394.6H244.438C246.337 394.6 247.969 394.909 249.334 395.528C250.7 396.125 251.745 397 252.47 398.152C253.217 399.283 253.59 400.659 253.59 402.28C253.59 403.859 253.217 405.224 252.47 406.376C251.745 407.507 250.7 408.381 249.334 409C247.969 409.597 246.337 409.896 244.438 409.896H237.366L238.422 408.808V417H236.054ZM251.35 417L245.59 408.872H248.15L253.942 417H251.35ZM238.422 409L237.366 407.88H244.374C246.614 407.88 248.31 407.389 249.462 406.408C250.636 405.427 251.222 404.051 251.222 402.28C251.222 400.488 250.636 399.101 249.462 398.12C248.31 397.139 246.614 396.648 244.374 396.648H237.366L238.422 395.528V409ZM263.219 417V396.648H255.347V394.6H273.459V396.648H265.587V417H263.219ZM282.43 417V408.68L282.974 410.152L273.47 394.6H275.998L284.35 408.264H283.006L291.358 394.6H293.726L284.222 410.152L284.766 408.68V417H282.43Z"
              fill="#18181B"
            />
            <rect x="69" y="379" width="225" height="4" fill="#FFED00" />
            <rect x="69" y="426" width="225" height="4" fill="#FFED00" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M273.536 3.85231L264 0H276.013C275.041 1.11476 274.215 2.39887 273.536 3.85231ZM298.077 0.838463C298.022 0.549357 297.958 0.269869 297.883 0H313.577C313.619 0.981139 313.605 1.97302 313.534 2.97566C313.426 5.14616 312.777 7.55019 311.585 10.1878C310.457 12.8133 308.628 15.8656 306.098 19.3444L293.611 36.5776L322.031 31.1635L324.403 43.6117L274.516 53.1152L272.629 43.2132L293.51 14.3151C295.175 12.1087 296.341 10.1926 297.009 8.56697C297.676 6.94132 298.053 5.5013 298.14 4.2469C298.29 2.98052 298.269 1.84437 298.077 0.838463ZM325.483 163.683C320.077 164.713 314.984 164.315 310.206 162.488C305.416 160.599 301.31 157.342 297.888 152.717C294.466 148.092 292.066 142.164 290.689 134.934C289.311 127.704 289.364 121.309 290.845 115.75C292.327 110.19 294.954 105.683 298.726 102.228C302.486 98.7103 307.07 96.4364 312.477 95.4064C317.946 94.3645 323.045 94.794 327.772 96.6949C332.55 98.521 336.65 101.747 340.072 106.372C343.494 110.997 345.894 116.925 347.271 124.155C348.649 131.385 348.596 137.78 347.114 143.339C345.633 148.899 343.012 153.437 339.252 156.955C335.542 160.398 330.953 162.641 325.483 163.683ZM323.022 150.763C325.6 150.272 327.694 149.124 329.305 147.318C330.978 145.501 332.05 142.919 332.52 139.572C333.052 136.213 332.846 132.05 331.9 127.083C330.953 122.117 329.615 118.169 327.885 115.241C326.217 112.302 324.271 110.294 322.047 109.22C319.885 108.133 317.515 107.835 314.938 108.326C312.423 108.805 310.329 109.953 308.655 111.771C307.045 113.576 305.973 116.158 305.44 119.517C304.97 122.864 305.208 127.021 306.155 131.988C307.101 136.954 308.408 140.908 310.075 143.848C311.806 146.775 313.752 148.783 315.913 149.869C318.138 150.944 320.507 151.242 323.022 150.763ZM318.306 282.981L316.419 273.079L337.3 244.181C338.965 241.975 340.131 240.059 340.798 238.433C341.466 236.807 341.843 235.367 341.93 234.113C342.08 232.847 342.059 231.711 341.867 230.705C341.364 228.064 340.069 226.226 337.982 225.19C335.947 224.079 333.2 223.854 329.742 224.512C326.976 225.039 324.5 226.065 322.314 227.589C320.192 229.1 318.529 231.144 317.325 233.718L304.832 228.671C306.628 224.42 309.58 220.763 313.688 217.7C317.795 214.638 322.804 212.543 328.713 211.417C333.617 210.483 338.048 210.486 342.006 211.426C346.014 212.291 349.3 213.978 351.863 216.487C354.489 218.984 356.185 222.244 356.951 226.267C357.358 228.405 357.483 230.596 357.324 232.842C357.216 235.012 356.567 237.416 355.375 240.054C354.247 242.68 352.417 245.732 349.888 249.211L337.401 266.444L365.821 261.03L368.192 273.478L318.306 282.981ZM340.201 397.914L338.314 388.012L359.195 359.114C360.86 356.908 362.026 354.992 362.693 353.366C363.361 351.741 363.738 350.301 363.825 349.046C363.975 347.78 363.954 346.644 363.762 345.638C363.259 342.997 361.964 341.159 359.877 340.123C357.842 339.013 355.095 338.787 351.637 339.445C348.871 339.972 346.395 340.998 344.209 342.522C342.087 344.034 340.424 346.077 339.22 348.652L326.727 343.604C328.523 339.353 331.475 335.696 335.583 332.633C339.69 329.571 344.698 327.476 350.608 326.35C355.512 325.416 359.943 325.419 363.901 326.359C366.593 326.94 368.96 327.892 371 329.215V365.224L359.296 381.377L371 379.147V392.047L340.201 397.914ZM390 388.428L390.087 388.411L390 387.952V388.428Z"
              fill="#F0F0F0"
            />
            <path
              d="M68 90C68 82.6644 64.3356 79 57 79C64.3356 79 68 75.3333 68 68C68 75.3333 71.6667 79 79 79C71.6667 79 68 82.6644 68 90Z"
              fill="#FFED00"
            />
            <path
              d="M240 617C240 609.664 236.336 606 229 606C236.336 606 240 602.333 240 595C240 602.333 243.667 606 251 606C243.667 606 240 609.664 240 617Z"
              fill="#FFED00"
            />
            <path
              d="M305.5 316C305.5 310.998 303.002 308.5 298 308.5C303.002 308.5 305.5 306 305.5 301C305.5 306 308 308.5 313 308.5C308 308.5 305.5 310.998 305.5 316Z"
              fill="#FFED00"
            />
            <path
              d="M37 460C37 453.998 34.0018 451 28 451C34.0018 451 37 448 37 442C37 448 40 451 46 451C40 451 37 453.998 37 460Z"
              fill="#FFED00"
            />
            <path
              d="M143.858 269V268.184L148.514 263.624C148.941 263.208 149.261 262.845 149.474 262.536C149.688 262.216 149.832 261.917 149.906 261.64C149.981 261.363 150.018 261.101 150.018 260.856C150.018 260.205 149.794 259.693 149.346 259.32C148.909 258.947 148.258 258.76 147.394 258.76C146.733 258.76 146.146 258.861 145.634 259.064C145.133 259.267 144.701 259.581 144.338 260.008L143.522 259.304C143.96 258.792 144.52 258.397 145.202 258.12C145.885 257.843 146.648 257.704 147.49 257.704C148.248 257.704 148.904 257.827 149.458 258.072C150.013 258.307 150.44 258.653 150.738 259.112C151.048 259.571 151.202 260.109 151.202 260.728C151.202 261.091 151.149 261.448 151.042 261.8C150.946 262.152 150.765 262.525 150.498 262.92C150.242 263.304 149.864 263.741 149.362 264.232L145.09 268.424L144.77 267.976H151.714V269H143.858ZM152.952 269V268.184L157.608 263.624C158.035 263.208 158.355 262.845 158.568 262.536C158.781 262.216 158.925 261.917 159 261.64C159.075 261.363 159.112 261.101 159.112 260.856C159.112 260.205 158.888 259.693 158.44 259.32C158.003 258.947 157.352 258.76 156.488 258.76C155.827 258.76 155.24 258.861 154.728 259.064C154.227 259.267 153.795 259.581 153.432 260.008L152.616 259.304C153.053 258.792 153.613 258.397 154.296 258.12C154.979 257.843 155.741 257.704 156.584 257.704C157.341 257.704 157.997 257.827 158.552 258.072C159.107 258.307 159.533 258.653 159.832 259.112C160.141 259.571 160.296 260.109 160.296 260.728C160.296 261.091 160.243 261.448 160.136 261.8C160.04 262.152 159.859 262.525 159.592 262.92C159.336 263.304 158.957 263.741 158.456 264.232L154.184 268.424L153.864 267.976H160.808V269H152.952ZM161.178 270.6L166.458 255.528H167.498L162.218 270.6H161.178ZM170.206 269V258.28L170.718 258.824H167.566V257.8H171.358V269H170.206ZM173.827 269V268.184L178.483 263.624C178.91 263.208 179.23 262.845 179.443 262.536C179.656 262.216 179.8 261.917 179.875 261.64C179.95 261.363 179.987 261.101 179.987 260.856C179.987 260.205 179.763 259.693 179.315 259.32C178.878 258.947 178.227 258.76 177.363 258.76C176.702 258.76 176.115 258.861 175.603 259.064C175.102 259.267 174.67 259.581 174.307 260.008L173.491 259.304C173.928 258.792 174.488 258.397 175.171 258.12C175.854 257.843 176.616 257.704 177.459 257.704C178.216 257.704 178.872 257.827 179.427 258.072C179.982 258.307 180.408 258.653 180.707 259.112C181.016 259.571 181.171 260.109 181.171 260.728C181.171 261.091 181.118 261.448 181.011 261.8C180.915 262.152 180.734 262.525 180.467 262.92C180.211 263.304 179.832 263.741 179.331 264.232L175.059 268.424L174.739 267.976H181.683V269H173.827ZM187.444 265.16V264.168H191.636V265.16H187.444ZM199.565 269V258.28L200.077 258.824H196.925V257.8H200.717V269H199.565ZM207.651 269.096C206.755 269.096 205.981 268.968 205.331 268.712C204.691 268.456 204.195 268.088 203.843 267.608C203.501 267.117 203.331 266.541 203.331 265.88C203.331 265.24 203.496 264.696 203.827 264.248C204.168 263.789 204.659 263.437 205.299 263.192C205.949 262.947 206.733 262.824 207.651 262.824C208.557 262.824 209.336 262.947 209.987 263.192C210.637 263.437 211.133 263.789 211.475 264.248C211.827 264.696 212.003 265.24 212.003 265.88C212.003 266.541 211.827 267.117 211.475 267.608C211.123 268.088 210.621 268.456 209.971 268.712C209.32 268.968 208.547 269.096 207.651 269.096ZM207.651 268.12C208.643 268.12 209.416 267.917 209.971 267.512C210.536 267.107 210.819 266.557 210.819 265.864C210.819 265.171 210.536 264.627 209.971 264.232C209.416 263.827 208.643 263.624 207.651 263.624C206.659 263.624 205.885 263.827 205.331 264.232C204.776 264.627 204.499 265.171 204.499 265.864C204.499 266.557 204.776 267.107 205.331 267.512C205.885 267.917 206.659 268.12 207.651 268.12ZM207.651 263.48C206.819 263.48 206.109 263.368 205.523 263.144C204.947 262.92 204.504 262.6 204.195 262.184C203.885 261.757 203.731 261.251 203.731 260.664C203.731 260.045 203.891 259.517 204.211 259.08C204.541 258.632 205 258.291 205.587 258.056C206.173 257.821 206.861 257.704 207.651 257.704C208.44 257.704 209.128 257.821 209.715 258.056C210.312 258.291 210.776 258.632 211.107 259.08C211.437 259.517 211.602 260.045 211.602 260.664C211.602 261.251 211.448 261.757 211.139 262.184C210.829 262.6 210.376 262.92 209.779 263.144C209.192 263.368 208.483 263.48 207.651 263.48ZM207.651 262.712C208.525 262.712 209.208 262.531 209.699 262.168C210.189 261.805 210.435 261.32 210.435 260.712C210.435 260.072 210.179 259.576 209.667 259.224C209.165 258.861 208.493 258.68 207.651 258.68C206.808 258.68 206.136 258.861 205.635 259.224C205.133 259.576 204.883 260.067 204.883 260.696C204.883 261.315 205.123 261.805 205.603 262.168C206.093 262.531 206.776 262.712 207.651 262.712ZM218.638 260.52C219.32 260.52 219.918 260.653 220.43 260.92C220.952 261.176 221.358 261.571 221.646 262.104C221.944 262.637 222.094 263.309 222.094 264.12V269H220.958V264.232C220.958 263.347 220.734 262.68 220.286 262.232C219.848 261.773 219.23 261.544 218.43 261.544C217.832 261.544 217.31 261.667 216.862 261.912C216.424 262.147 216.083 262.493 215.838 262.952C215.603 263.4 215.486 263.944 215.486 264.584V269H214.35V257.128H215.486V262.904L215.262 262.472C215.528 261.864 215.955 261.389 216.542 261.048C217.128 260.696 217.827 260.52 218.638 260.52ZM139.926 289.08C139.233 289.08 138.577 288.984 137.958 288.792C137.339 288.589 136.854 288.339 136.502 288.04L137.014 287.144C137.355 287.4 137.793 287.624 138.326 287.816C138.859 287.997 139.419 288.088 140.006 288.088C140.806 288.088 141.382 287.965 141.734 287.72C142.086 287.464 142.262 287.128 142.262 286.712C142.262 286.403 142.161 286.163 141.958 285.992C141.766 285.811 141.51 285.677 141.19 285.592C140.87 285.496 140.513 285.416 140.118 285.352C139.723 285.288 139.329 285.213 138.934 285.128C138.55 285.043 138.198 284.92 137.878 284.76C137.558 284.589 137.297 284.36 137.094 284.072C136.902 283.784 136.806 283.4 136.806 282.92C136.806 282.461 136.934 282.051 137.19 281.688C137.446 281.325 137.819 281.043 138.31 280.84C138.811 280.627 139.419 280.52 140.134 280.52C140.678 280.52 141.222 280.595 141.766 280.744C142.31 280.883 142.758 281.069 143.11 281.304L142.614 282.216C142.241 281.96 141.841 281.779 141.414 281.672C140.987 281.555 140.561 281.496 140.134 281.496C139.377 281.496 138.817 281.629 138.454 281.896C138.102 282.152 137.926 282.483 137.926 282.888C137.926 283.208 138.022 283.459 138.214 283.64C138.417 283.821 138.678 283.965 138.998 284.072C139.329 284.168 139.686 284.248 140.07 284.312C140.465 284.376 140.854 284.456 141.238 284.552C141.633 284.637 141.99 284.76 142.31 284.92C142.641 285.069 142.902 285.288 143.094 285.576C143.297 285.853 143.398 286.221 143.398 286.68C143.398 287.171 143.259 287.597 142.982 287.96C142.715 288.312 142.321 288.589 141.798 288.792C141.286 288.984 140.662 289.08 139.926 289.08ZM155.978 280.52C156.661 280.52 157.253 280.653 157.754 280.92C158.266 281.176 158.661 281.571 158.938 282.104C159.226 282.637 159.37 283.309 159.37 284.12V289H158.234V284.232C158.234 283.347 158.021 282.68 157.594 282.232C157.178 281.773 156.586 281.544 155.818 281.544C155.242 281.544 154.741 281.667 154.314 281.912C153.898 282.147 153.573 282.493 153.338 282.952C153.114 283.4 153.002 283.944 153.002 284.584V289H151.866V284.232C151.866 283.347 151.653 282.68 151.226 282.232C150.8 281.773 150.202 281.544 149.434 281.544C148.869 281.544 148.373 281.667 147.946 281.912C147.52 282.147 147.189 282.493 146.954 282.952C146.73 283.4 146.618 283.944 146.618 284.584V289H145.482V280.6H146.57V282.872L146.394 282.472C146.65 281.864 147.061 281.389 147.626 281.048C148.202 280.696 148.88 280.52 149.658 280.52C150.48 280.52 151.178 280.728 151.754 281.144C152.33 281.549 152.704 282.163 152.874 282.984L152.426 282.808C152.672 282.125 153.104 281.576 153.722 281.16C154.352 280.733 155.104 280.52 155.978 280.52ZM162.451 289V280.6H163.587V289H162.451ZM163.027 278.744C162.793 278.744 162.595 278.664 162.435 278.504C162.275 278.344 162.195 278.152 162.195 277.928C162.195 277.704 162.275 277.517 162.435 277.368C162.595 277.208 162.793 277.128 163.027 277.128C163.262 277.128 163.459 277.203 163.619 277.352C163.779 277.501 163.859 277.688 163.859 277.912C163.859 278.147 163.779 278.344 163.619 278.504C163.47 278.664 163.273 278.744 163.027 278.744ZM166.748 289V277.128H167.884V289H166.748ZM174.613 289.08C173.738 289.08 172.97 288.899 172.309 288.536C171.648 288.163 171.13 287.656 170.757 287.016C170.384 286.365 170.197 285.624 170.197 284.792C170.197 283.96 170.373 283.224 170.725 282.584C171.088 281.944 171.578 281.443 172.197 281.08C172.826 280.707 173.53 280.52 174.309 280.52C175.098 280.52 175.797 280.701 176.405 281.064C177.024 281.416 177.509 281.917 177.861 282.568C178.213 283.208 178.389 283.949 178.389 284.792C178.389 284.845 178.384 284.904 178.373 284.968C178.373 285.021 178.373 285.08 178.373 285.144H171.061V284.296H177.765L177.317 284.632C177.317 284.024 177.184 283.485 176.917 283.016C176.661 282.536 176.309 282.163 175.861 281.896C175.413 281.629 174.896 281.496 174.309 281.496C173.733 281.496 173.216 281.629 172.757 281.896C172.298 282.163 171.941 282.536 171.685 283.016C171.429 283.496 171.301 284.045 171.301 284.664V284.84C171.301 285.48 171.44 286.045 171.717 286.536C172.005 287.016 172.4 287.395 172.901 287.672C173.413 287.939 173.994 288.072 174.645 288.072C175.157 288.072 175.632 287.981 176.069 287.8C176.517 287.619 176.901 287.341 177.221 286.968L177.861 287.704C177.488 288.152 177.018 288.493 176.453 288.728C175.898 288.963 175.285 289.08 174.613 289.08ZM187.049 289L183.321 280.6H184.505L187.929 288.392H187.369L190.841 280.6H191.961L188.217 289H187.049ZM193.561 289V280.6H194.697V289H193.561ZM194.137 278.744C193.902 278.744 193.705 278.664 193.545 278.504C193.385 278.344 193.305 278.152 193.305 277.928C193.305 277.704 193.385 277.517 193.545 277.368C193.705 277.208 193.902 277.128 194.137 277.128C194.371 277.128 194.569 277.203 194.729 277.352C194.889 277.501 194.969 277.688 194.969 277.912C194.969 278.147 194.889 278.344 194.729 278.504C194.579 278.664 194.382 278.744 194.137 278.744ZM197.857 289V277.128H198.993V289H197.857ZM202.154 289V277.128H203.29V289H202.154ZM211.715 289V287.144L211.667 286.84V283.736C211.667 283.021 211.465 282.472 211.059 282.088C210.665 281.704 210.073 281.512 209.283 281.512C208.739 281.512 208.222 281.603 207.731 281.784C207.241 281.965 206.825 282.205 206.483 282.504L205.971 281.656C206.398 281.293 206.91 281.016 207.507 280.824C208.105 280.621 208.734 280.52 209.395 280.52C210.483 280.52 211.321 280.792 211.907 281.336C212.505 281.869 212.803 282.685 212.803 283.784V289H211.715ZM208.819 289.08C208.19 289.08 207.641 288.979 207.171 288.776C206.713 288.563 206.361 288.275 206.115 287.912C205.87 287.539 205.747 287.112 205.747 286.632C205.747 286.195 205.849 285.8 206.051 285.448C206.265 285.085 206.606 284.797 207.075 284.584C207.555 284.36 208.195 284.248 208.995 284.248H211.891V285.096H209.027C208.217 285.096 207.651 285.24 207.331 285.528C207.022 285.816 206.867 286.173 206.867 286.6C206.867 287.08 207.054 287.464 207.427 287.752C207.801 288.04 208.323 288.184 208.995 288.184C209.635 288.184 210.185 288.04 210.643 287.752C211.113 287.453 211.454 287.027 211.667 286.472L211.923 287.256C211.71 287.811 211.337 288.253 210.803 288.584C210.281 288.915 209.619 289.08 208.819 289.08ZM219.473 292.184C218.705 292.184 217.969 292.072 217.265 291.848C216.561 291.624 215.99 291.304 215.553 290.888L216.129 290.024C216.523 290.376 217.009 290.653 217.585 290.856C218.171 291.069 218.79 291.176 219.441 291.176C220.507 291.176 221.291 290.925 221.793 290.424C222.294 289.933 222.545 289.165 222.545 288.12V286.024L222.705 284.584L222.593 283.144V280.6H223.681V287.976C223.681 289.427 223.323 290.488 222.609 291.16C221.905 291.843 220.859 292.184 219.473 292.184ZM219.265 288.68C218.465 288.68 217.745 288.509 217.105 288.168C216.465 287.816 215.958 287.331 215.585 286.712C215.222 286.093 215.041 285.384 215.041 284.584C215.041 283.784 215.222 283.08 215.585 282.472C215.958 281.853 216.465 281.373 217.105 281.032C217.745 280.691 218.465 280.52 219.265 280.52C220.011 280.52 220.683 280.675 221.281 280.984C221.878 281.293 222.353 281.752 222.705 282.36C223.057 282.968 223.233 283.709 223.233 284.584C223.233 285.459 223.057 286.2 222.705 286.808C222.353 287.416 221.878 287.88 221.281 288.2C220.683 288.52 220.011 288.68 219.265 288.68ZM219.377 287.672C219.995 287.672 220.545 287.544 221.025 287.288C221.505 287.021 221.883 286.659 222.161 286.2C222.438 285.731 222.577 285.192 222.577 284.584C222.577 283.976 222.438 283.443 222.161 282.984C221.883 282.525 221.505 282.168 221.025 281.912C220.545 281.645 219.995 281.512 219.377 281.512C218.769 281.512 218.219 281.645 217.729 281.912C217.249 282.168 216.87 282.525 216.593 282.984C216.326 283.443 216.193 283.976 216.193 284.584C216.193 285.192 216.326 285.731 216.593 286.2C216.87 286.659 217.249 287.021 217.729 287.288C218.219 287.544 218.769 287.672 219.377 287.672ZM230.41 289.08C229.535 289.08 228.767 288.899 228.106 288.536C227.444 288.163 226.927 287.656 226.554 287.016C226.18 286.365 225.994 285.624 225.994 284.792C225.994 283.96 226.17 283.224 226.522 282.584C226.884 281.944 227.375 281.443 227.994 281.08C228.623 280.707 229.327 280.52 230.106 280.52C230.895 280.52 231.594 280.701 232.202 281.064C232.82 281.416 233.306 281.917 233.658 282.568C234.01 283.208 234.186 283.949 234.186 284.792C234.186 284.845 234.18 284.904 234.17 284.968C234.17 285.021 234.17 285.08 234.17 285.144H226.858V284.296H233.562L233.114 284.632C233.114 284.024 232.98 283.485 232.714 283.016C232.458 282.536 232.106 282.163 231.658 281.896C231.21 281.629 230.692 281.496 230.106 281.496C229.53 281.496 229.012 281.629 228.554 281.896C228.095 282.163 227.738 282.536 227.482 283.016C227.226 283.496 227.098 284.045 227.098 284.664V284.84C227.098 285.48 227.236 286.045 227.514 286.536C227.802 287.016 228.196 287.395 228.698 287.672C229.21 287.939 229.791 288.072 230.442 288.072C230.954 288.072 231.428 287.981 231.866 287.8C232.314 287.619 232.698 287.341 233.018 286.968L233.658 287.704C233.284 288.152 232.815 288.493 232.25 288.728C231.695 288.963 231.082 289.08 230.41 289.08Z"
              fill="#71717A"
            />
          </svg>

          <div tw="flex border-4 border-[#FFED00] absolute top-12 left-[30%] z-10 w-32 h-32 rounded-full p-1">
            <img
              tw="w-full h-full rounded-full"
              src={image ?? ""}
              alt="Image profile"
            />
          </div>

          <div tw="flex h-16 w-[371px] absolute items-center justify-center text-xl top-46 left-0">
            <strong tw="text-xl font-bold">{name}</strong>
          </div>

          <div tw="flex h-16 w-[371px] absolute items-center justify-center text-xl top-[528px] left-0">
            <span tw="text-5xl" style={{ fontFamily: "SpaceMono" }}>
              #001
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 391,
      height: 624,
      fonts: [
        {
          name: "SpaceMono",
          data: fontRegularData,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}