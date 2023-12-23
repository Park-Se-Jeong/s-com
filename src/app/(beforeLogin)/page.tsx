import Link from 'next/link';
import styles from '@/index.module.css';
// 요즘 tailwind - 호불호 심하고 가독성 x 
// styled or Emotion -> 서버컴포넌트 ssr 문제
// sass
// css module 
// vanila extract - Windows와 문제
import Image from 'next/image';
import zLogo from '../../../public/zlogo.png'; // png 파일 임포트 가능, 근데 이렇게 가져오면 이미지로 가져오는 게 아님, next/image 로 써야함
//next/image의 장점: 지가 알아서 최적화해줌

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={zLogo} alt="logo"></Image>
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>계정 만들기</Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="login" className={styles.login}>로그인</Link>
      </div>
    </div>
  )
}
