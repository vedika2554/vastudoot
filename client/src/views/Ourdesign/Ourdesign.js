import React, {useEffect, useState} from "react";
import './Ourdesign.css'
import Plancard from "../../component/Plancard/Plancard";
import Navbar from "../../component/Navbar/Navbar"
import Footer from "../../component/Footer/Footer"
import axios from 'axios'
import { Link } from 'react-router-dom';
function Ourdesign() {  const [datas, setData] = useState([]);

    const loadData = async ()=>{
         const responce = await axios.get("/datas")
         setData(responce?.data?.data);
     }
 useEffect(()=>{
     loadData();
 
 },[])
 
    
   return (
    <>
    <Navbar/>
    <div>
        <h2 className="hr">Our Recent design</h2>
        <p className="odpdd">At Vastudoot Construction, we specialize in creating thoughtfully designed living spaces and architectural marvels that cater to a variety of needs and preferences. Our recent projects include a range of beautifully constructed 1 BHK, 2 BHK, 3 BHK, and 4 BHK homes, as well as a dedicated mandir, each crafted with precision and attention to detail. Here’s a closer look at our recent constructions:

</p>



       <div className="kop">
        <div className="apl"><h1 className="atm">1 Bhk Design</h1>
        <img src={"https://i.imgur.com/CHUZktL.jpeg"} className="bhk"/>
        <button className='tata'><Link className='ink'to='/onebhk'>See now</Link></button>

        </div>
        <div className="apl"><h1 className="atm">2 Bhk Design</h1>
<img src={"https://i.imgur.com/zmEHjaR.jpeg"} className="bhk"/>
<button className='tata'><Link className='ink'to='/twobhk'>See now</Link></button>

        </div>
        <div className="apl"><h1 className="atm">3 Bhk Design</h1>
        <img src={"https://i.imgur.com/ZOIVpBi.jpeg"} className="bhk"/>
        <button className='tata'><Link className='ink'to='/threebhk'>See now</Link></button>

        </div>
       
       </div>


       <div className="kop">
       
       <div className="apl"><h1 className="atm">4 Bhk Design</h1>
<img src={"https://i.imgur.com/c7XHiyR.jpeg"} className="bhk"/>
<button className='tata'><Link className='ink'to='/fourbhk'>See now</Link></button>

</div>
<div className="apl"><h1 className="atm">Mandir design</h1>
<img src={"https://i.imgur.com/FmcG6EP.jpeg"} className="bhk"/>
<button className='tata'><Link className='ink'to='/mandir'>See now</Link></button>



</div>
        
        <div className="apl"><h1 className="atm">Show Room</h1>
        <img src={"https://i.imgur.com/3rvvczr.jpeg"} className="bhk"/>
        <button className='tata'><Link className='ink'to='/showroom'>See now</Link></button>

        </div>
       
       </div>
</div>
<h1 className="cide"> Some sample designs</h1>
    <div className="lot">
       
      
        {

            datas?.map((data, index)=>{
                const {_id,image,design} = data;
                return(<Plancard key={index} id={_id} image={image} design={design}/>)
            })
        }
    </div>
    <Footer/>
    </>
   )
   
}
export default Ourdesign

