import Styles  from './Footer.module.css';

function Footer() {
  return (
    <footer className={Styles.footer}>
      <a href="">Entenda a técnica pomodoro</a>
      <a href="">Choronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚</a>
    </footer>
  );
}

export default Footer;