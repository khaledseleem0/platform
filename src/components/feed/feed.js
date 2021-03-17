import React, { useState, useEffect } from "react";
import { addpost } from "./../../actions";
import {
  FeedContainer,
  Stores,
  Input,
  PostNow,
  PostICon,
  Panel,
  ArrowRight,
  ArrowLeft
} from "./feedStyle";
import { Api} from "./../getter";
import Story from "./story";
import Post from "./post";
import { connect } from "react-redux";
import { TitlePage } from "./../requests/requestsStyle";

function Feed(props) {
  let [story, setStory] = useState([]);
  const [image, setImage] = useState({ image: null });
  const [post, setPost] = useState({ image: null });
  const [load, setload] = useState({ load: false });
  useEffect(() => {
    Api().then(res => {
      let story =res.messages.filter((story)=>{
         return parseInt(story.status) >= 20; 
      });
      setStory(story);
      setload({ load: true });
    });
    setPost(props.postContent.post.data);

  }, []);
  let scrollRight, scrollLeft;  
  if (load.load == true) {
    let onImageChange = () => {
      let fileinput = document.querySelector(".fileinput");
      if (document.querySelectorAll("input")[1] != undefined) {
        let img = fileinput.files[0];
        setImage({ image: URL.createObjectURL(img) });
      }
    };

    onImageChange = onImageChange.bind(this);
    let input = document.querySelector("input[type=file]");
    if (document.querySelector("input[type=file]") != null) {
      input.addEventListener("change", () => {
        onImageChange();
      });
    }

    let num = 0,
      left = document.querySelector(".left"),
      right = document.querySelector(".right"),
      scrolling = document.querySelector(".scrolling"),
      max = scrolling.scrollWidth - scrolling.clientWidth;

    scrollRight = e => {
      left.classList.remove("disabled");
      if (num > max - 70) {
        right.classList.add("disabled");
        scrolling.scrollTo(max, 0);
        return;
      } else {
        num = num + 70;
        scrolling.scroll({
          top: 0,
          left: num,
          behavior: "smooth"
        });
      }
    };
    scrollLeft = e => {
      right.classList.remove("disabled");
      if (num <= 70) {
        left.classList.add("disabled");
        scrolling.scrollTo(0, 0);
        return;
      } else {
        num = num - 70;
        scrolling.scroll({
          top: 0,
          left: num,
          behavior: "smooth"
        });
      }
    };

    left.classList.add("disabled");
    scrolling.scrollTo(0, 0);
  }
  return (
    <div>
      <FeedContainer>
        <TitlePage>Feed posts</TitlePage>
        <ArrowRight
          onClick={e => {
            scrollRight(e);
          }}
          className="right"
        >
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
          </svg>
        </ArrowRight>
        <ArrowLeft
          onClick={e => {
            scrollLeft(e);
          }}
          className="left"
        >
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
          </svg>
        </ArrowLeft>
        <Stores>
          <div className="scrolling">
            {story.map(item => {
              return <Story item={item} key={Math.random()} />;
            })}
          </div>
        </Stores>
        <PostNow>
          <Input className="postinput"></Input>
          <PostICon
            onClick={() => {
              let postinput = document.querySelector(".postinput");
              let text = postinput.value;
              let input = document.querySelector("input[type=file]");
              if (text === "" || text === null || text.trim() === "") {
                return;
              } else {
                props.addpost(text, image.image);
              }

              if (input.files.length != 0) {
                setImage({ image: null });
                input.value = "";
              }
              postinput.value = "";
            }}>

          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="24" height="24"
          viewBox="0 0 48 48"
          style={{fill:"#000000;"}}><path fill="#50e6ff" d="M41.621,5.058l-35.9,12.281c-0.747,0.255-0.967,1.205-0.409,1.763l23.585,23.585	c0.558,0.558,1.508,0.338,1.763-0.409l12.281-35.9C43.222,5.561,42.439,4.778,41.621,5.058z"></path><path fill="#35c1f1" d="M17.105,30.895l11.792,11.792c0.558,0.558,1.508,0.338,1.763-0.409l12.281-35.9	c0.141-0.408,0.015-0.808-0.248-1.071L17.105,30.895z"></path><path fill="#199be2" d="M38,10L13,26.789V34c0,0.552,0.448,1,1,1h7.211L38,10z"></path></svg>
          </PostICon>

          <Panel>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="24" height="24"  viewBox="0 0 172 172" style={{fill:"#000000;"}}><defs><linearGradient x1="53.75" y1="51.74781" x2="53.75" y2="71.64875" gradientUnits="userSpaceOnUse" id="color-1_R4dEF1bM38yo_gr1"><stop offset="0" stop-color="#70dfff"></stop><stop offset="1" stop-color="#70afff"></stop></linearGradient><linearGradient x1="86" y1="23.44306" x2="86" y2="148.694" gradientUnits="userSpaceOnUse" id="color-2_R4dEF1bM38yo_gr2"><stop offset="0" stop-color="#00c6ff"></stop><stop offset="1" stop-color="#0072ff"></stop></linearGradient><linearGradient x1="110.1875" y1="23.44306" x2="110.1875" y2="148.694" gradientUnits="userSpaceOnUse" id="color-3_R4dEF1bM38yo_gr3"><stop offset="0" stop-color="#00c6ff"></stop><stop offset="1" stop-color="#0072ff"></stop></linearGradient><linearGradient x1="120.9375" y1="23.44306" x2="120.9375" y2="148.694" gradientUnits="userSpaceOnUse" id="color-4_R4dEF1bM38yo_gr4"><stop offset="0" stop-color="#00c6ff"></stop><stop offset="1" stop-color="#0072ff"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M64.5,61.8125c0,5.934 -4.816,10.75 -10.75,10.75c-5.934,0 -10.75,-4.816 -10.75,-10.75c0,-5.934 4.816,-10.75 10.75,-10.75c5.934,0 10.75,4.816 10.75,10.75z" fill="url(#color-1_R4dEF1bM38yo_gr1)"></path><g><path d="M142.4375,21.5h-112.875c-4.44513,0 -8.0625,3.61737 -8.0625,8.0625v112.875c0,4.44512 3.61737,8.0625 8.0625,8.0625h112.875c4.44512,0 8.0625,-3.61738 8.0625,-8.0625v-112.875c0,-4.44513 -3.61737,-8.0625 -8.0625,-8.0625zM29.5625,26.875h112.875c1.48081,0 2.6875,1.20669 2.6875,2.6875v93.62175l-21.48925,-21.48925c-2.98312,-2.98044 -7.66475,-3.18469 -10.88975,-0.47031l-24.381,20.50294l-31.98931,-30.72081c-2.95356,-2.83531 -7.55994,-3.01269 -10.71506,-0.40312l-18.78563,15.49881v-76.54c0,-1.48081 1.20669,-2.6875 2.6875,-2.6875zM26.875,142.4375v-2.6875h21.5v-5.375h-21.5v-5.375h13.4375v-5.375h-13.4375v-10.5565l22.20681,-18.32069c1.04812,-0.87344 2.58537,-0.81163 3.57169,0.13437l52.31219,50.24281h-75.40319c-1.48081,0 -2.6875,-1.20669 -2.6875,-2.6875zM142.4375,145.125h-29.71031l-20.46262,-19.65369l23.94294,-20.13206c1.075,-0.90569 2.63644,-0.8385 3.63081,0.15587l25.28938,25.28938v11.653c-0.00269,1.48081 -1.20937,2.6875 -2.69019,2.6875z" fill="url(#color-2_R4dEF1bM38yo_gr2)"></path><path d="M85.46788,83.3125h49.43925c2.67137,0 4.84287,-2.1715 4.84287,-4.84287v-41.37675c0,-2.67137 -2.1715,-4.84287 -4.84287,-4.84287h-49.43925c-2.67137,0 -4.84287,2.1715 -4.84287,4.84287v41.37675c0,2.67137 2.1715,4.84287 4.84287,4.84287zM86,65.32775c6.04419,1.81137 10.79838,6.56825 12.60975,12.60975h-12.60975zM86,59.75656v-5.49863c11.99969,2.21181 21.46775,11.68256 23.67956,23.67956h-5.49863c-2.06131,-9.01925 -9.16169,-16.11963 -18.18094,-18.18094zM134.375,37.625v18.8125h-10.75v5.375h10.75v16.125h-19.28012c-2.322,-14.95862 -14.13625,-26.77287 -29.09487,-29.09487v-11.21762z" fill="url(#color-3_R4dEF1bM38yo_gr3)"></path><rect x="42" y="17" transform="scale(2.6875,2.6875)" width="6" height="2" fill="url(#color-4_R4dEF1bM38yo_gr4)"></rect></g></g></g></svg>
            <input type="file" name="myImage" className="fileinput" />
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 23h-24v-21h24v21zm-20-1v-4h-3v4h3zm15 0v-19h-14v19h14zm4 0v-4h-3v4h3zm-6-9.5l-9 5v-10l9 5zm3 .5v4h3v-4h-3zm-16 4v-4h-3v4h3zm5-1.2l5.941-3.3-5.941-3.3v6.6zm11-7.8v4h3v-4h-3zm-16 4v-4h-3v4h3zm16-9v4h3v-4h-3zm-16 4v-4h-3v4h3z"/></svg>
            <svg  width="24" height="24"  id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 122.88 103.53" style={{enableBackground:"ew 0 0 122.88 103.53"}}><g><path className="st0" d="M5.47,0h111.93c3.01,0,5.47,2.46,5.47,5.47v92.58c0,3.01-2.46,5.47-5.47,5.47H5.47 c-3.01,0-5.47-2.46-5.47-5.47V5.47C0,2.46,2.46,0,5.47,0L5.47,0z M31.84,38.55l17.79,18.42l2.14,2.13l-2.12,2.16L31.68,80.31 l-5.07-5l15.85-16.15L26.81,43.6L31.84,38.55L31.84,38.55z M94.1,79.41H54.69v-6.84H94.1V79.41L94.1,79.41z M38.19,9.83 c3.19,0,5.78,2.59,5.78,5.78s-2.59,5.78-5.78,5.78c-3.19,0-5.78-2.59-5.78-5.78S35,9.83,38.19,9.83L38.19,9.83z M18.95,9.83 c3.19,0,5.78,2.59,5.78,5.78s-2.59,5.78-5.78,5.78c-3.19,0-5.78-2.59-5.78-5.78S15.75,9.83,18.95,9.83L18.95,9.83z M7.49,5.41 h107.91c1.15,0,2.09,0.94,2.09,2.09v18.32H5.4V7.5C5.4,6.35,6.34,5.41,7.49,5.41L7.49,5.41z"/></g></svg> 
          </Panel>
        </PostNow>
        {props.postContent.post.data.map((post, i) => {
          return <Post postContent={post} key={Math.random()} index={i} />;
        })}
      </FeedContainer>
    </div>
  );
}
function mapStateToProps(state) {
  return { postContent: state };
}
const mapDispatchToProps = dispatch => {
  return { addpost: (content, src) => dispatch(addpost(content, src)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
