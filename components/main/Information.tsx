import Image from "next/image";
import "./Information.css";

const Information = () => {
  return (
    <div
      id="about-me"
      className="relative flex h-full w-full p-28 justify-center items-center"
    >
      <div className="w-[70vw] flex justify-around items-center h-[30rem] rounded-md  relative z-40">
        <div className="w-full h-full flex justify-center items-center">
          <nav
            aria-labelledby="nav-title-social"
            className="text-zinc-300 font-semibold"
          >
            <ul className="w-full">
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>电话: 18922487256</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>邮箱: 1374329836@qq.com</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>年龄: 21</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>性别: 男</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>现所在地: 广州</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>体重: 80kg</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>身高: 178cm</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>民族: 汉</span>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-center w-full">
                  <span>政治面貌: 中共预备党员</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div className="w-full h-full">
          <Image
            className="rounded-full spin"
            src="/images/face.jpg"
            alt="work icons"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Information;
