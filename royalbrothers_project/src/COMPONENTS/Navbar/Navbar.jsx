import { Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import DrawerExample from "../Sidebar/Sidebar";
export default function Nav() {
  return (
    <>
      <div><p
        style={{
          backgroundColor: "#fed250",
          padding: "5px",
          marginTop: "0px",
          fontSize: "14px",
        }}
      >
        Our delay policy has been changed  <a href="">Know more</a></p>
         {/* <a href="/">Know more<a/></div> */}
      
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            textAlign: "right",
            width: "100%",
            marginTop: "5px",
            marginBottom: "5px",
            borderBottom: "0.1px solid lightgrey",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", float: "right" ,marginTop:"-15px",padding:'4px'}}>
            <div><img height="14px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoSvmnm5Xat2eUJ2qZijUrweZS0pueSDBHnQ&usqp=CAU"
              alt="call"
            ></img></div>
            <Text margin="-1px 5px">+919368155634 / +919507524066</Text>
            <Text margin="-1px 8px">|</Text>
           <div style={{ marginRight:"6px", textDecoration:"none",color:"black"}}> <a  href="/" >
              Chat Now
            </a></div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row",boxShadow:"rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px", marginTop:"-3px" }}>
          <div
            style={{
              width: "200px",
              display: "flex",
              flexDirection: "row",
              marginLeft: "10px",
            }}
          >
            <DrawerExample />
            <Link to="/">
              
              <img
                style={{ height: "57px" }}
                // src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%201.png"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4v-lbnpyvlbyFviW3Sb_-DFRQDZWNkpHtwA&usqp=CAU"
                alt="logo"
              />
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "55%",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              <Link to="/tariff">
                <Text  style={{fontSize:"16px", fontWeight:"500", textDecoration:"none",color:"black"}}>
                  Tariff
                </Text>
              </Link>
            </div>
            <div>
              <Link to="/store">
                {" "}
                <Text  style={{fontSize:"16px", fontWeight:"500", textDecoration:"none",color:"black"}} >
                  Store
                </Text>
              </Link>
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", width: "150px", }}
            >
              <Link to="/what's new">
                {" "}
                <Text style={{fontSize:"16px", fontWeight:"500", textDecoration:"none",color:"black"}}>
                  What's New?
                </Text>
              </Link>
              <img
                style={{ height: "15px",fontWeight:"500px", marginTop: "19px", marginLeft: "10px" }}
                src="https://cdn-icons-png.flaticon.com/128/318/318426.png"
                alt="arrow"
              ></img>
            </div>
            <div>
              <Link to="/offers">
                {" "}
                <Text style={{fontSize:"16px", fontWeight:"500", textDecoration:"none",color:"black"}}>
                  Offers
                </Text>
              </Link>
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", width: "200px" }}
            >
              <Link to="/partner with us">
                {" "}
                <Text style={{fontSize:"16px", fontWeight:"500", textDecoration:"none",color:"black"}}>
                  Partner With Us
                </Text>
              </Link>
              <img
               style={{ height: "15px",fontWeight:"500px", marginTop: "19px", marginLeft: "10px" }}
               src="https://cdn-icons-png.flaticon.com/128/318/318426.png"
               alt="arrow"
              ></img>
            </div>
          </div>
          <div>
            <div
              style={{
                height: "40px",
                width: "200px",
                display: "flex",
                flexDirection: "row",
                marginLeft: "10px",
                border: "1px solid black",
                marginTop: "10px",
                borderRadius: "4px",
                borderColor: "#FDB605",
              }}
            >
              <img
                style={{ height: "80%", marginLeft: "10px", marginTop: "4px" }}
                src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Vector%20(2).png"
                alt="location"
              ></img>
              <Text
                fontSize="13px"
                fontWeight="500"
                marginTop="10px"
                marginLeft="18px"
              >
                Agra
              </Text>
              <img
                style={{
                  height: "15px",
                  marginTop: "10px",
                  position: "absolute",
                  zIndex: "-100",
                  marginLeft: "13%",
                }}
                // style={{ height: "10px",fontWeight:"500px", marginTop: "19px", marginLeft: "10px" }}
                src="https://cdn-icons-png.flaticon.com/128/318/318426.png"
                alt="arrow"
              ></img>
            </div>
          </div>
          <div
            style={{
              marginLeft: "30px",
              marginRight: "10px",
              width: "200px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* {token===""? */}
            {/* <> */}
            <Button height="40px" width="90px" backgroundColor="transparent">
              Login
            </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button height="40px" width="90px" backgroundColor="#FDB605">
              {" "}
              Sign up
            </Button>
            {/* </>
            :
            <Button height="45px" width="180px" backgroundColor="transparent" border="1px solid #FDB065">{name}</Button>} */}
          </div>
        
        </div>
        {/* <hr style={{height:"2px",borderWidth:"0",color:"black",backgroundColor:"gray"}}></hr> */}
      </div>
      </div>
    </>
  );
}
