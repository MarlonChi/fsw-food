import { useContext } from "react";
import { CartContext } from "../_context/cart";
import CartItem from "./cart-item";
import { Card, CardContent } from "./ui/card";
import { formatCurrency } from "../_helpers/price";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const Cart = () => {
  const { products, subtotalPrice, totalPrice, totalDiscounts } =
    useContext(CartContext);

  return (
    <div className="flex h-full flex-col py-5">
      <div className="flex-auto space-y-4">
        {products.map((product) => (
          <CartItem key={product.id} cartProduct={product} />
        ))}
      </div>

      {products.length > 0 ? (
        <>
          <div className="mt-6">
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatCurrency(subtotalPrice)}</span>
                </div>

                <Separator className="my-2 bg-[#eee]" />

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Descontos</span>
                  <span>- {formatCurrency(totalDiscounts)}</span>
                </div>

                <Separator className="my-2 bg-[#eee]" />

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Entrega</span>
                  {Number(products[0].restaurant.deliveryFee) === 0 ? (
                    <span className="uppercase text-primary">Grátis</span>
                  ) : (
                    formatCurrency(Number(products[0].restaurant.deliveryFee))
                  )}
                </div>

                <Separator className="my-1 bg-[#eee]" />

                <div className="flex items-center justify-between">
                  <span className="font-bold text-muted-foreground">Total</span>
                  <span className="font-bold">
                    {formatCurrency(totalPrice)}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button className="mt-6 w-full">Finalizar pedido</Button>
        </>
      ) : (
        <h2 className="text-left font-medium">Sua sacola está vazia.</h2>
      )}
    </div>
  );
};

export default Cart;
