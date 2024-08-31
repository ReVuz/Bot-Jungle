"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import $ from "jquery";
import "./style.css";

function Hero() {
  const galleryPosRef = useRef({ x: 0, y: 0 });
  const galleryBoundsRef = useRef({ top: 0, right: 0, bottom: 0, left: 0 });

  useEffect(() => {
    const gallery = $("#gallery-box");

    // Calculate initial galleryPos and galleryBounds
    galleryPosRef.current = {
      x: gallery.position().left + gallery.width() / 2,
      y: gallery.position().top + gallery.height() / 2,
    };
    galleryBoundsRef.current = {
      top: gallery.position().top,
      right: gallery.position().left + gallery.width(),
      bottom: gallery.position().top + gallery.height(),
      left: gallery.position().left,
    };

    // Mousemove event handler
    $(gallery).on("mousemove", (e) => {
      const mousePos = { x: e.pageX, y: e.pageY };
      calcOffset(mousePos);
      move();
      parallaxPics(mousePos);
    });

    // Mouseleave event handler
    $(gallery).on("mouseleave", () => {
      $("#gallery-box div.gallery").attr("data-offset-x", "0");
      $("#gallery-box div.gallery").attr("data-offset-y", "0");

      $("div.item img").each(function () {
        $(this).css("left", "50%");
        $(this).css("top", "50%");
      });
      move();
    });

    // Resize event handler
    $(window).resize(() => {
      galleryPosRef.current = {
        x: gallery.position().left + gallery.width() / 2,
        y: gallery.position().top + gallery.height() / 2,
      };
      galleryBoundsRef.current = {
        top: gallery.position().top,
        right: gallery.position().left + gallery.width(),
        bottom: gallery.position().top + gallery.height(),
        left: gallery.position().left,
      };
    });

    // Hover effect for the overlay link
    $("div.overlay a").on("mouseleave", function () {
      $(this).addClass("leave");
      var $element = $(this);
      setTimeout(function () {
        $element.removeClass("leave");
      }, 500);
    });

    // Clean up event listeners when component unmounts
    return () => {
      $(gallery).off("mousemove");
      $(gallery).off("mouseleave");
      $(window).off("resize");
      $("div.overlay a").off("mouseleave");
    };
  }, []);

  // Calculate the offset for the gallery based on mouse position
  function calcOffset(mousePos) {
    var newX = mousePos.x - galleryPosRef.current.x;
    newX = invertValue(newX) / 2;
    var newY = mousePos.y - galleryPosRef.current.y;
    newY = invertValue(newY);

    $("#gallery-box div.gallery").attr("data-offset-x", newX);
    $("#gallery-box div.gallery").attr("data-offset-y", newY);
  }

  // Calculate the mouse position percentage relative to the gallery bounds
  function calcPercentage(mousePos) {
    var horizontal =
      ((mousePos.x - galleryBoundsRef.current.left) /
        $("#gallery-box").width()) *
      100;
    var vertical =
      ((mousePos.y - galleryBoundsRef.current.top) /
        $("#gallery-box").height()) *
      100;
    return { h: horizontal, v: vertical };
  }

  // Move the gallery element based on its data-offset attributes
  function move() {
    var newX = $("#gallery-box div.gallery").attr("data-offset-x");
    var newY = $("#gallery-box div.gallery").attr("data-offset-y");

    $("#gallery-box div.gallery").css(
      "transform",
      `translate(-50%, -50%) translate(${newX}px, ${newY}px)`
    );
  }

  // Implement parallax effect on images
  function parallaxPics(mousePos) {
    var percentages = calcPercentage(mousePos);
    $("div.item img").each(function () {
      $(this).css("left", 100 - percentages.h + "%");
      $(this).css("top", 100 - percentages.v + "%");
    });
  }

  // Helper function to invert the sign of a number
  function invertValue(num) {
    if (Math.sign(num) == 1) {
      num = -Math.abs(num);
    } else {
      num = Math.abs(num);
    }
    return num;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div
        id="gallery-box"
        className="relative w-full md:w-4/5 lg:w-3/5 mx-auto aspect-[16/9]"
      >
        <div className="overlay absolute inset-0 flex flex-col items-center justify-center text-white z-10 pointer-events-none">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            Bot Jungle
          </h1>
        </div>

        <div className="gallery flex flex-col gap-8 absolute inset-0 justify-center transform transition-transform duration-2000 ease-linear">
          <div className="row flex gap-8 flex-wrap">
            <div className="item nr1 w-full md:w-1/3 lg:w-1/4">
              <Image
                src="/img/IMG-20240826-WA0010.jpg"
                width={600}
                height={240}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="item nr2 w-full md:w-1/3 lg:w-1/4">
              <Image
                src="/img/IMG-20240826-WA0011.png"
                width={600}
                height={240}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="item nr3 w-full md:w-1/3 lg:w-1/4">
              <Image
                src="/img/IMG-20240826-WA0012.png"
                width={600}
                height={240}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="item nr4 w-full md:w-1/3 lg:w-1/4">
              <Image
                src="/img/IMG-20240826-WA0013.png"
                width={600}
                height={240}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="item nr5 w-full md:w-1/2 lg:w-1/3">
              <Image
                src="/img/IMG-20240826-WA0014.png"
                width={597}
                height={240}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="item nr6 w-full md:w-1/2 lg:w-1/4">
              <Image
                src="/img/IMG-20240826-WA0017.png"
                width={306}
                height={240}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="item nr7 w-full md:w-1/3 lg:w-1/4">
              <Image
                src="/img/IMG-20240826-WA0016.png"
                width={274}
                height={240}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="item nr8 w-full md:w-1/3 lg:w-1/4">
              <Image
                src="/img/IMG-20240826-WA0017.png"
                width={323}
                height={240}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="item nr9 w-full md:w-1/3 lg:w-1/4">
              <Image
                src="/img/IMG-20240826-WA0019.png"
                width={303}
                height={240}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="item nr10 w-full md:w-1/3 lg:w-1/4">
              <Image
                src="/img/IMG-20240826-WA0010.jpg"
                width={255}
                height={240}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="item nr11 w-full md:w-1/2 lg:w-1/3">
              <Image
                src="/img/IMG-20240826-WA0010.jpg"
                width={479}
                height={240}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="item nr12 w-full md:w-1/2 lg:w-1/3">
              <Image
                src="/img/IMG-20240826-WA0010.jpg"
                width={479}
                height={240}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
