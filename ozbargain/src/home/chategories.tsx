
import BackgroundBlogCard from "./card_item";
import "./home.css"
import { Fade } from "react-awesome-reveal";

export function Chategories () {
    return (
        <>
        <div id="card-set-container">
        <div id="card-set">
            <Fade duration={2000} direction="left">
            <BackgroundBlogCard Heading="Automotives" Name="" Url='https://plus.unsplash.com/premium_photo-1714816334057-d697e55cfeb9?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <BackgroundBlogCard Heading="Books and magazines" Name="" Url='https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <BackgroundBlogCard Heading="Computing" Name="" Url='https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww'/>
            <BackgroundBlogCard Heading="Education" Name="" Url='https://plus.unsplash.com/premium_photo-1675008166610-deb4c5c62ddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D'/>
            <BackgroundBlogCard Heading="Entertainment" Name="" Url='https://images.unsplash.com/photo-1717295248494-937c3a5655b1?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <BackgroundBlogCard Heading="Fashion and design" Name="" Url='https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <BackgroundBlogCard Heading="Financial" Name="" Url='https://images.unsplash.com/photo-1621839846410-79d498777ff7?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <BackgroundBlogCard Heading="Gaming" Name="" Url='https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </Fade>
        </div>
        </div>
        </>
    );
}


