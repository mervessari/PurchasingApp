function BasketItem({ item, product }) 

{
  const titleAmountStyle = {
    paddingBottom: 10,
    fontSize: 20,
  
  };

  const amountSpan = {
    paddingBottom: 10,
    fontSize: 20,
    color : "#999"
  };

  return (
    <li style={titleAmountStyle}>
      {product.title}  <span style={amountSpan}> x {item.amount}</span>
    </li>
  );
}

export default BasketItem;
