import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/HeaderStyles.css";
import "../styles/SearchStyles.css";
import "../styles/IndexStyles.css";
import "../styles/ItemStyles.css";
import "../styles/ItemCategoryStyles.css";
import "../styles/ButtonStyles.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
