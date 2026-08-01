import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Vans, { loader as vanPageLoader } from "./components/Vans";
import VanDetail, {
    loader as vanDetailPageLoader,
} from "./components/VanDetail";
import Layout from "./components/Layout";
import Dashboard, {
    loader as dashboardLoader,
} from "./components/Host/Dashboard";
import Income from "./components/Host/Income";
import Reviews from "./components/Host/Reviews";
import HostLayout from "./components/Host/HostLayout";
import HostVans, {
    loader as hostVansLoaderPage,
} from "./components/Host/HostVans";
import HostVansDetail, {
    loader as HostVansDetailLoaderPage,
} from "./components/Host/HostVansDetail";
import HostVanPricing from "./components/Host/HostVanPricing";
import HostVanInfo from "./components/Host/HostVanInfo";
import HostVanPhotos from "./components/Host/HostVanPhotos";
import NotFound from "./components/NotFound";
import Error from "./components/Error";
import Login, {
    loader as loginLoader,
    action as loginAction,
} from "./components/Login";

import { requireAuth } from "./utils";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route
                path="vans"
                element={<Vans />}
                loader={vanPageLoader}
                errorElement={<Error />}
            />
            <Route
                path="vans/:id"
                element={<VanDetail />}
                loader={vanDetailPageLoader}
                errorElement={<Error />}
            />
            <Route
                path="login"
                element={<Login />}
                loader={loginLoader}
                action={loginAction}
            />

            <Route
                path="host"
                element={<HostLayout />}
                loader={async (request) => await requireAuth(request)}
            >
                <Route index element={<Dashboard />} loader={dashboardLoader} />
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
                    loader={hostVansLoaderPage}
                    errorElement={<Error />}
                />
                <Route
                    path="vans/:id"
                    element={<HostVansDetail />}
                    loader={HostVansDetailLoaderPage}
                    errorElement={<Error />}
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
