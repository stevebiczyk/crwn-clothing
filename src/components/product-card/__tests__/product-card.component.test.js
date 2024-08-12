import { screen, fireEvent } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/test-utils";
import ProductCard from "../product-card.component";

describe("ProductCard tests", () => {
  test("it should add the product when Product card button is clicked", async () => {
    const mockProduct = {
      id: 1,
      imageUrl: "test",
      name: "Item A",
      price: 100,
    };
    const { store } = renderWithProviders(<ProductCard product={mockProduct} />, {
      preloadedState: {
        cart: {
          cartItems: [],
        },
      },
    });
  });
  const addTocartButtonElement = screen.getByText(/add to cart/i)
  await fireEvent.click (addTocartButtonElement.click);

  expect(store.getState().cart.cartItems.lenght).toEqual(1);
});
