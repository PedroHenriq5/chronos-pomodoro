import  RouterLink  from '../RouterLink/RouterLink';
import Styles  from './Footer.module.css';

function Footer() {
  return (
    <footer className={Styles.footer}>
      <RouterLink href="/about">Entenda a técnica pomodoro</RouterLink>
      <RouterLink href="/">Choronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚</RouterLink>
    </footer>
  );
}

export default Footer;