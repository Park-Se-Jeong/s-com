"use client";

import { redirect } from "next/navigation";
import { useRouter } from "next/router";
export default function Login() {
  // 서버에서 리다이렉트하면 인터셉팅 안됨. 클라이언트에서 리다이렉트해야됨.
  // 클라이언트에서는 redirect 못 쓰고, (아무동작도 안함)
  // useRouter 써서 해줘야 한다.
  // redirect('/i/flow/login');
  const router = useRouter();
  router.replace('/i/flow/login');

  // router의 push 와 replace 의 차이
  // 뒤로가기 하면 이전으로 감, Push는.
  // replace 는 이전 히스토리를 없앰. 
  // 잘 구별해서 써라.
}