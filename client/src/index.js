import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Construction from './views/Construction/Construction';
import Twobhk from './views/Twobhk/Twobhk';
import Home from './views/Home/Home'
import Ourdesign from './views/Ourdesign/Ourdesign'
import About from './views/About/About';
import ConstructionMaterials from './views/ConstructionMaterials/ConstructionMaterials';
import Supervision from './views/Supervision/Supervision';
import Autocad from './views/Autocad/Autocad';
import RCCDesign from './views/Rccdesign/Rccdesign';
import ConstructionPermission from './views/Constructionpermission/Constructionpermission';
import Elevation from './views/Elevation/Elevation'
import Interiar from './views/Interial/Interial';
import Estimate from './views/Estimate/Estimate';
import Onebhk from './views/Onebhk/Onebhk';
import Threebhk from './views/Threebhk/Threebhk';
import Fourbhk from './views/Fourbhk/Fourbhk';
import Mandir from './views/Mandir/Mandir';
import Showroom from './views/Showroom/Showroom'
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
    "path": "/",
    "element": <Home />
    },
    {
        "path": "/ourdesign",
        "element": <Ourdesign/>
    },
    {
        "path":"/about",
        "element": <About/>

    },
    {
        'path':'/वास्तुशास्त्रानुसारबांधकाम',
        'element': <Construction/>
    },
{
    'path':'/twobhk',
    'element': <Twobhk/>
},
{
    'path':'/constructionmaterials',
    'element':<ConstructionMaterials/>
},
{
    'path':'/supervision',
    'element':<Supervision/>
},
{
    'path':'/सॉफ्टवेअर',
    'element':<Autocad/>
},
{
    'path':'/rccdesign',
    'element':<RCCDesign/>
},
{
    'path':'/constructionpermission',
    'element':<ConstructionPermission/>
},
{
'path':'/3delevation',
'element':<Elevation/>
},
{
    'path':'/Interior',
    'element':<Interiar/>
},
{
    'path':'/estimate',
    'element':<Estimate/>
},
{
    'path':'/onebhk',
    'element':<Onebhk/>
},
{
    'path':'/threebhk',
    'element':<Threebhk/>
},
{
    'path':'/fourbhk',
    'element':<Fourbhk/>
},
{
    'path':'/mandir',
    'element':<Mandir/>
},
{
    'path':'/showroom',
    'element':<Showroom/>
}

])

root.render(
<RouterProvider router={router}
/>

)