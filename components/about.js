"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

export default function About() {
  return (
    <motion.section className="max-w-[85rem] mx-auto px-4 ms:px-6 md:px-8 bg-gray-200">
      <div className="flex flex-col md:flex-row gap-16 items-center">
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
        <div className="border flex-1 flex justify-center items-center">
          <div
            className="rounded-2xl w-72 h-96 md:w-[400px] md:h-[600px] bg-cover"
            style={{
              backgroundImage: "url(/images/truck-girl.jpg)",
            }}
          ></div>
        </div>
      </div>
    </motion.section>
  );
}
