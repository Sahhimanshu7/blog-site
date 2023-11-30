import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
import { Home } from './home/Home';
import { CreateBlog } from "./createBlog/CreateBlog";
import { Saved } from "./saved/Saved";
  
export const Pages = () =>{
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-blog" element={<CreateBlog />} />
                <Route path="/saved" element={<Saved />} />
            </Routes>
        </BrowserRouter>
    </>
}