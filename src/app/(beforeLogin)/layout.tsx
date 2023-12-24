import { ReactNode } from "react";
// import styles from '@/index.modlue.css'

type Props = { children: ReactNode, modal: ReactNode }
// export default function Layout({ children, modal }: { children: ReactNode, modal: ReactNode }) {
export default function Layout({ children, modal }: Props) {
  return (
    <div>
      {children}
      {modal}
      {/* 클라이언트에서 라우팅 할 때만 인터셉트 라우팅 적용됨. 모달은 패러렐, 기존 화면을 유지하면서 위에 띄워줄 수 있다
      처음에 들어왓을 땐 인터셉팅되는데, 새로고침하면 i 폴더로 라우팅 됨 */}
    </div>
  )
}

// 주소가 z.com 일 때는 children->page.tsx, modal->@modal/default.tsx