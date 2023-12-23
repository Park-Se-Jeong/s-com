import { ReactNode } from "react";
// import styles from '@/index.modlue.css'

type Props = { children: ReactNode, modal: ReactNode }
// export default function Layout({ children, modal }: { children: ReactNode, modal: ReactNode }) {
export default function Layout({ children, modal }: Props) {
  return (
    <div>
      비포 로그인 레이아웃
      {children}
      {modal}
    </div>
  )
}

// 주소가 z.com 일 때는 children->page.tsx, modal->@modal/default.tsx