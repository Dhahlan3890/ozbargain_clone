import React from "react";
import { Fade } from "react-awesome-reveal";

export function CompGallery() {
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 m-4">
        <div className="grid gap-4">
          <Fade duration={2000} direction="up">
            <div className="relative" style={{cursor:"pointer"}}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <p className="text-white text-lg m-2" style={{fontSize: window.innerWidth > 440 ? "30px" : "20px", fontFamily:"DMSans, sans-sarif"}}>Creative/Design</p>
              </div>
            </div>
          </Fade>
          <Fade duration={2000} direction="up">
            <div className="relative" style={{cursor:"pointer"}}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center "
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <p className="text-white text-lg m-2" style={{fontSize: window.innerWidth > 440 ? "30px" : "20px", fontFamily:"DMSans, sans-sarif"}}>Gussing</p>
              </div>
            </div>
          </Fade>
          <Fade duration={2000} direction="up">
            <div className="relative" style={{cursor:"pointer"}}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <p className="text-white text-lg m-2" style={{fontSize: window.innerWidth > 440 ? "30px" : "20px", fontFamily:"DMSans, sans-sarif"}}>Instant win</p>
              </div>
            </div>
          </Fade>
        </div>
        
        <div className="grid gap-4">
          <Fade duration={2000} direction="up">
            <div className="relative" style={{cursor:"pointer"}}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <p className="text-white text-lg m-2" style={{fontSize: window.innerWidth > 440 ? "30px" : "20px", fontFamily:"DMSans, sans-sarif"}}>Lucky Draw</p>
              </div>
            </div>
          </Fade>
          <Fade duration={2000} direction="up">
            <div className="relative" style={{cursor:"pointer"}}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <p className="text-white text-lg m-2" style={{fontSize: window.innerWidth > 440 ? "30px" : "20px", fontFamily:"DMSans, sans-sarif"}}>No of words or skills</p>
              </div>
            </div>
          </Fade>
          <Fade duration={2000} direction="up">
            <div className="relative" style={{cursor:"pointer"}}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center "
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <p className="text-white text-lg m-2" style={{fontSize: window.innerWidth > 440 ? "30px" : "20px", fontFamily:"DMSans, sans-sarif"}}>Other Skills</p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="grid gap-4">
          <Fade duration={2000} direction="up">
            <div className="relative" style={{cursor:"pointer"}}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <p className="text-white text-lg m-2" style={{fontSize: window.innerWidth > 440 ? "30px" : "20px", fontFamily:"DMSans, sans-sarif"}}>Daily Entry</p>
              </div>
            </div>
          </Fade>
          <Fade duration={2000} direction="up">
            <div className="relative" style={{cursor:"pointer"}}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center "
                src="https://docs.material-tailwind.com/img/team-3.jpg"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <p className="text-white text-lg m-2" style={{fontSize: window.innerWidth > 440 ? "30px" : "20px", fontFamily:"DMSans, sans-sarif"}}>Creative/Design</p>
              </div>
            </div>
          </Fade>
          
          <Fade duration={2000} direction="up">
            <div className="relative" style={{cursor:"pointer"}}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <p className="text-white text-lg m-2" style={{fontSize: window.innerWidth > 440 ? "30px" : "20px", fontFamily:"DMSans, sans-sarif"}}>Creative/Design</p>
              </div>
            </div>
          </Fade>
        </div>
        
        <div className="grid gap-4">
          <Fade duration={2000} direction="up">
            <div className="relative" style={{cursor:"pointer"}}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <p className="text-white text-lg m-2" style={{fontSize: window.innerWidth > 440 ? "30px" : "20px", fontFamily:"DMSans, sans-sarif"}}>Creative/Design</p>
              </div>
            </div>
          </Fade>
          <Fade duration={2000} direction="up">
            <div className="relative" style={{cursor:"pointer"}}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                alt="gallery-photo"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <p className="text-white text-lg m-2" style={{fontSize: window.innerWidth > 440 ? "30px" : "20px", fontFamily:"DMSans, sans-sarif"}}>Creative/Design</p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }