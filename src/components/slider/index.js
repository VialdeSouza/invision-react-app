import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image from '../../assets/data.png';
import {
  Caption, Description, Title, WrapperBanner, ImageBanner, Indicator,
} from './styles';

function Slider() {
  return (
    <WrapperBanner>
      <Carousel
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <Indicator
                isSelected
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <Indicator
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        interval={5000}
        transitionTime={1000}
      >
        <div>
          <ImageBanner>
            <img src={image} alt="Two people show graphs" />
          </ImageBanner>
          <Caption>
            <Title>Marcenas mattis egestas</Title>
            <Description>
              Erdum et malesuada fames ac ante ileum primmer in
              faucibus uspendisse porta.
            </Description>
          </Caption>
        </div>
        <div>
          <ImageBanner>
            <img src={image} alt="Two people show graphs" />
          </ImageBanner>
          <Caption>
            <Title>Marcenas mattis egestas</Title>
            <Description>
              Erdum et malesuada fames ac ante ileum primmer in
              faucibus uspendisse porta.
            </Description>
          </Caption>
        </div>
        <div>
          <ImageBanner>
            <img src={image} alt="Two people show graphs" />
          </ImageBanner>
          <Caption>
            <Title>Marcenas mattis egestas</Title>
            <Description>
              Erdum et malesuada fames ac ante ileum primmer in
              faucibus uspendisse porta.
            </Description>
          </Caption>
        </div>

      </Carousel>
    </WrapperBanner>
  );
}

export default Slider;
