import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test-utils";
import Navigation from "../navigation.component";

describe("Navigation tests", () => {
  test("It should render a Sign In link and not a Sign Out link if there is no current user", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });

    const signInLinkElement = screen.getByText(/sign in/i);
    expect(signInLinkElement).toBeInTheDocument();

    const signOutLinkElement = screen.queryByText(/sign out/i);
    expect(signOutLinkElement).toBeNull();
  });

  test("It should render Sign Out and not Sign In if there is a current user", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    const signInLinkElement = screen.queryByText(/sign in/i);
    expect(signInLinkElement).toBeNull();

    const signOutLinkElement = screen.getByText(/sign out/i);
    expect(signOutLinkElement).toBeInTheDocument();
  });

  test("It should render the Cart dropdown if isCartOpen is false", () => {
    renderWithProviders(<Navigation />),
      {
        preloadedState: {
          cart: {
            isCartOpen: false,
            cartItems: [],
          },
        },
      };

    const dropdownTextElement = screen.queryByText(/your cart is empty/i);
    expect(dropdownTextElement).toBeNull();
  });

  test("It should not render the Cart dropdown if isCartOpen is true", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [],
        },
      },
    });

    const dropdownTextElement = screen.getByText(/your cart is empty/i);
    expect(dropdownTextElement).toBeInTheDocument();
  });
});
