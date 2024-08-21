"use client";
import { cormorant, inter } from "@/options/font";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { loginSchema } from "./loginSchema";
import ssfLogo from "@/assets/img/logobook.png";
import eve from "@/assets/svg//eve-outline-black.svg";
import XTwitter from "@/assets/svg/XTwitter-outline-PrimaryColor.svg";
import Camera from "@/assets/svg/camera-outline-black.svg";
import { useTranslations } from "next-intl";
type FormData = z.infer<typeof loginSchema>;
export default function Home() {
  const stringTools = useTranslations("tools");
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });
  async function onSubmit(data: FormData) {
    console.log(111);
  }
  return (
    <div className="rounded-tr-4xl px-10 pb-8 pt-4 lg:w-734 xl:w-621 lg:h-screen">
      {/* 头部logo */}
      <div className="flex flex-col items-center mt-11 lg:items-start">
        <Image src={ssfLogo} width={"46"} height={"46"} alt="logo" />
        <h1
          className={`text-2xl font-semibold text-gray-900 dark:text-white-darkText01 lg:mt-24 lg:flex lg:justify-between lg:w-full xl:mt-10 ${inter}`}>
          {stringTools("loginPrologue")} 👋🏻
          <div className=" hidden lg:flex justify-between">
            <Image src={XTwitter} alt="" className="mr-8" />
            <Image src={Camera} alt="" />
          </div>
        </h1>
      </div>
      {/* 内容表单 */}
      <div className=" lg:w-full lg:h-734 xl:h-440  lg:bg-gray-75 lg:dark:bg-black-background dark:text-white-darkText01  lg:flex justify-center items-center mt-11">
        <form
          className="mt-12 lg:mt-0 xl:mt-0 lg:w-354 lg:h-354"
          action=""
          method="POST"
          onSubmit={handleSubmit(onSubmit)}>
          <div className={`relative ${cormorant}`}>
            {/* 用户输入框 */}
            <div>
              <div className=" text-lg pb-2">{stringTools("Name")}</div>
              <div className="border-2 border-gray-300 dark:border-gray-bgdark dark:bg-gray-bgdark bg-white rounded-lg text-gray-900 flex items-center">
                <input
                  {...register("userName", { required: true })}
                  id="userName"
                  name="userName"
                  type="text"
                  className="ml-6 h-10 w-full placeholder-transparent focus:border-rose-600 focus:outline-none dark:bg-gray-bgdark"
                  placeholder={stringTools("Name")}
                  autoComplete="off"
                />
                {errors?.userName && (
                  <p className="text-red-600 text-sm">
                    {errors?.userName?.message}
                  </p>
                )}
                <div className="mr-4"></div>
              </div>
            </div>
            {/* 密码输入框 */}
            <div className="mt-8">
              <div className=" text-lg pb-2">{stringTools("Password")}</div>
              <div className="border-2 border-gray-300 bg-white dark:border-gray-bgdark dark:bg-gray-bgdark rounded-lg text-gray-900 flex items-center">
                <input
                  {...register("password", { required: true })}
                  id="password"
                  name="password"
                  type="text"
                  className="ml-6 h-10 w-full  placeholder-transparent focus:border-rose-600 focus:outline-none dark:bg-gray-bgdark"
                  placeholder={stringTools("Password")}
                  autoComplete="off"
                />
                <Image src={eve} alt="" className="mr-4" />
              </div>
              {errors?.password && (
                <p className="text-red-600 text-sm">
                  {errors?.password?.message}
                </p>
              )}
            </div>
            {/* 登录按钮 */}
            <button
              type="submit"
              disabled={!isDirty || !isValid || isSubmitting}
              className="mt-6 text-center text-white  rounded-full bg-PrimaryColor dark:text-black-blackground02  w-full h-12">
              {isSubmitting ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="inline w-6 h-6 mr-2 text-white animate-spin fill-rose-600 opacity-100"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"></svg>
                </div>
              ) : (
                stringTools("login")
              )}
            </button>
          </div>
          {/* 忘记密码和是否记住 */}
          <div
            className={`flex mt-12  text-center text-sm font-normal justify-between ${inter}`}>
            <a href="#">{stringTools("ForgotPassword")}</a>
            <div className="flex">
              <div className="pr-3">√</div>
              <div>{stringTools("Remember")}</div>
            </div>
          </div>
        </form>
      </div>
      {/* 没有账号跳转注册 */}
      <div className={`flex lg:justify-center ${inter}`}>
        <div className="flex mt-12 flex-col items-center text-PrimaryColor  px-9 lg:px-0 lg:w-72">
          <div className={` text-xl ${inter} pb-7 dark:text-white-darkText050`}>
            {stringTools("Dontaccount")}
          </div>
          <button className=" border-2 border-PrimaryColor w-full h-11 rounded-full">
            {stringTools("register")}
          </button>
        </div>
      </div>
    </div>
  );
}
