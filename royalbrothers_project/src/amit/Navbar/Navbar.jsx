import { Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import DrawerExample from "../Sidebar/Sidebar";
export default function Nav() {

//   var btn = document.getElementById("disappear")
// function divAppear() {
//     var cll = document.getElementById("shop_hover");
//     cll.style.display = "grid";
//     cll.style.background = "white";
// }
// btn.addEventListener("mouseover", divAppear);

// // work on div of shop_hover =>

// var cll = document.getElementById("shop_hover");
// function divDisappear() {
//         cll.style.display = "none";
// }
// cll.addEventListener("mouseleave", divDisappear);
  return (
    <div>
      <div>
        <p id="navrow1">
        Our delay policy has been changed  <a href="/">Know more</a></p>
      <div id="navrow2"
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            textAlign: "right",
            width: "100%",
            margin: "5px 0 5px 0",
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
            <Link to="/Home"> <div style={{ marginRight:"6px", textDecoration:"none",color:"black"}}>
              Chat Now
            </div></Link>
          </div>
        </div>
        <div id="nav3">
          <div id="drawlogo">
            <DrawerExample />
            <Link to="/Home">
              
              <img
                style={{ height: "57px" }}
                // src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%201.png"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4v-lbnpyvlbyFviW3Sb_-DFRQDZWNkpHtwA&usqp=CAU"
                alt="logo"
              />
            </Link>
          </div>
          <div id="navpagecont">
            <div>
              <Link to="/tarrif" className="navlink">
                <Text  >
                  Tariff
                </Text>
              </Link>
            </div>
            <div>
              <Link to="/store" className="navlink">
                
                <Text   >
                  Store
                </Text>
              </Link>
            </div>
            <div id="whatnew">
              <Link to="/what's new" className="navlink">
                
                <Text >
                  What's New?
                </Text>
                {/* <div id="shop_hover">
                <div id="first">
                  <p><Link to="/offers">Store</Link></p>
                </div>
                </div> */}
                </Link>
              <img
                style={{ height: "15px",fontWeight:"500px", marginTop: "19px", marginLeft: "10px" }}
                src="https://cdn-icons-png.flaticon.com/128/318/318426.png"
                alt="arrow"
              ></img>
            </div>
            <div>
              <Link to="/offers" className="navlink">
                <Text >
                  Offers
                </Text>
              </Link>
            </div >
            <div id="partner"
              
            >
              <Link to="/partner with us" className="navlink">
               
                <Text>Partner With us</Text> 
                {/* <div id="shop_hover">
                <div id="first">
                    <p><Link to="/offers">Earn with us</Link></p>
                    <p><Link to="/offers">Own a franchise</Link></p>
                </div>
                </div> */}
              </Link>
              <img
               style={{ height: "15px",fontWeight:"500px", marginTop: "19px", marginLeft: "10px" }}
               src="https://cdn-icons-png.flaticon.com/128/318/318426.png"
               alt="arrow"
              ></img>
            </div>
          </div>
          <div>
            <Link to="/user-location" style ={{textDecoration:"none"}}>
            <div id="location">
              <img
               style={{ height: "70%",  margin:"5px 0 0 10px",backgroundColor:"#f1b826",borderRadius:"50%" }}
                src="https://img.icons8.com/ios/1x/place-marker--v2.png"
                alt="location"
              ></img>
              <Text style={{
                fontSize:"15px",
                fontWeight:"500",
                margin:"10px 0 0 18px",
                }}
              >
                Agra
              </Text>
              <img
                style={{
                  height: "15px",
                  marginTop: "10px",
                  // position: "absolute",
                  marginLeft: "13%",
                }}
                // style={{ height: "10px",fontWeight:"500px", marginTop: "19px", marginLeft: "10px" }}
                src="https://cdn-icons-png.flaticon.com/128/318/318426.png"
                alt="arrow"
              ></img>
            </div></Link>
          </div>
          <div id="logsign">
            {/* {token===""? */}
            {/* <> */}
            <Button height="35px" width="90px" backgroundColor="transparent" borderRadius="8px" >
              Login
            </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button height="35px" width="90px" backgroundColor="#FDB605" borderRadius="8px">
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
    </div>
  );
}
