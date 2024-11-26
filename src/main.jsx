// src/main.jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";
import { ThemeProvider } from "./context/ThemeContext"; // ThemeProvider-i import edin
import "./i18n";
import { UserProvider } from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <ThemeProvider>
      <WishlistProvider>
        <CartProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </CartProvider>
      </WishlistProvider>
    </ThemeProvider>
  </UserProvider>
);
