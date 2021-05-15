import React, { useState } from "react";
import PropTypes from "prop-types";
import Slick from "react-slick";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Header = styled.header`
  height: 44px;
  background: white;
  position: relative;
  padding: 0;
  text-align: center;
  & h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }

  & button {
    position: absolute;
    right: 0;
    top: 0;
    padding: 15px;
    line-height: 14px;
    cursor: pointer;
  }
`;

const SlickWrapper = styled.div`
  height: calc(100%-44px);
  background: #090909;
`;

const ImgWrapper = styled.div`
  padding: 32px
  text-align: center;

  & img {
    margin: 0 auto;
    max-height: 750px;
  }
`;

const Indicator = styled.div`
  text-align: center;

  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log("images in imagesZoom/index", images);

  return (
    <Overlay>
      <Header>
        <h1>Image Detail</h1>
        <button onClick={onClose}>X</button>
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            initialSlide={0} //처음 나오는 이미지 슬라이드
            afterChange={(slide) => setCurrentSlide(slide)} // 사진 넘겼을 때 그 다음 슬라이드 설정
            infinite // 무한 반복
            arrows={false} // 사진 넘기기 위한 방향키 없애기
            slidesToShow={1} //한번에 하나씩 만 보이기
            slidesToScroll={1} // 한번에 사진 하나씩만 넘기기
          >
            {images.map((v) => (
              <ImgWrapper key={v.src}>
                <img src={v.src} alt={v.src} />
              </ImgWrapper>
            ))}
          </Slick>
        </div>
      </SlickWrapper>
    </Overlay>
  );
};

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;
