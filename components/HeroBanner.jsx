import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <div className="relative text-[20px] w-full max-w-[1360px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5  px-5 ">
        <motion.div className="lg:text-5xl text-4xl md:text-left mt-10 text-center flex flex-col align-middle justify-center">
          <motion.h1
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
          >
            Made with <span className=" text-red-600">Passion</span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1.5 }}
          >
            Made with <span className="text-[#fd9d3e]">Love</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 2.5 }}
            className="text-lg mt-5 text-center md:text-left text-black/[0.7]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
            sagittis dolor aliquet quam feugiat nisi a ultrices feugiat. Viverra
            facilisi turpis eget tempor. Mattis risus amet euismod eleifend.
          </motion.p>
        </motion.div>
        <div className=" animate-item-floating flex align-middle text-center justify-center">
          <motion.img
            initial={{ opacity: 0, translateX: 50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1.5 }}
            src="pizza.png"
            alt="pizza-hero"
            className="w-9/12 align-middle text-center justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
