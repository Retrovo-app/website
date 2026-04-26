'use client';

import Button from '@/components/button/button';
import styles from './login.module.scss';
import Image from 'next/image';
import Input from '@/components/input/input';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div className="container">
      <div className={styles.header}>
        <Image
          className={styles.logo}
          src={'/assets/logo.png'}
          width={50}
          height={51}
          alt="Logo Retrovo"
        />

        <h1 className={styles.title}>
          Moins d’absences,
          <br /> plus de clients.
        </h1>

        <p className={styles.motivation}>
          Créé ton lien de réservation gratuitement.
        </p>
      </div>

      <form className={styles.form}>
        <Input
          label="Email"
          type="email"
          onChange={(value) => setEmail(value)}
          placeholder="exemple@email.com"
        />

        <Input
          label="Mot de passe"
          type="password"
          onChange={(value) => setPassword(value)}
          placeholder="************"
        />

        <Button label="S'inscire" type="submit" style="primary" />

        <div className={styles.or_flex}>
          <hr className={styles.hr}></hr>
          <span className={styles.or_text}>ou</span>
          <hr className={styles.hr}></hr>
        </div>

        <div className={styles.flexSocial}>
          <Button
            label="Google"
            logo="/assets/social/google.png"
            type="button"
            style="secondary"
          />

          <Button
            label="Apple"
            logo="/assets/social/apple.png"
            type="button"
            style="secondary"
          />
        </div>
      </form>
    </div>
  );
}
