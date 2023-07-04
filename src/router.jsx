import { createBrowserRouter, Navigate } from "react-router-dom";
import GuestLayout from "./layout/GuestLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import MetaDataPage from "./pages/MetaDataPage";
import PortFolioPage from "./pages/PortFolioPage";
import ServicePage from "./pages/ServicePage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout/>,
        children:[
            {
                path: '/',
                element: <Navigate to="/home"/>
            },
            {
                path: '/home',
                element: <HomePage/>
            },
            { 
                path: '/about',
                element: <AboutPage/>  
            },
            {
                path: '/escribinos',
                element: <ContactPage/>
            },
            {
                path: '/metadata',
                element: <MetaDataPage/>
            },
            {
                path: '/portfolio',
                element: <PortFolioPage/>
            },
            {
                path: '/service',
                element: <ServicePage/>
            }
        ]
    },
    {
        path:'*',
        element:<NotFound/>
    }
])
export default router;