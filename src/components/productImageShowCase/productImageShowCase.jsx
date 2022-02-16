import React from 'react';
import propTypes from 'prop-types';

import OutOfStockOverlay from '../outOfStockOverlay';
import * as S from './style';

export default class ProductImageShowCase extends React.Component {
  constructor(props) {
    super(props);
    const { imgList, productName } = this.props;

    this.state = {
      imageList: imgList || [],
      productName: productName || '',
      selectedImage: '',
    };
  }

  componentDidUpdate(prevProps) {
    const { imgList, productName } = this.props;

    if (imgList !== prevProps.imgList) {
      if (Array.isArray(imgList)) {
        this.setImgState(imgList);
      }
    }

    if (productName !== prevProps.productName) {
      this.setProductNameState(productName);
    }
  }

  setImgState(imgList) {
    this.setState({
      imageList: imgList,
      selectedImage: imgList[0],
    });
  }

  setProductNameState(productName) {
    this.setState({ productName });
  }

  changeSelectedImg(url) {
    this.setState({
      selectedImage: url,
    });
  }

  render() {
    const { selectedImage, productName, imageList } = this.state;

    return (
      <S.Container>
        <S.ShowCaseList>
          {imageList.map((img) => (
            <li key={img}>
              <button type='button' onClick={() => this.changeSelectedImg(img)}>
                <img src={img} alt={productName} />
              </button>
            </li>
          ))}
        </S.ShowCaseList>
        <div>
          <OutOfStockOverlay />
          <img src={selectedImage} alt={productName} />
        </div>
      </S.Container>
    );
  }
}

ProductImageShowCase.propTypes = {
  productName: propTypes.string.isRequired,
  imgList: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
};
