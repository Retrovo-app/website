'use client';

import styles from './login.module.scss';
import { useState } from 'react';
import Provider from '@/components/features/auth/register/provider';
import Password from '@/components/features/auth/register/password';

export default function Login() {
  const [etape, setEtape] = useState<number>(1);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  return (
    <div className={styles.grid}>
      <div className={styles.content}>
        <div className={styles.form}>
          {etape === 1 && (
            <Provider
              email={email}
              setEmail={setEmail}
              setEtape={setEtape}
            />
          )}

          {etape === 2 && (
            <Password
              password={password}
              setPassword={setPassword}
              onSubmit={() => {}}
            />
          )}
        </div>
      </div>
      <div className={styles.poster}></div>
    </div>
  );
}
