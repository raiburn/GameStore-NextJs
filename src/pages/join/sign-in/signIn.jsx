import Link from "next/link";
import { JoinLayout } from "@/layouts";
import { LoginForm } from "@/components/Auth";
import { Seo } from "@/components/Shared/Seo";
import styles from "./signIn.module.scss";

export default function SignIn() {
  return (
    <>
      <Seo title="Sign in" />

      <JoinLayout>
        <div className={styles.signIn}>
          <h3>Sign in</h3>
          <LoginForm />

          <div className={styles.actions}>
            <Link href="/join/sign-up">Need an Account?</Link>
          </div>
        </div>
      </JoinLayout>
    </>
  );
}