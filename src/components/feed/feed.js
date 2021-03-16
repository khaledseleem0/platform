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
import { GetStory, width, maximam } from "./../getter";
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
    GetStory().then(res => {
      setStory(res.story);
      setload({load:true})
    });
    setPost(props.postContent.post.data);
  }, []);
  let scrollRight,scrollLeft;

  if(load.load== true){

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
      left  = document.querySelector('.left'),
      right  = document.querySelector('.right'),
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
      scrolling.scrollTo(0,0);

  }
return (
    <div>
      <FeedContainer>
        <TitlePage>Feed posts</TitlePage>
        <ArrowRight
          onClick={e => {
            scrollRight(e);
          }} className="right">
            <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd">
            <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
          </svg>

        </ArrowRight>
        <ArrowLeft
          onClick={e => {scrollLeft(e)}} className="left">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
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
          <Input className="postinput" />
          <span>
            <PostICon
              src={process.env.PUBLIC_URL + "images/post.png"}
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
              }}
            ></PostICon>
          </span>

          <Panel>
            <PostICon src={process.env.PUBLIC_URL + "images/photo.png"} />
            <input type="file" name="myImage" className="fileinput" />
            <PostICon src={process.env.PUBLIC_URL + "images/file.png"} />
            <PostICon src={process.env.PUBLIC_URL + "images/code.png"} />
          </Panel>
        </PostNow>
        {props.postContent.post.data.map((post, i) => {
          return <Post postContent={post} key={Math.random()} />;
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
