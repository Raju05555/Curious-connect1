import { Add } from "@material-ui/icons";
import React from "react";
import "./css/SidebarOptions.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://imgs.search.brave.com/AzatN2fEUQvLNB7P9qw1gcy8j7nsP9sUx4Sq3c-FZc4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubmV3czE4LmNv/bS9pYm5saXZlL3Vw/bG9hZHMvMjAxOC8w/OC9kaXNhcm1hbWVu/dC1vZi10aGUtMjZ0/aC1JbmRpYW4tcmVn/aW1lbnQtYXQtQmFy/cmFja3BvcmUuanBn"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://imgs.search.brave.com/AGzi8F0caJVit2nAPnJSDgt__jm_gQqgBz79QiET6HM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9t/YW4tdXNlcy10YWJs/ZXQtYnVzaW5lc3Mt/cGFydG5lcnMtYnVz/aW5lc3MtbWVldGlu/Zy1wZW9wbGUtYXJl/LXNpdHRpbmctdGFi/bGVfMTE1Ny00MDQx/Ny5qcGc_c2VtdD1h/aXNfaHlicmlk"
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://imgs.search.brave.com/6qpPuyI928bTqzVQ4303143zSVucFO5WrHb2UN8Rswk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tdXNjbGVzLWh1/bWFuLWJvZHktYXJl/LWxhYmVsZWQtd2l0/aC13b3JkLWh1bWFu/LWFuYXRvbXlfMTI4/NzUxMi05NTM2Ni5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://imgs.search.brave.com/A71iK6rzZbT0jXOIRzGmCfaRtAwJFvjF5zf31VrwTfA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9mYW1pbHktY29v/a2luZy10b2dldGhl/ci1raXRjaGVuLXdp/dGgtbWFuLWNoaWxk/LWNvb2tpbmdfMTIz/NTgzMS0yNzU5MDcu/anBnP3NpemU9NjI2/JmV4dD1qcGc"
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://imgs.search.brave.com/slWGy5k-dzst4ws8DEu4aFTM5XUTmKEwsanX06v2RJo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWRzLXNzbC53ZWJm/bG93LmNvbS82MTZl/OTM4MjY4YzhmMGE5/MmNiMmI1NDAvNjE2/ZTkzODI2OGM4ZjAy/YjJkYjJjM2NhX2Fk/ZCUyMG11c2ljJTIw/dG8lMjB2aWRlbyUy/MHBpbmslMjBoZWFk/cGhvbmVzLmpwZw"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://imgs.search.brave.com/DcxDkt306FjqrX0P1MaRN5kNnT-uZuD946X65q6zh_I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzcxLzAxLzgz/LzM2MF9GXzM3MTAx/ODM4Ml84ODVGRFRK/bThYbG96S2hjdjF1/ak1WSndzbzJpbHcz/ay5qcGc"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://imgs.search.brave.com/E1dCs3x-s-WxRlogK1eo-vlvsKGxGnrnMUiN3SI56So/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9nb29k/LWhlYWx0aC1jb25j/ZXB0LWhlYWx0aHkt/bGlmZXN0eWxlLWJh/Y2tncm91bmQtOTY0/OTg1MTMuanBn"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://imgs.search.brave.com/J9TbH5YHkW05Kjkg2Umufv6MKt5RelriM1nY2zavqh0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNvbGxpZGVy/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzL3NoYXJlZGlt/YWdlcy8yMDI0LzA3/L3BpcmF0ZXMtb2Yt/dGhlLWNhcmliYmVh/bi1kZWFkbWFuLXMt/Y2hlc3QtcG9zdGVy/LmpwZw"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://imgs.search.brave.com/0PxB8QPSLbnLtnxCX3t62Jv8_kCByQdLnfE96wqHdWo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/aS1udWNsZWFyLWVu/ZXJneS1mdXR1cmUt/aW5ub3ZhdGlvbi1k/aXNydXB0aXZlLXRl/Y2hub2xvZ3lfNTM4/NzYtMTI5Nzg0Lmpw/Zz9zZW10PWFpc19o/eWJyaWQ"
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://imgs.search.brave.com/nLWTKQwLixu7wZB3qE6pDX1EbJink_r8Y05jH-4YLh4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzEyLzQxLzgy/LzM2MF9GXzExMjQx/ODI4MF9IMlA3MVdZ/ZzI4SlBxcWhOYUhJ/bWdGUldUaldnMmw0/OS5qcGc"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;
