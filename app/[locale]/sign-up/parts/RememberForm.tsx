"use client";
import { cormorant, inter } from "@/options/font";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { loginSchema } from "./loginSchema";
import ssfLogo from "@/assets/img/logobook.png";
import eve from "@/assets/svg/eve-outline-black.svg";
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
  console.log(errors);
  async function onSubmit(data: FormData) {
    console.log(isSubmitting);
    console.log(data);
  }
  return (
    <div className="rounded-tr-4xl px-10 pb-8 pt-4 lg:w-734 xl:w-642 lg:h-screen">
      {/* 头部logo */}
      <div className="flex flex-col items-center mt-11 lg:items-start">
        <Image src={ssfLogo} width={"46"} height={"46"} alt="logo" />
        <h1
          className={`text-2xl font-semibold text-gray-900 lg:mt-24 lg:flex lg:justify-between lg:w-full xl:mt-10 ${inter}`}>
          {stringTools("CreateAccount")} 👇🏼
          <div className=" hidden lg:flex justify-between">
            <Image src={XTwitter} alt="" className="mr-8" />
            <Image src={Camera} alt="" />
          </div>
        </h1>
      </div>
      {/* 内容表单 */}
      <div className=" lg:w-full lg:h-734 xl:h-548 lg:bg-gray-75  lg:flex justify-center items-center mt-11">
        <form
          className="mt-12 lg:mt-0 xl:mt-0 lg:w-354 lg:h-440"
          onSubmit={handleSubmit(onSubmit)}>
          <div className={`relative ${cormorant} text-lg font-medium`}>
            {/* 用户输入框 */}
            <div>
              <div className=" text-lg pb-2">{stringTools("Name")}</div>
              <div className="border-2 border-gray-300 bg-white rounded-lg text-gray-900 flex items-center">
                <input
                  {...register("userName", { required: true })}
                  id="userName"
                  name="userName"
                  type="text"
                  className="ml-6 h-10 w-full placeholder-transparent focus:border-rose-600 focus:outline-none"
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
              <div className="border-2 border-gray-300 bg-white rounded-lg text-gray-900 flex items-center">
                <input
                  {...register("password", { required: true })}
                  id="password"
                  name="password"
                  type="text"
                  className="ml-6 h-10 w-full  placeholder-transparent focus:border-rose-600 focus:outline-none"
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
            {/* 邮箱输入框 */}
            <div className="mt-8">
              <div className=" text-lg pb-2">{stringTools("email")}</div>
              <div className="border-2 border-gray-300 bg-white rounded-lg text-gray-900 flex items-center">
                <input
                  {...register("password", { required: true })}
                  id="email"
                  name="email"
                  type="text"
                  className="ml-6 h-10 w-full  placeholder-transparent focus:border-rose-600 focus:outline-none"
                  placeholder={stringTools("addemail")}
                  autoComplete="off"
                />
                <Image src={eve} alt="" className="mr-4" />
              </div>
              {errors?.email && (
                <p className="text-red-600 text-sm">{errors?.email?.message}</p>
              )}
            </div>
            {/* 登录按钮 */}
            <button
              type="submit"
              disabled={!isDirty || !isValid || isSubmitting}
              className="mt-6 text-center text-white  rounded-full bg-PrimaryColor w-full h-12">
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
                stringTools("register")
              )}
            </button>
          </div>
          {/* 忘记密码和是否记住 */}
          <div
            className={`flex mt-12  text-center text-sm font-normal justify-between ${inter}`}>
            <a href="#">{stringTools("SignupGoogle")}</a>
            <div className=" border-l-2 border-PrimaryColor"></div>
            <a href="#">{stringTools("SignupApple")}</a>
          </div>
        </form>
      </div>
      {/* 没有账号跳转注册 */}
      <div className={`flex justify-center ${inter}`}>
        <div className="flex mt-12 flex-col items-center text-PrimaryColor px-9 lg:px-0 lg:w-72">
          <div className={` text-xl ${inter} pb-7`}>
            {stringTools("HaveAccount")}
          </div>
          <button className=" border-2 border-PrimaryColor w-full h-11 rounded-full">
            {stringTools("login")}
          </button>
        </div>
      </div>
    </div>
  );
}
