import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate, useParams } from "react-router-dom";
import { deepPurple } from "@mui/material/colors";
import { useEffect } from "react";
import AdressCard from "../AdressCard/AdressCard";
import OrderTraker from "./OrderTraker";

const OrderDetails = () => {
//   const dispatch = useDispatch();
//   const jwt = localStorage.getItem("jwt");
//   const { orderId } = useParams();
//   const { order } = useSelector((store) => store);

//   console.log("order", order.order);

//   useEffect(() => {
//     dispatch(getOrderById(orderId));
//   }, []);

  const navigate = useNavigate();
  return (
    <div className=" px-2 lg:px-36 space-y-7 ">
      <Grid container className="p-3 shadow-lg">
        <Grid xs={12}>
          <p className="font-bold text-lg py-2">Delivery Address</p>
        </Grid>
        <Grid item xs={6}>
          <AdressCard />
        </Grid>
      </Grid>
      <Box className="p-5 shadow-lg border rounded-md">
        <Grid
          container
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid item xs={9}>
            <OrderTraker
              activeStep={
                // order.order?.orderStatus === "PLACED"
                //   ? 1
                //   : order.order?.orderStatus === "CONFIRMED"
                //   ? 2
                //   : order.order?.orderStatus === "SHIPPED"
                //   ? 3
                //   : 5
                3
              }
            />
          </Grid>
          <Grid item>
           {/* {order.order?.orderStatus==="DELIVERED" && <Button sx={{ color: ""}} color="error" variant="text" >
              RETURN
            </Button>} */}

            {/* {order.order?.orderStatus!=="DELIVERED" && <Button sx={{ color: deepPurple[500] }} variant="text">
              cancel order
            </Button>} */}
          </Grid>
        </Grid>
      </Box>

    

      <Grid container className="space-y-5">
        {/* {order.order?.orderItems.map((item) => ( */}
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              {" "}
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=70"
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">Men Slim Mid Rise Black Jeans</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span> <span>Size: M</span>
                  </p>
                  <p>Seller: Linaria</p>
                  <p>₹500 </p>
                </div>
              </div>
            </Grid>
            <Grid item>
              {
                <Box
                  sx={{ color: deepPurple[500] }}
                //   onClick={() => navigate(`/account/rate/${item.product.id}`)}
                  className="flex items-center cursor-pointer"
                >
                  <StarIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2 text-5xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              }
            </Grid>
          </Grid>
        {/* ))} */}
      </Grid>
    </div>
  );
};
// sx={{width:"10px",height:"10px"}}
export default OrderDetails;