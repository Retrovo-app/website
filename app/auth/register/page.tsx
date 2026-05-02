'use client';

import styles from './register.module.scss';
import { useState } from 'react';
import Email from '@/components/features/auth/register/email';
import Password from '@/components/features/auth/register/password';

import {
  AuthError,
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { FirebaseError } from 'firebase/app';
import { useRouter } from 'next/navigation';

function getAuthErrorMessage(error: unknown): string {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case 'auth/email-already-in-use':
        return 'Cet email est déjà utilisé';
      case 'auth/invalid-email':
        return 'Email invalide';
      case 'auth/weak-password':
        return 'Mot de passe trop faible';
      default:
        return 'Une erreur est survenue';
    }
  }
  return 'Erreur inconnue';
}

export default function Login() {
  const [step, setStep] = useState<'email' | 'password'>('email');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const router = useRouter();
  const provider = new GoogleAuthProvider();

  function handleNextStep(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErrors({ email: "Format de l'adresse email invalide" });
    } else {
      setStep('password');
    }
  }

  async function handleEmailSignup() {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      return userCredential.user;
    } catch (error: unknown) {
      const message = getAuthErrorMessage(error);
      setErrors({ password: message });
    }
  }

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const additionalUserInfo = getAdditionalUserInfo(result);

      if (additionalUserInfo?.isNewUser) {
        // Faire le traitement lors de la connexion de l'utilisateur pour le créer dans la base de données

        router.push('/getting-started/');
      } else {
        router.push('/');
      }
    } catch (error) {
      const err = error as AuthError;

      console.error(err.code, err.message);

      return {
        error: err.code,
      };
    }
  };

  return (
    <div className={styles.grid}>
      <div className={styles.content}>
        <div className={styles.form}>
          {step === 'email' && (
            <Email
              email={email}
              setEmail={setEmail}
              errors={errors}
              handleNextStep={handleNextStep}
              handleGoogleSignup={handleGoogleSignup}
            />
          )}

          {step === 'password' && (
            <Password
              password={password}
              setPassword={setPassword}
              onSubmit={handleEmailSignup}
              onBack={() => {
                setStep('email');
                setPassword('');
              }}
            />
          )}
        </div>
      </div>
      <div className={styles.poster}></div>
    </div>
  );
}
