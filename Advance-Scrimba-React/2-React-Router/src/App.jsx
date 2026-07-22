// import "./App.css";

import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Vans, { loader as vanPageLoader } from "./components/Vans";
import VanDetail from "./components/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./components/Host/Dashboard";
import Income from "./components/Host/Income";
import Reviews from "./components/Host/Reviews";
import HostLayout from "./components/Host/HostLayout";
import HostVans from "./components/Host/HostVans";
import HostVansDetail from "./components/Host/HostVansDetail";
import HostVanPricing from "./components/Host/HostVanPricing";
import HostVanInfo from "./components/Host/HostVanInfo";
import HostVanPhotos from "./components/Host/HostVanPhotos";
import NotFound from "./components/NotFound";
import Error from "./components/Error";
import Login from "./components/Login";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<Error />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} loader={vanPageLoader} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="login" element={<Login />} />

            <Route path="host" element={<HostLayout />}>
                <Route
                    index
                    element={<Dashboard />}
                    loader={async () => {
                        return null;
                    }}
                />
                <Route
                    path="income"
                    element={<Income />}
                    loader={async () => {
                        return null;
                    }}
                />
                <Route
                    path="vans"
                    element={<HostVans />}
                    loader={async () => {
                        return null;
                    }}
                />
                <Route
                    path="vans/:id"
                    element={<HostVansDetail />}
                    loader={async () => {
                        return null;
                    }}
                >
                    <Route
                        index
                        element={<HostVanInfo />}
                        loader={async () => {
                            return null;
                        }}
                    />
                    <Route
                        path="pricing"
                        element={<HostVanPricing />}
                        loader={async () => {
                            return null;
                        }}
                    />
                    <Route
                        path="photos"
                        element={<HostVanPhotos />}
                        loader={async () => {
                            return null;
                        }}
                    />
                </Route>
                <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>,
    ),
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
