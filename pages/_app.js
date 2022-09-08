import "../styles/global.css";

// App is the built-in top level component. This can be used to keep state when navigating between pages
// The dev server needs to be restarted whenever this component is edited.
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
