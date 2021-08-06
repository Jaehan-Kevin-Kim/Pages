import React, { useState } from "react";
import PropTypes from "prop-types";
import Slick from "react-slick";

import { Overlay, Global, Header, CloseBtn, SlickWrapper, ImgWrapper, Indicator } from "./styles";
import { backUrl } from "../../config/config";

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log("images in imagesZoom/index", images);

  return (
    <Overlay>
      <Global />
      <Header>
        <h1>Image Detail</h1>
        <CloseBtn onClick={onClose} />
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            initialSlide={0} //처음 나오는 이미지 슬라이드
            beforeChange={(slide) => setCurrentSlide(slide)} // 사진 넘겼을 때 그 다음 슬라이드 설정
            infinite // 무한 반복
            arrows={false} // 사진 넘기기 위한 방향키 없애기
            slidesToShow={1} //한번에 하나씩 만 보이기
            slidesToScroll={1} // 한번에 사진 하나씩만 넘기기
          >
            {images.map((v) => (
              <ImgWrapper key={v.src}>
                <img src={`${backUrl}/${v.src}`} alt={v.src} />
              </ImgWrapper>
            ))}
          </Slick>
          <Indicator>
            <div>
              {currentSlide + 1} / {images.length}
            </div>
          </Indicator>
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
