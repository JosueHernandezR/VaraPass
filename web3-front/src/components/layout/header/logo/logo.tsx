import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <span className="sr-only">VaraPass</span>
      <img
        alt=""
        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
        className="h-8 w-auto"
      />
    </Link>
  );
}

export { Logo };
