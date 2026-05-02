import Image from 'next/image';
import styles from './email.module.scss';
import Input from '@/components/ui/input/input';
import Button from '@/components/ui/button/button';
import Link from 'next/link';

type Props = {
  email: string;
  setEmail: (value: string) => void;
  errors: { email?: string };
  handleNextStep: (e: React.FormEvent<HTMLFormElement>) => void;
  handleGoogleSignup: () => void;
};

export default function Email({
  email,
  setEmail,
  errors,
  handleNextStep,
  handleGoogleSignup,
}: Props) {
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

        <h3 className={styles.title}>
          Moins d’absences,
          <br /> plus de clients.
        </h3>

        <p className={styles.motivation}>
          Créé ton lien de réservation gratuitement.
        </p>
      </div>

      <form className={styles.form_flex} onSubmit={handleNextStep}>
        <Input
          value={email}
          type="email"
          error={errors?.email}
          onChange={(value) => setEmail(value)}
          placeholder="exemple@email.com"
        />

        <Button label="Continuer avec mon mail" type="submit" style="primary" />
      </form>

      <div className={styles.or_flex}>
        <hr className={styles.hr}></hr>
        <span className={styles.or_text}>ou</span>
        <hr className={styles.hr}></hr>
      </div>

      <Button
        label="Google"
        logo="/assets/social/google.png"
        type="button"
        style="secondary"
        onClick={handleGoogleSignup}
      />

      <p className={styles.already}>
        Déjà inscrit ? <Link href={'/auth/login'}>Se connecter</Link>
      </p>
    </>
  );
}
