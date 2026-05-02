import Input from '@/components/ui/input/input';
import styles from './password.module.scss';
import Button from '@/components/ui/button/button';
import Image from 'next/image';
import Link from 'next/link';
import Back from '@/components/ui/back/back';

type Props = {
  password: string;
  setPassword: (value: string) => void;
  onSubmit: () => void;
  onBack: () => void;
};

export default function Password({
  password,
  setPassword,
  onSubmit,
  onBack,
}: Props) {
  const handleSubmitPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    if (!passwordRegex.test(password)) {
      console.log('Mot de passe invalide');
    } else onSubmit();
  };

  return (
    <div className="fade-in-top">
      <Back onBack={onBack} />
      <div className={styles.header}>
        <h3 className={styles.title}>Crée ton mot de passe</h3>

        <p className={styles.information}>
          Un mot de passe compliqué renforce la sécurité de ton compte.
        </p>
      </div>
      <form className={styles.form_flex} onSubmit={handleSubmitPassword}>
        <Input
          value={password}
          type="password"
          onChange={(value) => setPassword(value)}
          placeholder="********"
        />

        <Button label="Commencer" type="submit" style="primary" />
      </form>
      <div className={styles.requierement}>
        <p className={styles.requierement__text}>
          Votre mot de passe doit contenir au moins :
        </p>

        <div className={styles.requierement__flex}>
          {password.length >= 8 ? (
            <Image
              src={'/assets/icon/check.svg'}
              alt="check"
              width={15}
              height={15}
            />
          ) : (
            <Image
              src={'/assets/icon/forbidden.svg'}
              alt="check"
              width={15}
              height={15}
            />
          )}
          <p className={styles.requierement__text}>8 caractères</p>
        </div>
        <div className={styles.requierement__flex}>
          {/\d/.test(password) ? (
            <Image
              src={'/assets/icon/check.svg'}
              alt="check"
              width={15}
              height={15}
            />
          ) : (
            <Image
              src={'/assets/icon/forbidden.svg'}
              alt="check"
              width={15}
              height={15}
            />
          )}
          <p className={styles.requierement__text}>1 chiffre</p>
        </div>
        <div className={styles.requierement__flex}>
          {/[A-Z]/.test(password) ? (
            <Image
              src={'/assets/icon/check.svg'}
              alt="check"
              width={15}
              height={15}
            />
          ) : (
            <Image
              src={'/assets/icon/forbidden.svg'}
              alt="check"
              width={15}
              height={15}
            />
          )}
          <p className={styles.requierement__text}>1 majuscule</p>
        </div>
        <div className={styles.requierement__flex}>
          {/[?!\-_@&]/.test(password) ? (
            <Image
              src={'/assets/icon/check.svg'}
              alt="check"
              width={15}
              height={15}
            />
          ) : (
            <Image
              src={'/assets/icon/forbidden.svg'}
              alt="check"
              width={15}
              height={15}
            />
          )}
          <p className={styles.requierement__text}>
            1 caractère spécial (?!-_@&)
          </p>
        </div>
      </div>

      <p className={styles.conditions}>
        En t’inscrivant, tu acceptes les{' '}
        <Link href={'/auth/login'}>conditions d’utilisation</Link>.
      </p>
    </div>
  );
}
