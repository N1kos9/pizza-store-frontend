import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";

export default function Home({ produces }) {
  return (
    <main>
      <HeroBanner />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mt-10 md:mt-0"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fd9d3e"
          fill-opacity="1"
          d="M0,128L60,106.7C120,85,240,43,360,64C480,85,600,171,720,202.7C840,235,960,213,1080,218.7C1200,224,1320,256,1380,272L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <section className="bg-[#fd9d3e] text-white relative">
        <img
          src="daily-fresh.png"
          className="absolute xl:block md:bottom-60 bottom-40 w-3/12 md:w-1/6"
          alt=""
        />
        <div className=" text-center max-w-[800px] mx-auto  ">
          <div className="text-[28px] md:text-[34px] mb-5 font-semubold leading-tight">
            Want to eat a pizza and fast?
          </div>
          <div className="text-md md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
            sagittis dolor aliquet quam feugiat nisi a ultrices feugiat. Viverra
            facilisi turpis eget tempor. Mattis risus amet euismod eleifend.
          </div>
        </div>
        <img
          src="item.png"
          className="absolute right-0 bottom-100 w-3/12 md:w-2/12"
          alt=""
        />
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fd9d3e"
          fill-opacity="1"
          d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,192C1200,213,1320,235,1380,245.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {produces?.data?.map((produce) => (
            <ProductCard key={produce.id} data={produce} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  const produces = await fetchDataFromApi("/api/produces?populate=*");

  return {
    props: { produces },
  };
}
