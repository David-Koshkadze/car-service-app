"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

export default function About() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="max-w-[85rem] mx-auto px-4 ms:px-6 md:px-8 bg-gray-200"
    >
      <div className="flex gap-16 items-center">
        <div className="flex-1">
          <h1 className="text-3xl mb-4">ჩვენს შესახებ</h1>
          <p>
            ჩვენ ვართ კარგი კომპანია ჩვენ ვართ კარგი კომპანია ჩვენ ვართ კარგი
            კომპანია ჩვენ ვართ კარგი კომპანია ჩვენ ვართ კარგი კომპანია ჩვენ ვართ
            კარგი კომპანია ჩვენ ვართ კარგი კომპანია ჩვენ ვართ კარგი კომპანია
            ჩვენ ვართ კარგი კომპანია ჩვენ ვართ კარგი კომპანია ჩვენ ვართ კარგი
            კომპანია ჩვენ ვართ კარგი კომპანია ჩვენ ვართ კარგი კომპანია ჩვენ ვართ
            კარგი კომპანია ჩვენ ვართ კარგი კომპანია ჩვენ ვართ კარგი კომპანია
            ჩვენ ვართ კარგი კომპანია ჩვენ ვართ კარგი კომპანია ჩვენ ვართ კარგი
            კომპანია ჩვენ ვართ კარგი კომპანია ჩვენ ვართ კარგი კომპანია ჩვენ ვართ
            კარგი კომპანია ჩვენ ვართ კარგი კომპანია ჩვენ ვართ კარგი კომპანია
            ჩვენ ვართ კარგი კომპანია ჩვენ ვართ კარგი კომპანია ჩვენ ვართ კარგი
            კომპანია ჩვენ ვართ კარგი კომპანია ჩვენ ვართ კარგი კომპანია ჩვენ ვართ
            კარგი კომპანია ჩვენ ვართ კარგი კომპანია ჩვენ ვართ კარგი კომპანია
            ჩვენ ვართ კარგი კომპანია ჩვენ ვართ კარგი კომპანია ჩვენ ვართ კარგი
            კომპანია ჩვენ ვართ კარგი კომპანია ჩვენ ვართ კარგი კომპანია ჩვენ ვართ
            კარგი კომპანია ჩვენ ვართ
          </p>
        </div>
        <div className="bg-blue-300 flex-1 flex justify-center items-center">
          <Image width={400} height={600} src="/images/truck-girl.jpg" />
        </div>
      </div>
    </motion.section>
  );
}
