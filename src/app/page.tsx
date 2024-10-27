import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="pt-8 flex justify-center">
        <h1 className="text-sky-500 text-base font-bold leading-6 tracking-wide text-center font-montserrat">
          Welcome
        </h1>
      </div>

      {/* New Text Below */}
      <div className="pt-12 flex justify-center">
        <h2 className="text-white text-[32px] md:text-[58px] font-bold leading-[40px] md:leading-[80px] tracking-wide text-center font-montserrat">
          Selling on the <br /> internet like a pro
        </h2>
      </div>

      {/* new paragraph */}
      <div className="pt-8 flex justify-center ">
        <p className="text-white text-[20px] font-montserrat leading-[30px] tracking-wide text-center ">
          We know how large objects will act, but things on a <br />
          small scale just do not act that way.
        </p>
      </div>

      {/* buttons section */}
      <div className="pt-10 flex justify-center space-x-4">
        <Link href='/' className="bg-blue-500 text-white px-[40px] py-[15px] rounded-md hover:bg-transparent transition duration-300">Get Qoute Now </Link>
        <Link href='/' className="border border-blue-500 text-blue-500 px-[40px] py-[15px] rounded-[5px] hover:bg-blue-500 hover:text-white transition duration-200"> Learn More</Link>
      </div>

      {/* box section  */}
      <div className="pt-10 flex justify-center space-x-4">
        {/* Box 1 */}
        <div className="border bg-white pr-10  pt-9 border-blue-500 w-[328px] h-[292px] px-[40px] py-[15px] rounded-[5px] ">
          {/* Box 1 */}
          {/* inner box */}
          <div className="w-[70px] h-[76px] p-[22px] rounded-sm bg-pink-200 "></div>
          <div className="pt-4 text-black text-xl font-bold leading-6 translate-x-0 text-left font-montserrat">
            <h5>
              training Courses
            </h5>
            <div className="pr-10 pt-8">
              <Image src='/images/red_divider.svg' alt="Divider" width={50} height={2} ></Image>
            </div>
            <div className="pt-2 text-neutral-500 text-[14px] font-montserrat leading-5 text-left">

              The gradual accumulation of <br />information about atomic and <br /> small-scale behaviour...
            </div>
          </div>
        </div>
        {/* Box 2 */}
        {/* Box 2 */}
        <div className="border bg-white pr-10  pt-9 border-blue-500 w-[328px] h-[292px] px-[40px] py-[15px] rounded-[5px] ">
          {/* Box 2 */}
          {/* inner box */}
          <div className="w-[70px] h-[76px] p-[22px] rounded-sm bg-green-300 "></div>
          <div className="pt-4 text-black text-xl font-bold leading-6 translate-x-0 text-left font-montserrat">
            <h5>
              2,769 online courses
            </h5>
            <div className="pr-10 pt-8">
              <Image src='/images/red_divider.svg' alt="Divider" width={50} height={2} ></Image>
            </div>
            <div className="pt-2 text-neutral-500 text-[14px] font-montserrat leading-5 text-left">

              The gradual accumulation of <br />information about atomic and <br /> small-scale behaviour...
            </div>
          </div>
        </div>

        {/* Box 3 */}
        {/* Box 3 */}
        <div className="border bg-blue-500 pr-10  pt-9 border-blue-500 w-[328px] h-[292px] px-[40px] py-[15px] rounded-[5px] ">
          {/* Box 3 */}
          {/* inner box */}
          <div className="w-[70px] h-[76px] p-[22px] rounded-sm bg-white "></div>
          <div className="pt-4 text-white text-xl font-bold leading-6 translate-x-0 text-left font-montserrat">
            <h5>
              training Courses
            </h5>
            <div className="pr-10 pt-8">
              <Image src='/images/white_divider.svg' alt="Divider" width={50} height={2} ></Image>
            </div>
            <div className="pt-2 text-white text-[14px] font-montserrat leading-5 text-left">

              The gradual accumulation of <br /> information about atomic and <br /> small-scale behaviour...
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8"></div>
    </div >

  );
}
