export const orderSelection = {
  id: true,
  orderDay: true,
  orderItems: {
    select: {
      id: true,
      productId: true,
      quantity: true,
      unitPrice: true,
    },
  },
  totalAmount: true,
};
