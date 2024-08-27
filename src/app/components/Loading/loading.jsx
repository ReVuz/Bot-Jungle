"use client";
import React from "react";
import "./Style.css";

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-full max-w-[20rem] aspect-square">
        <div className="modelViewPort w-full h-full rounded-full flex justify-center items-center bg-black overflow-hidden">
          <div className="eva">
            <div className="head w-24 h-16 relative">
              <div className="eyeChamber w-[4.5rem] h-[2.75rem] absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2">
                <div className="eye w-[1.2rem] h-[1.5rem] absolute left-3 top-1/2 -translate-y-1/2"></div>
                <div className="eye w-[1.2rem] h-[1.5rem] absolute right-3 top-1/2 -translate-y-1/2"></div>
              </div>
            </div>
            <div className="body w-24 h-32 relative mt-1">
              <div className="hand absolute -left-6 top-3 w-8 h-[5.5rem]"></div>
              <div className="hand absolute left-[92%] top-3 w-8 h-[5.5rem]"></div>
              <div className="scannerThing absolute left-[60%] top-[10%]"></div>
              <div className="scannerOrigin absolute left-[60%] top-[10%] w-2 aspect-square rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
