/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import propTypes from 'prop-types';

import * as S from './style';
import selectAttribute from '../../services/attributes/selectAttribute';

export default class AttributeHandler extends React.Component {
  render() {
    const { attribute, outOfStock, setPreferencesFunction, selected } = this.props;
    if (selected.id) {
      return (
        <>
          {attribute.items.map((option) => {
            if (selected[attribute.name] === option.id) {
              return (
                <S.CartAtributeOption
                  key={option.id}
                  isColor={attribute.name === 'Color' ? option.value : false}
                  outOfStock={outOfStock}
                >
                  <S.CartAtributeText
                    key={option.id}
                    id={option.id}
                    className={`attribute-${attribute.name}`}
                    isColor={attribute.name === 'Color' ? option.value : false}
                    outOfStock={outOfStock}
                  >
                    {attribute.name === 'Color' ? '' : option.value}
                  </S.CartAtributeText>
                </S.CartAtributeOption>
              );
            }
            return null;
          })}
        </>
      );
    }
    return (
      <S.AtributeHandlerContainer>
        <h4>{attribute.name}:</h4>
        <S.AtributeBoxContainer>
          {attribute.items &&
            attribute.items.map((option) => (
              <S.AtributeOption
                key={option.id}
                isColor={attribute.name === 'Color' ? option.value : false}
                outOfStock={outOfStock}
              >
                <S.AtributeText
                  key={option.id}
                  id={option.id}
                  className={`attribute-${attribute.name}`}
                  isColor={attribute.name === 'Color' ? option.value : false}
                  outOfStock={outOfStock}
                  onClick={(e) => {
                    if (!outOfStock) {
                      selectAttribute(e);
                      setPreferencesFunction(attribute.id, option.id);
                    }
                  }}
                >
                  {attribute.name === 'Color' ? '' : option.value}
                </S.AtributeText>
              </S.AtributeOption>
            ))}
        </S.AtributeBoxContainer>
      </S.AtributeHandlerContainer>
    );
  }
}

AttributeHandler.propTypes = {
  attribute: propTypes.shape({
    id: propTypes.string,
    name: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({})),
  }).isRequired,
  outOfStock: propTypes.bool.isRequired,
  setPreferencesFunction: propTypes.func,
  selected: propTypes.shape({ id: propTypes.string }),
};

AttributeHandler.defaultProps = {
  setPreferencesFunction: () => {},
  selected: {},
};
