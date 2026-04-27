import Image from 'next/image';
import styles from './provider.module.scss';
import Input from '@/components/input/input';
import Button from '@/components/button/button';
import { useAuth } from '@/hooks/useAuth';

type Props = {
  email: string;
  setEmail: (value: string) => void;
  setEtape: (value: number) => void;
};

export default function Provider({ email, setEmail, setEtape }: Props) {
  const { user, isAuthenticated, loading } = useAuth();

  console.log(user, isAuthenticated, loading);

  const handleSubmitProvider = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      console.log('Email invalide'); // Mettre traitement sur l'input
      return;
    }

    setEtape(2);
  };

  return (
    <>
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

      <form className={styles.form_flex} onSubmit={handleSubmitProvider}>
        <Input
          value={email}
          type="email"
          onChange={(value) => setEmail(value)}
          placeholder="exemple@email.com"
        />

        <Button label="Continuer avec mon mail" type="submit" style="primary" />

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
    </>
  );
}
