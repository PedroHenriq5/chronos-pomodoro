import Styles from './genericHTML.module.css';

type GenericHtmlProps = {
  children: React.ReactNode;
};

function GenericHTML({ children }: GenericHtmlProps) {
  return <div className={Styles.genericHtml}>{children}</div>;
}

export default GenericHTML;
