import { Link } from "react-router";

type PropsRouterLink = {
    children: React.ReactNode;
    href: string;
} & React.ComponentPropsWithoutRef<'a'>;

function RouterLink({children, href, ...props}: PropsRouterLink) {
    return(
      <Link to={href} {...props}>
        {children}
      </Link>
    )
}

export default RouterLink;