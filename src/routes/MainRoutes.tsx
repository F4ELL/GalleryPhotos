import { useRoutes } from "react-router-dom"
import Album from "../pages/Album"
import Home from "../pages/Home"
import Photos from "../pages/Photos"

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home />},
        { path: '/albums/:albumId', element: <Album />},
        { path: '/photos/:photoId', element: <Photos />}
    ])
}