import { useState, useEffect } from 'react';
import CartItem from './CartItem';
import { Box, Typography, styled } from '@mui/material';

// import { Typography } from "@mui/material";


const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    borderBottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
    & > h6{
        margin-bottom:20px;
    }
`;

const Price = styled(Typography)`
    float: right;
`;

// const TotalAmount = styled(Typography)`
//     font-size: 18px;
//     font-weight: 600;
//     border-top: 1px dashed #e0e0e0;
//     padding: 20px 0;
//     border-bottom: 1px dashed #e0e0e0;
// `;

const Discount = styled(Typography)`
    font-weight: 500; 
    color: green;
`

// // component: {
// //     // width: '30%'
// // },



//     return (
//         <Box>  {/* className={classes.component}> */}
//             <Header>
//                 <Heading>PRICE DETAILS</Heading>
//             </Header>
//             <Container>
//                 <Typography>Price ({cartItems?.length} item)
//                     <Price component="span">₹{price}</Price>
//                 </Typography>
//                 <Typography>Discount
//                     <Price component="span">-₹{discount}</Price>
//                 </Typography>
//                 <Typography>Delivery Charges
//                     <Price component="span">₹40</Price>
//                 </Typography>
//                 <TotalAmount>Total Amount
//                     <Price>₹{price - discount + 40}</Price>
//                 </TotalAmount>
//                 <Discount>You will save ₹{discount - 40} on this order</Discount>
//             </Container>
//         </Box>
//     )
// }




// export default TotalView;


const TotalView=({ cartItems })=>{
    
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0)

    useEffect(() => {
        totalAmount();
    }, [cartItems]);
    
    const totalAmount = () => {
        let price = 0, discount = 0;
        cartItems.map(item => {
            price += item.price.mrp
            discount += (item.price.mrp - item.price.cost) 
        });
        setPrice(price);
        setDiscount(discount);
    }
    return(
        <Box>
            <Header>
                <Heading>PRICE DETAILS</Heading>
            </Header>
            <Container>
                <Typography>Price({CartItem?.length} item)
                    <Price component="span">₹{price}</Price>
                </Typography>
                <Typography>Discout
                    <Price component="span">₹{discount}</Price>
                </Typography>
                <Typography>Delivery Charges
                    <Price component="span">₹40</Price>
                </Typography>
                <Typography variant="h6">Total  Ammount
                    <Price component="span">₹{price-discount+40}</Price>
                </Typography>
                <Typography>You will Save ₹{discount-40} on this order</Typography>
            </Container>
        </Box>
    )
}
export default TotalView;